// Serves the statically exported Next.js site and the photo gallery stored in R2.
//
// R2 layout (written by scripts/upload-photos.sh):
//   originals/<name>.jpg  untouched original, offered as the download
//   photos/<name>.jpg     max 2560px, shown in the lightbox
//   thumbs/<name>.jpg     small version shown in the grid

const IMMUTABLE = 'public, max-age=31536000, immutable';

async function listPhotos(env) {
  const names = [];
  let cursor;
  do {
    const page = await env.PHOTOS.list({ prefix: 'photos/', cursor });
    for (const obj of page.objects) {
      names.push(obj.key.slice('photos/'.length));
    }
    cursor = page.truncated ? page.cursor : undefined;
  } while (cursor);

  names.sort();
  return names.map((name) => ({
    id: name,
    src: `/photos/${encodeURIComponent(name)}`,
    thumbnail: `/thumbs/${encodeURIComponent(name)}`,
    download: `/originals/${encodeURIComponent(name)}`,
  }));
}

async function servePhoto(env, key, request) {
  const obj = await env.PHOTOS.get(key, {
    onlyIf: request.headers,
    range: request.headers,
  });
  if (!obj) return new Response('Not found', { status: 404 });

  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set('etag', obj.httpEtag);
  headers.set('cache-control', IMMUTABLE);
  if (!headers.has('content-type')) headers.set('content-type', 'image/jpeg');

  // `onlyIf` matched an If-None-Match / If-Modified-Since: no body returned.
  if (!('body' in obj)) return new Response(null, { status: 304, headers });
  return new Response(obj.body, { headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    if (path === '/api/images') {
      if (request.method !== 'GET') {
        return new Response('Method not allowed', { status: 405 });
      }
      return Response.json(await listPhotos(env), {
        headers: { 'cache-control': 'public, max-age=60' },
      });
    }

    if (/^\/(photos|thumbs|originals)\//.test(path)) {
      if (request.method !== 'GET' && request.method !== 'HEAD') {
        return new Response('Method not allowed', { status: 405 });
      }
      return servePhoto(env, path.slice(1), request);
    }

    return env.ASSETS.fetch(request);
  },
};
