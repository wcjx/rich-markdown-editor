// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function AlignCenterIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z" />
    </Icon>
  );
}