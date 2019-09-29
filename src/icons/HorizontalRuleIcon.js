// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function HorizontalRuleIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M3,5H21V7H3V5M3,11V9H21V11H3M3,19V13H21V19H3Z" />
    </Icon>
  );
}