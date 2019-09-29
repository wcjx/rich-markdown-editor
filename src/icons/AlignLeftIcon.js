// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function AlignLeftIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z" />
    </Icon>
  );
}
