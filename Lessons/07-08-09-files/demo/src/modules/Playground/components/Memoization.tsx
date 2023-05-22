import Button, { MemoizedButton } from "@/components/Button/Button";
import { useCallback, useState } from "react";

export default function Memoization() {
  const [, setRandomNumber] = useState(0);

  const onClickNoCallback = () => {
    setRandomNumber(Math.random());
    console.log('-----------------')
  };
  const memoizedOnClick = useCallback(onClickNoCallback, []);

    // useEffect(() => {
  //   const intervalV = setInterval(() => setRandomNumber(Math.random()), 1000)

  //   return () => clearInterval(intervalV)
  // }, [])

  return (
    <>
      <MemoizedButton onClick={memoizedOnClick} name="Memoized callback, memoized Button"/>
      <Button onClick={memoizedOnClick} name="Memoized callback, regular Button"/>
      <MemoizedButton onClick={onClickNoCallback} name="Regular callback, memoized Button"/>
      <Button onClick={onClickNoCallback} name="Regular callback, regular Button"/>
    </>
  );
}
