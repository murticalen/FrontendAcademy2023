import { Event } from "@/model/Event";
import { PropsWithChildren, useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import UseMemoWithSWR from "./components/UseMemoWithSWR";
import { ThemeSetterContext } from "@/utils/context";
import { ThemeName, themes } from "@/utils/theme";
import Memoization from "./components/Memoization";
import Refs from "./components/Refs";
import Portal from "./components/Portal";

enum Component {
  None = "none",
  MemoWithSWR = "memoSWR",
  Memoization = "memoization",
  Refs = "refs",
  Portal = "portal",
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px;

  & > * {
    margin: 30px;
  }
`;

const ComponentsContainer = styled.div`
  margin: 30px auto;
`;

function ComponentDisplay({
  name,
  selected,
  children,
}: PropsWithChildren<{ selected: Component; name: Component }>) {
  if (selected === name) {
    return <ComponentsContainer>{children}</ComponentsContainer>;
  }

  return null;
}

export default function Playground({ event }: { event: Event }) {
  const [selectedComponent, setSelectedComponent] = useState(Component.None);
  const theme = useContext(ThemeContext);
  const { setTheme } = useContext(ThemeSetterContext);

  return (
    <Container>
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

          <option value={Component.Portal}>Portal example with a custom toast</option>
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

      <ComponentDisplay
        selected={selectedComponent}
        name={Component.MemoWithSWR}
      >
        <UseMemoWithSWR event={event} />
      </ComponentDisplay>

      <ComponentDisplay
        selected={selectedComponent}
        name={Component.Memoization}
      >
        <Memoization />
      </ComponentDisplay>

      <ComponentDisplay selected={selectedComponent} name={Component.Refs}>
        <Refs />
      </ComponentDisplay>

      <ComponentDisplay selected={selectedComponent} name={Component.Portal}>
        <Portal />
      </ComponentDisplay>
    </Container>
  );
}
