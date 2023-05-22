import { Event } from "@/model/Event";
import { FormEvent, SyntheticEvent, useState } from "react";
import styled from "styled-components";
import UseMemoWithSWR from "./components/UseMemoWithSWR";

enum Component {
  MemoWithSWR = "memoSWR",
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px;
`;

const ComponentsContainer = styled.div`
  margin: 30px auto;
`;

export default function Playground({ event }: { event: Event }) {
  const [selectedComponent, setSelectedComponent] = useState(
    Component.MemoWithSWR
  );

  return (
    <Container>
      <form>
        <select
          value={selectedComponent}
          onChange={(event) => {
            setSelectedComponent(event.target.value as Component);
          }}
        >
          <option value={Component.MemoWithSWR}>
            Use Memo Combined with SWR
          </option>
        </select>
      </form>

      <ComponentsContainer>
        {selectedComponent === Component.MemoWithSWR && (
          <UseMemoWithSWR event={event} />
        )}
      </ComponentsContainer>
    </Container>
  );
}
