import styled from "styled-components";
import { ButtonProps } from "./interface";


export const StyledButton = styled.button<ButtonProps>`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid navy;
  font-size: 14px;
  text-align: center;
  ${(props) => (props.isActive ? "color: red" : "color: blue")};
`;