**How to use this template**

- Put your bindings in `src/ReactNativeSomething` & rename accordingly or use
  `bsconfig.json` `"namespace"` field (more on this below),
- Update all occurences of

  - `@reason-react-native/__template__`
  - `https://github.com/reason-react-native/__template__`
  - `__template__`
  - `@react-native-community/something`
  - `https://github.com/react-native-community/something`
  - `ReactNativeSomething`. If you have more than a file exposed, you should
    consider using BuckleScript custom namespace by adjusting `bsconfig.json`
    and adding a `"namespace": "react-native-something"` (note that it will be
    converted to `ReactNativeSomething`)

- Add your `@react-native-community/something` (adjusted) in `peerDependencies`
  & `devDependencies` section
- Adjust the changelog (and/or clean it)
- Remove this part ⬆ & keep everything below ⬇

---

# `@reason-react-native/__template__`

[![Build Status](https://github.com/reason-react-native/__template__/workflows/Build/badge.svg)](https://github.com/reason-react-native/__template__/actions)
[![Version](https://img.shields.io/npm/v/@reason-react-native/__template__.svg)](https://www.npmjs.com/@reason-react-native/__template__)
[![Chat](https://img.shields.io/discord/235176658175262720.svg?logo=discord&colorb=blue)](https://reasonml-community.github.io/reason-react-native/discord/)

[ReasonML](https://reasonml.github.io) /
[BuckleScript](https://bucklescript.github.io) bindings for
[`@react-native-community/something`](https://github.com/react-native-community/something).

Exposed as `ReactNativeSomething` module.

`@reason-react-native/__template__` X.y._ means it's compatible with
`@react-native-community/something` X.y._

## Installation

When
[`@react-native-community/something`](`https://github.com/react-native-community/something`)
is properly installed & configured by following their installation instructions,
you can install the bindings:

```console
npm install @reason-react-native/__template__
# or
yarn add @reason-react-native/__template__
```

`@reason-react-native/__template__` should be added to `bs-dependencies` in your
`bsconfig.json`. Something like

```diff
{
  //...
  "bs-dependencies": [
    "reason-react",
    "reason-react-native",
    // ...
+    "@reason-react-native/__template__"
  ],
  //...
}
```

## Usage

### Types

#### `ReactNativeSomething.t`

...

### Methods

#### `ReactNativeSomething.method`

...

---

## Changelog

Check the [changelog](./CHANGELOG.md) for more informations about recent
releases.

## Contribute

Read the [contribution guidelines](./CONTRIBUTING.md) before contributing.

## Code of Conduct

We want this community to be friendly and respectful to each other. Please read
[our full code of conduct](./CODE_OF_CONDUCT.md) so that you can understand what
actions will and will not be tolerated.
