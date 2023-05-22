import { Event } from "@/model/Event";
import { PropsWithChildren, useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import UseMemoWithSWR from "./components/UseMemoWithSWR";
import { ThemeSetterContext } from "@/utils/context";
import { ThemeName, themes } from "@/utils/theme";
import Memoization from "./components/Memoization";
import Refs from "./components/Refs";
import Portal from "./components/Portal";
import * as S from "./styles";

enum Component {
  None = "none",
  MemoWithSWR = "memoSWR",
  Memoization = "memoization",
  Refs = "refs",
  Portal = "portal",
}

function ComponentDisplay({
  name,
  selected,
  children,
}: PropsWithChildren<{ selected: Component; name: Component }>) {
  if (selected === name) {
    return <S.ComponentWrapper>{children}</S.ComponentWrapper>;
  }

  return null;
}

function Components({
  selected,
  event,
}: {
  selected: Component;
  event: Event;
}) {
  return (
    <>
      <ComponentDisplay selected={selected} name={Component.MemoWithSWR}>
        <UseMemoWithSWR event={event} />
      </ComponentDisplay>

      <ComponentDisplay selected={selected} name={Component.Memoization}>
        <Memoization />
      </ComponentDisplay>

      <ComponentDisplay selected={selected} name={Component.Refs}>
        <Refs />
      </ComponentDisplay>

      <ComponentDisplay selected={selected} name={Component.Portal}>
        <Portal />
      </ComponentDisplay>
    </>
  );
}

export default function Playground({ event }: { event: Event }) {
  const [selectedComponent, setSelectedComponent] = useState(Component.None);
  const theme = useContext(ThemeContext);
  const { setTheme } = useContext(ThemeSetterContext);

  return (
    <S.Container>
      <form>
        <select
          value={selectedComponent}
          onChange={(event) => {
            setSelectedComponent(event.target.value as Component);
          }}
        >
          <option value={Component.None}>None</option>

          <option value={Component.MemoWithSWR}>
            Use Memo Combined with SWR
          </option>

          <option value={Component.Memoization}>
            Memoization with useCallback and React.Memo
          </option>

          <option value={Component.Refs}>Refs example with a div</option>

          <option value={Component.Portal}>
            Portal example with a custom toast
          </option>
        </select>
      </form>
      <form>
        <select
          value={theme.name}
          onChange={(event) => {
            setTheme(themes[event.target.value as ThemeName]);
          }}
        >
          <option value={ThemeName.Light}>Light</option>
          <option value={ThemeName.Dark}>Dark</option>
        </select>
      </form>

      <Components selected={selectedComponent} event={event} />
    </S.Container>
  );
}
