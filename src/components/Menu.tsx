import * as React from "react";
import { EditorView } from "prosemirror-view";
import { withTheme } from "styled-components";
import ToolbarButton from "./ToolbarButton";
import ToolbarSeparator from "./ToolbarSeparator";
import theme from "../theme";
import { MenuItem } from "../types";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "nowrap",
      listStyle: "none",
      margin: 0,
      padding: theme.spacing(1),
    },
  }),
);
type Props = {
  tooltip: typeof React.Component | React.FC<any>;
  commands: Record<string, any>;
  view: EditorView;
  theme: typeof theme;
  items: MenuItem[];
};

function Menu(props: Props) {
  const { view, items } = props;
  const { state } = view;
  const Tooltip = props.tooltip;
  const classes = useStyles();
  return (
    <div>
      {items.map((item, index) => {
        if (item.name === "separator" && item.visible !== false) {
          return <ToolbarSeparator key={index} />;
        }
        if (item.visible === false || !item.icon) {
          return null;
        }
        const Icon = item.icon;
        const isActive = item.active ? item.active(state) : false;

        return (
          <ToolbarButton
            key={index}
            onClick={() => item.name && props.commands[item.name](item.attrs)}
            active={isActive}
          >
            <Tooltip tooltip={item.tooltip} placement="top">
              <Icon />
            </Tooltip>
          </ToolbarButton>
        );
      })}
    </div>
  );
}

export default withTheme(Menu);
