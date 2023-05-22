import { useEffect, useRef, useState } from "react";

export const useIsServer = () => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => setIsServer(false), []);

  return isServer;
};

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
