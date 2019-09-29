// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function ItalicIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
    </Icon>
  );
}