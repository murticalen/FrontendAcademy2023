import { PropsWithChildren, memo, useContext } from "react";
import { StyledButton } from "./styles";
import { ThemeContext, useTheme } from "styled-components";

export default function Button(props: PropsWithChildren<{onClick: () => void}>) {

    const theme = useContext(ThemeContext)
    // const theme = useTheme()
    console.log('Button rendered')
    console.log(theme.colors.primary.default)

    return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
}

export const MemoizedButton = memo(Button)
