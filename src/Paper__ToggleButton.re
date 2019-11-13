[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~value: string=?,
    ~disabled: bool=?,
    ~loading: bool=?,
    ~status: [@bs.string] [ | `checked | `unchecked]=?,
    ~icon: Paper__Icon.t=?,
    ~color: string=?,
    ~accessibilityLabel: string=?,
    ~style: ReactNative.Style.t=?,
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~onPress: string => unit=?
  ) =>
  React.element =
  "ToggleButton";

module Group = {
  [@bs.module "react-native-paper"]
  [@bs.scope "ToggleButton"]
  [@react.component]
  external make:
    (
      ~value: string,
      ~onValueChange: string => unit,
      ~children: React.element,
      ~style: ReactNative.Style.t=?
    ) =>
    React.element =
    "Group";
};

module Row = {
  [@bs.module "react-native-paper"]
  [@bs.scope "ToggleButton"]
  [@react.component]
  external make:
    (
      ~value: string,
      ~onValueChange: string => unit,
      ~children: React.element,
      ~style: ReactNative.Style.t=?
    ) =>
    React.element =
    "Row";
};
