import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px;

  & > * {
    margin: 30px;
  }
`;

export const ComponentWrapper = styled.div`
  margin: 30px auto;
`;