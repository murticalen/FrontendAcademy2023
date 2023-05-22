Example: `Portal.tsx`

Add div with id=`portal-root` in `_app.tsx` file. This will be the place in which your portal data is rendered.

In `Portal` component add a state which triggers a toast shown in portal root. Shown that everything works out of the box using `ReactDOM.createPortal`.

Inspect the DOM to show how the component rendered in React is in `Portal.tsx` which is way below in the component hierarchy, but the actual HTML is rendered exactly where we want - inside `portal-root` div.