// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function BlockQuoteIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </Icon>
  );
}