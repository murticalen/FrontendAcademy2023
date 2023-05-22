import { PropsWithChildren, memo, useContext } from "react";
import { StyledButton } from "./styles";
import { ThemeContext, useTheme } from "styled-components";

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  name?: string
}>;

export default function Button(props: ButtonProps) {
  const theme = useContext(ThemeContext);
  // const theme = useTheme()

  if (props.name) {
    console.log('Button '+props.name + ' re-rendered')
  }

  return <StyledButton onClick={props.onClick}>{props.children || props.name}</StyledButton>;
}

export const MemoizedButton = memo(Button);
