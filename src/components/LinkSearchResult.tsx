import * as React from "react";
import styled, { withTheme } from "styled-components";
import { NextIcon } from "outline-icons";
import theme from "../theme";

type Props = {
  onClick: (event: React.MouseEvent) => void;
  selected: boolean;
  title: string;
  theme: typeof theme;
};

function LinkSearchResult({ title, theme, ...rest }: Props) {
  return (
    <ListItem {...rest}>
      <i>
        <NextIcon color={theme.toolbarItem} />
      </i>
      {title}
    </ListItem>
  );
}

const ListItem = styled.li<{
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 6px 8px 6px 0;
  color: ${props => props.theme.toolbarItem};
  font-family: ${props => props.theme.fontFamily};
  font-size: 15px;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  i {
    visibility: ${props => (props.selected ? "visible" : "hidden")};
  }
  &:hover,
  &:focus,
  &:active {
    font-weight: 500;
    outline: none;
    i {
      visibility: visible;
    }
  }
`;

export default withTheme(LinkSearchResult);
