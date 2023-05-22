import { useEffect, useRef, useState } from "react";

export default function Refs() {
  const ref = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    console.log(ref.current);
    setDivWidth(Math.round(ref.current?.getBoundingClientRect()?.width || 0));
  }, []);

  return (
    <div ref={ref} style={{ padding: "30px", width: "100%" }}>
      This is a div with width: {divWidth}
    </div>
  );
}
