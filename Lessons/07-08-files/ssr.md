To show how server-side rendering works in Next.js, init a new page which will show player details based on Sofascore's data.

Place the page at `pages/player/[slug]/[id].tsx` file path, to again use file-system based routing. The page should just display the player's name at first.

Add SWRConfig in `_app.tsx` file and fetcher for it in `utils/fetcher.ts`.

Fetch details of player with id = referenceId + 1 where referenceId is the id of the current player. Add a link to the page of that player, if they exist. Extract the PlayerLink component in `Link` module in `PlayerLink.tsx` file.

Demonstrate how `useEffect` and `useSWR` are only executed on client, how `console.log` on server is written in terminal and condition for `isServer` variable using `typeof window === 'undefined'` condition.