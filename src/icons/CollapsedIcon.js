// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function CollapsedIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M7,10L12,15L17,10H7Z" />
    </Icon>
  );
}