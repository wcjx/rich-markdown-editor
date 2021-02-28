import BoldIcon from '@material-ui/icons/FormatBold'
import Heading1Icon from '@material-ui/icons/Title'
import BlockQuoteIcon from '@material-ui/icons/FormatQuote'
import CodeIcon from '@material-ui/icons/Code'
import ItalicIcon from '@material-ui/icons/FormatItalic'
import LinkIcon from '@material-ui/icons/Link'
import StrikethroughIcon from '@material-ui/icons/StrikethroughS'
import InputIcon from '@material-ui/icons/Input'
import HighlightIcon from '@material-ui/icons/Highlight'
import CommentIcon from "@material-ui/icons/ModeComment";
import RelationIcon from "@material-ui/icons/CallReceived";
import { isInTable } from "prosemirror-tables";
import { EditorState } from "prosemirror-state";
import isInList from "../queries/isInList";
import isMarkActive from "../queries/isMarkActive";
import isNodeActive from "../queries/isNodeActive";
import { MenuItem } from "../types";
import baseDictionary from "../dictionary";

export default function formattingMenuItems(
  state: EditorState,
  isTemplate: boolean,
  dictionary: typeof baseDictionary
): MenuItem[] {
  const { schema } = state;
  const isTable = isInTable(state);
  const isList = isInList(state);
  const allowBlocks = !isTable && !isList;

  return [
    {
      name: "placeholder",
      tooltip: dictionary.placeholder,
      icon: InputIcon,
      active: isMarkActive(schema.marks.placeholder),
      visible: isTemplate,
    },
    {
      name: "separator",
      visible: isTemplate,
    },
    {
      name: "strong",
      tooltip: dictionary.strong,
      icon: BoldIcon,
      active: isMarkActive(schema.marks.strong),
    },
    {
      name: "em",
      tooltip: dictionary.em,
      icon: ItalicIcon,
      active: isMarkActive(schema.marks.em),
    },
    {
      name: "strikethrough",
      tooltip: dictionary.strikethrough,
      icon: StrikethroughIcon,
      active: isMarkActive(schema.marks.strikethrough),
    },
    {
      name: "underline",
      tooltip: "underline",
      active: isMarkActive(schema.marks.underline),
    },
    // {
    //   name: "mark",
    //   tooltip: dictionary.mark,
    //   icon: HighlightIcon,
    //   active: isMarkActive(schema.marks.mark),
    //   visible: !isTemplate,
    // },
    {
      name: "code_inline",
      tooltip: dictionary.codeInline,
      icon: CodeIcon,
      active: isMarkActive(schema.marks.code_inline),
    },
    // {
    //   name: "separator",
    //   visible: allowBlocks,
    // },
    // {
    //   name: "heading",
    //   tooltip: dictionary.heading,
    //   icon: Heading1Icon,
    //   active: isNodeActive(schema.nodes.heading, { level: 1 }),
    //   attrs: { level: 1 },
    //   visible: allowBlocks,
    // },
    // {
    //   name: "blockquote",
    //   tooltip: dictionary.quote,
    //   icon: BlockQuoteIcon,
    //   active: isNodeActive(schema.nodes.blockquote),
    //   attrs: { level: 2 },
    //   visible: allowBlocks,
    // },
    {
      name: "separator",
    },
    {
      name: "link",
      tooltip: dictionary.createLink,
      icon: LinkIcon,
      active: isMarkActive(schema.marks.link),
      attrs: { href: "" },
    },
    {
      name: "annotation",
      tooltip: "annotation",
      icon: CommentIcon,
    },
    {
      name: "Relate",
      tooltip: "relate",
      icon: RelationIcon,
    },
  ];
}
