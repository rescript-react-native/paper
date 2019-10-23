open ReactNative;

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~elevation: int=?,
    ~onLongPress: Event.pressEvent => unit=?,
    ~onPress: Event.pressEvent => unit=?,
    ~style: Style.t=?,
    ~theme: 'a=?,
    ~testID: string=?,
    ~children: React.element
  ) =>
  React.element =
  "Card";

[@bs.deriving abstract]
type props = {
  [@bs.optional]
  elevation: int,
  [@bs.optional]
  onLongPress: Event.pressEvent => unit,
  [@bs.optional]
  onPress: Event.pressEvent => unit,
  [@bs.optional]
  style: Style.t,
  [@bs.optional]
  theme: Paper__ThemeProvider.appTheme,
  [@bs.optional]
  testID: string,
};

module Actions = {
  [@bs.module "react-native-paper"] [@bs.scope "Card"] [@react.component]
  external make:
    (~style: ReactNative.Style.t=?, ~children: React.element) => React.element =
    "Actions";
};

module Content = {
  [@bs.module "react-native-paper"] [@bs.scope "Card"] [@react.component]
  external make:
    (~style: ReactNative.Style.t=?, ~children: React.element) => React.element =
    "Content";
};
