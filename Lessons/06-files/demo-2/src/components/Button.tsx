import styled from "styled-components";

interface StyledButtonProps {
  isActive?: boolean;
}

interface FancyButtonProps {
  isFirst?: boolean;
}

export const Button = styled.button<StyledButtonProps>`
  font-size: 24px;
  font-weight: 600;
  border-radius: 16px;
  border: 1px solid navy;
  padding: 16px;
  margin: 4px;

  ${(props) =>
    props.isActive ? "border: 2px solid red;" : "border: 1px solid grey;"}
`;

export const FancyButton = styled(Button)<FancyButtonProps>`
  color: navy;
  & > .extra-green {
    color: darkgreen;
  }
  ${(p) => p.isActive && "color: purple;"}
`;
