# Task

You're a frontend engineer on a product team. Build the UI described below as a React component.

## Request

Build a notification settings form with an email digest frequency, a product updates toggle, a security alerts toggle that is always on, and a save button.

## Your team's UI library

Your team's UI library is in `./system/`. Read it before you start. It's importable as `@acme/ui`.

## File requirements

Write exactly one file: `./output.tsx` (TypeScript + React).

- `export default` one component that takes no props.
- `export const styles` must be a plain CSS string with any styles the component needs (it can be empty). It's injected into a Shadow DOM root that wraps your component; `:host` is that root. The UI library's own styles are already injected.
- No Tailwind, CSS modules or global CSS. Use system font stacks only.
- The component renders in a container 320–600px wide: use `@container` queries, not `@media`.
- No data fetching and no browser APIs during render. Local state is fine. Use static ids, not `useId`.
