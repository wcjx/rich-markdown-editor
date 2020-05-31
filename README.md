[![npm version](https://badge.fury.io/js/rich-markdown-editor.svg)](https://badge.fury.io/js/rich-markdown-editor) [![CircleCI](https://img.shields.io/circleci/project/github/outline/rich-markdown-editor.svg)](https://circleci.com/gh/outline/rich-markdown-editor) [![Formatted with Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) [![TypeScript](https://camo.githubusercontent.com/21132e0838961fbecb75077042aa9b15bc0bf6f9/68747470733a2f2f62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565)](https://www.typescriptlang.org/)



# rich-markdown-editor

A React and [Prosemirror](https://prosemirror.net/) based editor that powers [Outline](http://getoutline.com) and can also be used for displaying content in a read-only fashion.
The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.

> Important Note: This project is **not attempting to be an all-purpose Markdown editor**. It is built for the [Outline](http://getoutline.com) knowledge base, and whilst others are welcome to fork or use this package in your own products, development decisions are centered around the needs of Outline. 

## Usage

```javascript
import Editor from "rich-markdown-editor";

<Editor
  defaultValue="Hello world!"
/>
```

See a working example in the [example directory](/example).


### Props

#### `id`

A unique id for this editor, used to persist settings such as collapsed headings. If no `id` is passed then the editor will default to using the location pathname.

#### `defaultValue`

A markdown string that represents the initial value of the editor. Use this to prop to restore
previously saved content for the user to continue editing.

#### `placeholder`

Allows overriding of the placeholder. The default is "Write something nice…".

#### `readOnly`

With `readOnly` set to `false` the editor is optimized for composition. When `true` the editor can be used to display previously written content – headings gain anchors and links become clickable.

#### `autoFocus`

When set `true` together with `readOnly` set to `false`, focus at the end of the
document automatically.

#### `extensions`

Allows additional [Prosemirror plugins](https://prosemirror.net/docs/ref/#state.Plugin_System) to be passed to the underlying Prosemirror instance.

#### `theme`

Allows overriding the inbuilt theme to brand the editor, for example use your own font face and brand colors to have the editor fit within your application. See the [inbuilt theme](/src/theme.ts) for an example of the keys that should be provided.

#### `dark`

With `dark` set to `true` the editor will use a default dark theme that's included. See the [source here](/src/theme.ts).

#### `tooltip`

A React component that will be wrapped around items that have an optional tooltip. You can use this to inject your own tooltip library into the editor – the component will be passed the following props:

- `tooltip`: A React node with the tooltip content
- `placement`: Enum `top`, `bottom`, `left`, `right`
- `children`: The component that the tooltip wraps, must be rendered

#### `headingsOffset`

A number that will offset the document headings by a number of levels. For example, if you already nest the editor under a main `h1` title you might want the user to only be able to create `h2` headings and below, in this case you would set the prop to `1`.

#### `embeds`

Optionally define embeds which will be inserted in place of links when the `matcher` function returns a truthy value. The matcher method's return value will be available on the component under `props.attrs.matches`. If `title` and `icon` are provided then the embed will also appear in the block menu.

```javascript
<Editor
  embeds={[
    {
      title: "Google Doc",
      keywords: "google docs gdocs",
      icon: <GoogleDocIcon />,
      matcher: href => href.matches(/docs.google.com/i),
      component: GoogleDocEmbed
    }
  ]}
/>
```

### Callbacks

#### `uploadImage(file: Blob): Promise<string>`

If you want the editor to support images then this callback must be provided. The callback should accept a single `File` object and return a promise the resolves to a url when the image has been uploaded to a storage location, for example S3. eg:

```javascript
<Editor
  uploadImage={async file => {
    const result = await s3.upload(file);
    return result.url;
  }}
/>
```

#### `onSave({ done: boolean }): void`

This callback is triggered when the user explicitly requests to save using a keyboard shortcut, `Cmd+S` or `Cmd+Enter`. You can use this as a signal to save the document to a remote server.

#### `onCancel(): void`

This callback is triggered when the `Cmd+Escape` is hit within the editor. You may use it to cancel editing.

#### `onChange(() => value): void`

This callback is triggered when the contents of the editor changes, usually due to user input such as a keystroke or using formatting options. You may use this to locally persist the editors state, see the [inbuilt example](/example/src/index.js).

It returns a function which when called returns the current text value of the document. This optimization is made to avoid serializing the state of the document to text on every change event, allowing the host app to choose when it needs the serialized value.

#### `onImageUploadStart(): void`

This callback is triggered before `uploadImage` and can be used to show some UI that indicates an upload is in progress.

#### `onImageUploadStop(): void`

Triggered once an image upload has succeeded or failed.

#### `onSearchLink(term: string): Promise<{ title: string, url: string }[]>`

The editor provides an ability to search for links to insert from the formatting toolbar. If this callback is provided it should accept a search term as the only parameter and return a promise that resolves to an array of objects. eg:

```javascript
<Editor
  onSearchLink={async searchTerm => {
    const results = await MyAPI.search(searchTerm);

    return results.map(result => {
      title: result.name,
      url: result.url
    })
  }}
/>
```

#### `onShowToast(message: string, id: string): void`

Triggered when the editor wishes to show a toast message to the user. Hook into your apps
notification system, or simplisticly use `window.alert(message)`. The second parameter
is a stable identifier you can use to identify the message if you'd prefer to write
your own copy.


#### `onClickLink(href: string): void`

This callback allows overriding of link handling. It's often the case that you want to have external links open a new window and have internal links use something like `react-router` to navigate. If no callback is provided then default behavior of opening a new tab will apply to all links. eg:


```javascript
import { history } from "react-router";

<Editor
  onClickLink={href => {
    if (isInternalLink(href)) {
      history.push(href);
    } else {
      window.location.href = href;
    }
  }}
/>
```

#### `onClickHashtag(tag: string): void`

This callback allows handling of clicking on hashtags in the document text. If no callback is provided then hashtags will render as regular text, so you can choose if to support them or not by passing this prop.

```javascript
import { history } from "react-router";

<Editor
  onClickHashtag={tag => {
    history.push(`/hashtags/${tag}`);
  }}
/>
```

### Interface

The Editor component exposes a few methods for interacting with the mounted editor.

#### `focusAtStart(): void`
Place the cursor at the start of the document and focus it.

#### `focusAtEnd(): void`
Place the cursor at the end of the document and focus it.

#### `getHeadings(): { title: string, level: number, id: string }[]`
Returns an array of objects with the text content of all the headings in the document,
their level in the hierarchy, and the anchor id. This is useful to construct your own table of contents since the `toc` option was removed in v10.


## Contributing

This project uses [yarn](https://yarnpkg.com) to manage dependencies. You can use npm however it will not respect the yarn lock file and may install slightly different versions.

```
yarn install
```

When running in development [webpack-serve](https://github.com/webpack-contrib/webpack-serve) is included to serve an example editor with hot reloading. After installing dependencies run `yarn start` to get going.

## License

This project is [BSD licensed](/LICENSE).
