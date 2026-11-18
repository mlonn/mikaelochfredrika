# Mikael & Fredrika

Wedding site, hosted on Cloudflare at https://bröllop.losell.nu.

- The Next.js site is statically exported to `out/` and served by a Cloudflare Worker
  (`worker/index.js`, configured in `wrangler.jsonc`).
- Gallery photos live in the R2 bucket `brollop-photos`; the Worker lists them at
  `/api/images` and serves them under `/photos/*`, `/thumbs/*` and `/originals/*`.

## Development

Next.js 16 (pages router, static export), React 19, styled-components 6. Needs Node 22
and Yarn 4 via Corepack (`corepack enable`); the version is pinned in `package.json`.

```bash
yarn dev       # Next.js dev server (gallery API not available)
yarn preview   # export + wrangler dev, full site incl. gallery against a local R2 bucket
```

## Deploying

Pushing to `main` on GitHub deploys the site. Cloudflare Workers Builds is connected to
this repo and runs `yarn build` followed by `npx wrangler deploy`, so only committed and
pushed code ever goes live. Build logs: Cloudflare dashboard → Workers & Pages → `brollop`
→ Deployments.

`wrangler.jsonc` attaches the custom domain `bröllop.losell.nu` and binds the R2 bucket
`brollop-photos`.

## Adding photos

```bash
yarn upload-photos ~/path/to/folder           # production
yarn upload-photos ~/path/to/folder --local   # local bucket used by `yarn preview`
```

Stores the untouched original (offered as the lightbox download) and uses macOS `sips`
to create a 2560px JPEG and a thumbnail. The gallery is sorted by file name.
To remove a photo, delete `originals/`, `photos/` and `thumbs/<name>.jpg` from the
bucket (`npx wrangler r2 object delete brollop-photos/photos/<name>.jpg --remote`).
