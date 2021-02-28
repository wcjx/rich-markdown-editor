import TrashIcon from '@material-ui/icons/Delete'
import AlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import AlignRightIcon from '@material-ui/icons/FormatAlignRight'
import AlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import InsertLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import InsertRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { EditorState } from "prosemirror-state";
import isNodeActive from "../queries/isNodeActive";
import { MenuItem } from "../types";
import baseDictionary from "../dictionary";

export default function tableColMenuItems(
  state: EditorState,
  index: number,
  dictionary: typeof baseDictionary
): MenuItem[] {
  const { schema } = state;

  return [
    {
      name: "setColumnAttr",
      tooltip: dictionary.alignLeft,
      icon: AlignLeftIcon,
      attrs: { index, alignment: "left" },
      active: isNodeActive(schema.nodes.th, {
        colspan: 1,
        rowspan: 1,
        alignment: "left",
      }),
    },
    {
      name: "setColumnAttr",
      tooltip: dictionary.alignCenter,
      icon: AlignCenterIcon,
      attrs: { index, alignment: "center" },
      active: isNodeActive(schema.nodes.th, {
        colspan: 1,
        rowspan: 1,
        alignment: "center",
      }),
    },
    {
      name: "setColumnAttr",
      tooltip: dictionary.alignRight,
      icon: AlignRightIcon,
      attrs: { index, alignment: "right" },
      active: isNodeActive(schema.nodes.th, {
        colspan: 1,
        rowspan: 1,
        alignment: "right",
      }),
    },
    {
      name: "separator",
    },
    {
      name: "addColumnBefore",
      tooltip: dictionary.addColumnBefore,
      icon: InsertLeftIcon,
      active: () => false,
    },
    {
      name: "addColumnAfter",
      tooltip: dictionary.addColumnAfter,
      icon: InsertRightIcon,
      active: () => false,
    },
    {
      name: "separator",
    },
    {
      name: "deleteColumn",
      tooltip: dictionary.deleteColumn,
      icon: TrashIcon,
      active: () => false,
    },
  ];
}
