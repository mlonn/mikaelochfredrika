#!/usr/bin/env bash
# Adds every image in a folder to the gallery (R2 bucket "brollop-photos").
#
#   scripts/upload-photos.sh ~/Pictures/brollop          # production bucket
#   scripts/upload-photos.sh ~/Pictures/brollop --local  # wrangler dev's local bucket
#
# For each image (converted to JPEG with macOS `sips` where needed) it uploads:
#   originals/<name>.jpg  the untouched file, for full-resolution download
#   photos/<name>.jpg     max 2560px, shown in the lightbox
#   thumbs/<name>.jpg     420px high, shown in the grid
# The gallery is sorted by file name. Re-running overwrites images with the same name.
set -euo pipefail

BUCKET="brollop-photos"
PARALLEL="${PARALLEL:-6}"
SELF="$(cd "$(dirname "$0")" && pwd)/$(basename "$0")"
cd "$(dirname "$0")/.."
WRANGLER="$PWD/node_modules/.bin/wrangler"

put() { # <key> <file> <target>
  local tries=0
  until "$WRANGLER" r2 object put "$BUCKET/$1" --file "$2" \
    --content-type image/jpeg "$3" >/dev/null 2>&1; do
    ((++tries >= 3)) && { echo "✘ failed to upload $1" >&2; return 1; }
    sleep 2
  done
}

upload_one() { # <file> <target>
  local src="$1" target="$2" base name tmp
  base="$(basename "${src%.*}")"
  name="$(echo "$base" | tr -cs 'A-Za-z0-9_-' '-' | sed 's/-*$//').jpg"
  tmp="$(mktemp -d)"

  local original="$src"
  case "${src##*.}" in
    jpg | jpeg | JPG | JPEG) ;;
    *)
      original="$tmp/original.jpg"
      sips -s format jpeg -s formatOptions 95 "$src" --out "$original" >/dev/null
      ;;
  esac
  sips -s format jpeg -s formatOptions 85 -Z 2560 "$src" --out "$tmp/full.jpg" >/dev/null
  sips -s format jpeg -s formatOptions 80 --resampleHeight 420 "$tmp/full.jpg" --out "$tmp/thumb.jpg" >/dev/null

  put "originals/$name" "$original" "$target" &&
    put "photos/$name" "$tmp/full.jpg" "$target" &&
    put "thumbs/$name" "$tmp/thumb.jpg" "$target"
  local status=$?
  rm -rf "$tmp"
  [[ $status -eq 0 ]] && echo "✔ $name"
  return $status
}

if [[ "${1:-}" == "--one" ]]; then
  upload_one "$2" "$3"
  exit
fi

dir="${1:?usage: $0 <folder> [--local]}"
dir="$(cd "$OLDPWD" && cd "$dir" && pwd)"
target="--remote"
[[ "${2:-}" == "--local" ]] && target="--local"

shopt -s nullglob nocaseglob
files=("$dir"/*.{jpg,jpeg,png,heic,heif,webp})
shopt -u nocaseglob
[[ ${#files[@]} -gt 0 ]] || { echo "No images found in $dir"; exit 1; }

echo "Uploading ${#files[@]} image(s), $PARALLEL at a time…"
printf '%s\0' "${files[@]}" |
  xargs -0 -P "$PARALLEL" -I{} "$SELF" --one {} "$target"
echo "Done."
