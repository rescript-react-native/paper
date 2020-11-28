# `@reason-react-native/paper`

[![Build Status](https://github.com/reason-react-native/paper/workflows/Build/badge.svg)](https://github.com/reason-react-native/paper/actions)
[![Version](https://img.shields.io/npm/v/@reason-react-native/paper.svg)](https://www.npmjs.com/@reason-react-native/paper)
[![Chat](https://img.shields.io/discord/235176658175262720.svg?logo=discord&colorb=blue)](https://reasonml-community.github.io/reason-react-native/discord/)

[ReScript](https://rescript-lang.org) / [Reason](https://reasonml.github.io) bindings for
[`react-native-paper`](https://github.com/callstack/react-native-paper).

Exposed as `Paper` module.

`@reason-react-native/paper` X.y.\* means it's compatible with
`react-native-paper` X.y.\*

## Status

⚠️ Work in progress. These bindings are used successfully in several apps, but
are not complete yet and still subject to change.

[Checkout missing components](#implemented-components)

## Installation

When [`react-native-paper`](https://github.com/callstack/react-native-paper)
is properly installed & configured by following their installation instructions,
you can install the bindings:

```console
npm install @reason-react-native/paper
# or
yarn add @reason-react-native/paper
```

`@reason-react-native/paper` should be added to `bs-dependencies` in your
`bsconfig.json`:

```diff
{
  //...
  "bs-dependencies": [
    "reason-react",
    "reason-react-native",
    // ...
+    "@reason-react-native/paper"
  ],
  //...
}
```

## Usage

### Components

```reason
[@react.component]
let make = () => {
  let (visible, setVisible) = React.useState(() => false);

  <Paper.Portal>
    <Paper.Dialog visible onDismiss={_ => setVisible(_ => false)}>
      <Paper.Dialog.Title>
        "Title"->React.string
      </Paper.Dialog.Title>
      <Paper.Dialog.Description>
        "Description"->React.string
      </Paper.Dialog.Description>
    </Paper.Dialog>
  </Paper.Portal>
};
```

---

## Changelog

Check the [changelog](./CHANGELOG.md) for more informations about recent
releases.

## Contribute

Read the [contribution guidelines](https://github.com/reason-react-native/.github/blob/master/CONTRIBUTING.md) before contributing.

## Code of Conduct

We want this community to be friendly and respectful to each other. Please read
[our full code of conduct](https://github.com/reason-react-native/.github/blob/master/CODE_OF_CONDUCT.md) so that you can understand what
actions will and will not be tolerated.

## Implemented components

- [x] ActivityIndicator
- [x] Avatar
- [x] Appbar
- [x] BottomNavigation
- [x] Badge
- [x] Banner
- [x] Button
- [x] Checkbox
- [x] Card
- [x] Chip
- [x] Dialog
- [x] Divider
- [x] FAB
- [ ] DataTable
- [x] Drawer
- [x] List
- [x] IconButton
- [x] Modal
- [ ] Menu
- [x] RadioButton
- [x] Searchbar
- [x] PaperProvider
- [x] Portal
- [x] ProgressBar
- [x] Snackbar
- [x] Surface
- [x] TextInput
- [x] TouchableRipple
- [x] ToggleButton
- [x] HelperText
- [x] ThemeProvider
- Typography
  - [x] Title
  - [x] Subheading
  - [x] Headline
  - [x] Paragraph
  - [x] Caption
  - [x] Text
