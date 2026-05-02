## Getting Started

Install dependencies and run the dev server:

```bash
cd web
npm install
npm run dev
```

The site is served on [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `web/.env.local` with the following variables:

```
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=your-google-maps-embed-api-key
# Only set when building for a subfolder like /test
NEXT_BASE_PATH=/test
```

- Enable the Google Maps Embed API in Google Cloud Console to obtain a key.
- `NEXT_BASE_PATH` is optional for local development, but set it to `/test` before running `npm run build` when you plan to deploy to `test.restaurantvinde.dk`. Leave it unset for local dev (site will be served from `/`).

Never commit your `.env.local`.

## Scripts

- `npm run dev` – start the Next.js dev server
- `npm run build` – build the static site into `web/out`
- `npm run start` – start the production server (only needed if hosting on Node)
- `npm run lint` – run ESLint

When `NEXT_BASE_PATH` is set, the exported site expects to live inside that subfolder. The built artifacts are placed in `web/out`, which you can upload directly (e.g., into `public_html/test`).

## Content & Data Layer

- JSON files in `src/content` are parsed once when the server boots, using the Zod schemas in `src/domain/content/schemas.ts`.
  - Menu-specific data sits under `src/content/menu`, `alacarte`, `sushi`, etc., and is exposed via helper functions in `src/data/menu.ts`.
  - General site chrome (hero, navigation, contact info, opening hours) lives under `src/content/site` and is read through `src/data/site.ts`.
- Pages never import JSON directly; they call the helpers above. When it’s time to connect a CMS or database for price management, replace the internals of those helper modules with API/database calls and the UI won’t need to change.
