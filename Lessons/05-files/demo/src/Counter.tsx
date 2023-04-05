import { PropsWithChildren, useState } from "react";

interface ButtonProps {
  onClick?: () => void;
  isActive?: boolean;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={props.onClick}
      style={props.isActive ? { backgroundColor: "tomato" } : undefined}
    >
      {props.children}
    </button>
  );
}

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [lastClicked, setLastClicked] = useState<string>();

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
      <Button
        isActive={lastClicked === "-"}
        onClick={() => {
          setCounter(counter - 1);
          setLastClicked("-");
        }}
      >
        -
      </Button>
      <div style={{ fontSize: "30px", width: "100px", textAlign: "center" }}>
        {counter}
      </div>
      <Button
        isActive={lastClicked === "+"}
        onClick={() => {
          setCounter(counter + 1);
          setLastClicked("+");
        }}
      >
        +
      </Button>
    </div>
  );
}
