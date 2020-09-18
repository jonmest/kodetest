# Kodetest

Here are some assumptions and choices I have taken in the project:

- The data supplied by the API appears to be infrequently -- if ever -- updated, when looking at its nice and round number of a 100 posts at the `/posts` endpoint. For this reason, I'm using static generation in Next.js, which means the pages only need to be built once and can be served by a CDN. It's also what Next.js recommends whenever possible.