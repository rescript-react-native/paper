open Paper__Utils;

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~disabled: bool=?,
    ~animated: bool=?,
    ~icon: 'a=?,
    ~color: string=?,
    ~accessibilityLabel: string=?,
    ~style: ReactNative.Style.t=?,
    ~size: int=?,
    ~onPress: ReactNative.Event.pressEvent => unit=?,
    ~theme: Paper__ThemeProvider.appTheme=?
  ) =>
  React.element =
  "IconButton";

let makeProps =
    (
      ~onPress=?,
      ~disabled=?,
      ~color=?,
      ~style=?,
      ~accessibilityLabel=?,
      ~theme=?,
      ~animated=?,
      ~icon: option(Icon.iconType)=?,
      ~size=?,
    ) => {
  makeProps(
    ~icon=?icon->Icon.mapToIcon,
    ~disabled?,
    ~onPress?,
    ~style?,
    ~accessibilityLabel?,
    ~theme?,
    ~animated?,
    ~color?,
    ~size?,
  );
};
