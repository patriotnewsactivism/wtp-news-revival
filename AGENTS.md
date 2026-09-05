# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React + TypeScript news application. Application entry points are in `src/main.tsx` and `src/App.tsx`; page-level routes live in `src/pages/`. Keep reusable visual components in `src/components/`, grouped by feature (`articles/`, `home/`, `layout/`) or in `components/ui/` for shadcn-style primitives. Put shared client hooks in `src/hooks/`, utilities and external API helpers in `src/lib/`, and Supabase client/types in `src/integrations/supabase/`. Static files belong in `public/`; imported images belong in `src/assets/`. Database migrations and Deno Edge Functions are under `supabase/`.

## Build, Test, and Development Commands

- `npm install` installs dependencies (the committed `package-lock.json` is authoritative).
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` runs the production build into `dist/`.
- `npm run preview` serves the built bundle locally.
- `npm run lint` checks TypeScript and TSX files with ESLint.
- `npm test` runs the Vitest suite once; `npm run test:watch` keeps it running during development.

Run `npm run lint`, `npm test`, and `npm run build` before submitting changes that affect the application.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing two-space indentation, double quotes, semicolons, and trailing commas. Name React components and page files in PascalCase (`ArticleCard.tsx`, `NewArticle.tsx`); hooks begin with `use` (`useArticles.ts`); helpers use camelCase. Prefer the `@/` alias for imports from `src/`. Keep route composition in pages and extract repeatable UI into components. Do not hand-edit generated Supabase types unless regeneration is unavailable.

## Testing Guidelines

Vitest runs in `jsdom` with Testing Library matchers configured in `src/test/setup.ts`. Add tests alongside or near the relevant source using `*.test.ts(x)` or `*.spec.ts(x)`; for example, `src/components/articles/ArticleCard.test.tsx`. Describe user-observable behavior and use Testing Library queries for component tests. No coverage threshold is configured, but new logic and bug fixes should include focused regression coverage.

## Commit & Pull Request Guidelines

Recent history uses short, imperative subjects such as `Build We The People News UI` and `Update env and supabase types`. Keep each commit focused; write a concise imperative subject and explain meaningful behavior or schema changes in the body. Pull requests should summarize the user-facing impact, link the relevant issue when one exists, list validation commands run, and include screenshots for visual changes. Never commit real credentials from `.env`; document required configuration instead.
