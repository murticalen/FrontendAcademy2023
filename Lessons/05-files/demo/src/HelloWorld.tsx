import { CSSProperties } from "react";

interface HelloWorldProps {
  color: string;
  backgroundColor?: CSSProperties['backgroundColor']
  transform?: CSSProperties['transform']
}

export function HelloWord(props: HelloWorldProps) {
  return (
    <div
      style={{
        color: props.color,
        fontSize: "35px",
        textTransform: "uppercase",
        cursor: 'pointer'
      }}
      onClick={() => alert('This is a test')}
    >
      Hello world
    </div>
  );
}
