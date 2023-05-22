Create a `useIsServer` hook inside `utils/hooks.ts` file.

Create a demo page for comparison of `useIsServer` hook vs `const isServer = typeof window === 'undefined'` on a `/is-server` path. You will demo how both conditions log `true` to the terminal, how `useIsServer` return value is first `true` in the browser, but the isServer variable is `false`, but then how both become `false` after useEffect is called.
