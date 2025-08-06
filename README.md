# Trending Repos

Small web app that is responsive using Reactjs that list the most starred Github repos created in the last 10 days.

## Getting Started

First, install [Node.js](https://nodejs.org/en/download).
Package manager used is [Pnpm](https://pnpm.io/).
Clone the project.
Then, run the development server.

```bash
pnpm i
pnpm run dev
```

## Reusable UI Components

To streamline development (especially in teams) and also to minimize rework across developers, I have built modular, pre-designed UI components.

```bash
path: src/components/ui
```

## Architecture Principles

- Server Components First: Prioritize server-rendered logic wherever possible.

- Data Fetching: Uses native fetch() which now supports deduplication, caching, and Request memoization

- Zod for Runtime Validation: TypeScript is compile-time only. Zod handles runtime validation to ensure type safety where it matters (API inputs, responses, form submissions, etc).

## Technologies Used

- Next.js App Router
- React 19+
- Zod for runtime schema validation
- Native fetch with full caching support
- Modular layouts + reusable components
