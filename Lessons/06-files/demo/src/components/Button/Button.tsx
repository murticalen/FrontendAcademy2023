import { PropsWithChildren } from "react";
import styled from "styled-components";
import { ButtonProps } from "./interface";

const StyledButton = styled.button<ButtonProps>`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid navy;
  font-size: 14px;
  text-align: center;
  ${(props) => (props.isActive ? "color: red" : "color: blue")};
`;

export const FancyButton = styled(StyledButton)`
  background-color: beige;
  font-size: 19px;
`;

export const Button = ({
  onClick,
  children,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
