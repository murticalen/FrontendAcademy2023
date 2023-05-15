import styled from "styled-components";
import { colors } from "../theme/colors";

export const StyledButton = styled.button`
    padding: 0 16px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    height: 40px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.colors.primary.default};
`