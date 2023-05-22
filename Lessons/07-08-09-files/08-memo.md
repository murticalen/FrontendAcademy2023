Create a playground page on `/playground` path and add random examples here. Let the page fetch event deatils of a selected event and work with the data.

Example: `UseMemoWithSWR.tsx`
To demonstrate how `useMemo` hook works with SWR, fetch details of another event with refreshInterval of 1 second. The event should already be finished so there is no chance that the data changes. Call `console.log` inside the memoized calculation and show that it only happens once.