open Paper__Utils;

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~label: string=?,
    ~small: bool=?,
    ~color: string=?,
    ~disabled: bool=?,
    ~onPress: ReactNative.Event.targetEvent => unit,
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~style: ReactNative.Style.t=?,
    ~accessibilityLabel: string=?,
    ~icon: 'a=?
  ) =>
  React.element =
  "FAB";

let makeProps =
    (
      ~label=?,
      ~accessibilityLabel=?,
      ~disabled=?,
      ~small=?,
      ~color=?,
      ~theme=?,
      ~icon: option(Icon.iconType)=?,
      ~style=?,
      ~onPress,
    ) =>
  makeProps(
    ~color?,
    ~icon=?icon->Icon.mapToIcon,
    ~style?,
    ~theme?,
    ~onPress,
    ~accessibilityLabel?,
    ~label?,
    ~disabled?,
    ~small?,
  );
