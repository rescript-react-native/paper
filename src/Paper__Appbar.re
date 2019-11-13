[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~dark: bool=?,
    ~children: React.element=?,
    ~style: ReactNative.Style.t=?,
    ~theme: Paper__ThemeProvider.appTheme=?
  ) =>
  React.element =
  "Appbar";

module Actions = {
  [@bs.module "react-native-paper"] [@bs.scope "Appbar"] [@react.component]
  external make:
    (
      ~color: string=?,
      ~icon: Paper__Icon.t=?,
      ~size: int=?,
      ~disabled: bool=?,
      ~accessibilityLabel: string=?,
      ~children: React.element=?,
      ~style: ReactNative.Style.t=?,
      ~onPress: unit => unit=?
    ) =>
    React.element =
    "Actions";
};

module Content = {
  [@bs.module "react-native-paper"] [@bs.scope "Appbar"] [@react.component]
  external make:
    (
      ~color: string=?,
      ~title: React.element=?,
      ~titleStyle: ReactNative.Style.t=?,
      ~subtitle: React.element=?,
      ~subtitleStyle: ReactNative.Style.t=?,
      ~style: ReactNative.Style.t=?,
      ~onPress: unit => unit=?,
      ~theme: Paper__ThemeProvider.appTheme=?
    ) =>
    React.element =
    "Content";
};

module Header = {
  [@bs.module "react-native-paper"] [@bs.scope "Appbar"] [@react.component]
  external make:
    (
      ~dark: bool=?,
      ~statusBarHeight: int=?,
      ~theme: Paper__ThemeProvider.appTheme=?,
      ~children: React.element=?,
      ~style: ReactNative.Style.t=?
    ) =>
    React.element =
    "Header";
};

module BackAction = {
  [@bs.module "react-native-paper"] [@bs.scope "Appbar"] [@react.component]
  external make: (~accessibilityLabel: string=?) => React.element =
    "BackAction";
};
