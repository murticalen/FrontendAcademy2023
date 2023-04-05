import { useState } from "react";

const DEFAULT = ["Hello", "Again", "from", "Sofascore", "Academy"];

function Element(props: { element: string }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <div>{props.element}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export function List() {
  const [elements, setElements] = useState<string[]>(DEFAULT);

  return (
    <>
      <button
        style={{ marginTop: "30px" }}
        onClick={() => setElements([...elements].sort())}
      >
        SORT
      </button>

      <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
        {elements.map((e) => (
          <Element key={e} element={e} />
        ))}
      </div>

      <button onClick={() => setElements(DEFAULT)}>DEFAULT</button>
    </>
  );
}
