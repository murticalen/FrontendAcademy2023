import { PropsWithChildren, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function Portal() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const onButtonClick = useCallback(() => {
    setIsToastVisible((prev) => !prev);
  }, []);

  return (
    <div>
      <h1>Welcome to the Portal app</h1>
      <button onClick={onButtonClick}>Toggle Toast</button>
      {isToastVisible && (
        <Toast>
          <div style={{ display: "flex", alignItems: 'center'}}>
            <h4>I am the Toast</h4>
            <button style={{ marginLeft: 4, padding: '6px' }} onClick={onButtonClick}>
              X
            </button>
          </div>
        </Toast>
      )}
    </div>
  );
}

/**
 * Note how Toast will be rendered outside hierarchy in the DOM, but will be kept in hierarchy in Virtual DOM
 */
function Toast({ children }: PropsWithChildren<{}>) {
  const Container = styled.div`
    right: 50px;
    position: fixed;
    bottom: 50px;
    background: whitesmoke;
    color: ${p => p.theme.colors.primary.default};
    padding: 20px;
    font-size: 24px;
  `;

  const markup = <Container>{children}</Container>

  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(markup, portalRoot);
}
