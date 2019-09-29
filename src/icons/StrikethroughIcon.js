// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function StrikethroughIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z" />
    </Icon>
  );
}