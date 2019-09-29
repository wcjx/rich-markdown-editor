// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function PlusIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </Icon>
  );
}