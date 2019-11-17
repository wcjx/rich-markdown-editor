[![npm version](https://badge.fury.io/js/rich-markdown-editor.svg)](https://badge.fury.io/js/rich-markdown-editor) [![CircleCI](https://img.shields.io/circleci/project/github/outline/rich-markdown-editor.svg)](https://circleci.com/gh/outline/rich-markdown-editor) [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/outline) [![Formatted with Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

# rich-markdown-editor

A React and [Slate](https://github.com/ianstormtaylor/slate) based editor that powers the [Outline wiki](http://getoutline.com) and can also be used for displaying content in a read-only fashion.
The editor is WYSIWYG and includes many formatting tools whilst retaining the ability to write markdown
shortcuts inline and output Markdown.

> Note: This project is **not attempting** to be an all-purpose Markdown editor. It renders and outputs a subset of the Markdown schema, as well as supporting markdown-like syntax as shortcuts for rich text editing.

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

Allows overriding of the placeholder text displayed in the main body content. The default is "Write something nice…".

#### `readOnly`

With `readOnly` set to `false` the editor is optimized for composition. When `true` the editor can be used to display previously written content – headings gain anchors, a table of contents displays and links become clickable.

#### `autoFocus`

When set `true` together with `readOnly` set to `false`, focus at the
document automatically.

#### `spellCheck`

Set to false to prevent spellchecking – defaults to true.

#### `toc`

With `toc` set to `true` the editor will display a table of contents for headings in the document. This is particularly useful for larger documents and allows quick jumping to key sections.

#### `plugins`

Allows additional [Slate plugins](https://github.com/ianstormtaylor/slate/blob/master/docs/general/plugins.md) to be passed to the underlying Slate editor.

#### `schema`

Allows additional Slate schema to be passed to the underlying Slate editor.

#### `theme`

Allows overriding the inbuilt theme to brand the editor, for example use your own font face and brand colors to have the editor fit within your application. See the [inbuilt theme](/src/theme.js) for an example of the keys that should be provided.

#### `dark`

With `dark` set to `true` the editor will use a default dark theme that's included. See the [source here](/src/theme.js).

#### `tooltip`

A React component that will be wrapped around items that have an optional tooltip. You can use this to inject your own tooltip library into the editor – the component will be passed the following props:

- `tooltip`: A React node with the tooltip content
- `placement`: Enum `top`, `bottom`, `left`, `right`
- `children`: The component that the tooltip wraps, must be rendered

#### `headingsOffset`

A number that will offset the document headings by a number of levels. For example, if you already nest the editor under a main `h1` title you might want the user to only be able to create `h2` headings and below, in this case you would set the prop to `1`.


### Callbacks

#### `uploadImage`

If you want the editor to support images then this callback must be provided. The callback should accept a single `File` object and return a promise the resolves to a url when the image has been uploaded to a storage location, for example S3. eg:

```javascript
<Editor
  uploadImage={async file => {
    const result = await s3.upload(file);
    return result.url;
  }}
/>
```

#### `onSave({ done: boolean })`

This callback is triggered when the user explicitly requests to save using a keyboard shortcut, `Cmd+S` or `Cmd+Enter`. You can use this as a signal to save the document to a remote server.

#### `onCancel`

This callback is triggered when the `Cmd+Escape` is hit within the editor. You may use it to cancel editing.

#### `onChange(() => value)`

This callback is triggered when the contents of the editor changes, usually due to user input such as a keystroke or using formatting options. You may use this to locally persist the editors state, see the [inbuilt example](/example/index.js).

As of `v4.0.0` this callback returns a function which when called returns the current text value of the document. This optimization is made to avoid serializing the state of the document to text on every change event, allowing the host app to choose when it needs this value.

#### `onImageUploadStart`

This callback is triggered before `uploadImage` and can be used to show some UI that indicates an upload is in progress.

#### `onImageUploadStop`

Triggered once an image upload has succeeded or failed.

#### `onSearchLink(term: string)`

The editor provides an ability to search for links to insert from the formatting toolbar. If this callback is provided it should accept a search term as the only parameter and return a promise that resolves to an array of [SearchResult](/src/types.js) objects. eg:

#### `onShowToast(message: string)`

Triggered when the editor wishes to show a toast message to the user. Hook into your apps
notification system, or simplisticly use `window.alert(message)`.



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

#### `onClickLink(href: string)`

This callback allows overriding of link handling. It's often the case that you want to have external links open a new window whilst internal links may use something like `react-router` to navigate. If no callback is provided then default behavior will apply to all links. eg:


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

#### `onClickHashtag(tag: string)`

This callback allows handling of clicking on hashtags in the document text. If no callback is provided then hashtags will render as regular text, so you can choose if to support them or not by passing this prop.

```javascript
import { history } from "react-router";

<Editor
  onClickHashtag={tag => {
    history.push(`/hashtags/${tag}`);
  }}
/>
```

#### `getLinkComponent(Node)`

This callback allows links to request an alternative component to display instead of an inline link. Given a link node return `undefined` for no replacement or a valid React component to replace the standard link display. This is particularly useful for "embeds".


## Contributing

This project uses [yarn](https://yarnpkg.com) to manage dependencies. You can use npm however it will not respect the yarn lock file and may install slightly different versions.

```
yarn install
```

When running in development [webpack-serve](https://github.com/webpack-contrib/webpack-serve) is included to serve an example editor with hot reloading. After installing dependencies run `yarn start` to get going.

## License

This project is [BSD licensed](/LICENSE).
