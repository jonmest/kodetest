# Kodetest

Kodetest is a test project written using Next.js, Typescript and Sass. The data used comes from JSONPlaceholder, a fake REST API for testing and prototyping. For this reason, you don't need to setup a database and API on your own for the prototype. The base URL to JSONPlaceholder can be found in `.env`.

## Project structure
The web application has two endpoints:
1. `*/` a homepage listing all existing posts
2. `*/[id]` a detailed page for each post

Other key locations in the repo are:

- The Next.js pages for beforementioned endpoints can be found in `/pages/[id].tsx` and `kodetest/pages/index.tsx`.
- React components are located in the `/components` directory.
- Typescript interfaces are defined in `/interfaces/index.ts`.
- Sass files are located at `/styles`.
- Functions for abstracting the API requests can be found at `/lib/api.ts`

## Assumptions
The data supplied by the JSONPlaceholder API appears to be infrequently — if ever — updated, when looking at its nice and round number of a 100 posts at the `/posts` endpoint. For this reason, I'm using static generation in Next.js, which means the pages only need to be built once and can be served by a CDN. It's also what [Next.js recommends](https://nextjs.org/docs/basic-features/pages) whenever possible.

## How to run the application
### Built
First you need to build the application:
- `npm install`
- `npm run build`

When it's done:
- `npm start`

### Development version
- Install all dependencies: `npm install`
- Run development server: `npm run dev`

## How to run integration tests
This project makes use of Cypress for some automated integration tests. To run them on your own:

- Follow the previous instructions for running the development server (How to run the application -> Development version)
- Open a new terminal instance in the project root
- Execute `npm run test`

You can find the two test files in `/cypress/integration`.
