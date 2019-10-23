open Paper__Utils;

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~mode: [@bs.string] [ | `text | `outlined | `contained]=?,
    ~disabled: bool=?,
    ~compact: bool=?,
    ~raised: bool=?,
    ~loading: bool=?,
    ~dark: bool=?,
    ~icon: 'a=?,
    ~color: string=?,
    ~accessibilityLabel: string=?,
    ~style: ReactNative.Style.t=?,
    ~labelStyle: ReactNative.Style.t=?,
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~onPress: ReactNative.Event.pressEvent => unit=?,
    ~children: React.element
  ) =>
  React.element =
  "Button";

let makeProps = (~icon: option(Icon.iconType)=?) => {
  makeProps(~icon=?icon->Icon.mapToIcon);
};
