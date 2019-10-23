open Paper__Utils;

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~mode: [@bs.string] [ | `outlined | `flat],
    ~selected: bool=?,
    ~disabled: bool=?,
    ~accessibilityLabel: string=?,
    ~avatar: React.element=?,
    ~icon: 'a=?,
    ~style: ReactNative.Style.t=?,
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~onPress: ReactNative.Event.pressEvent => unit=?,
    ~onClose: ReactNative.Event.pressEvent => unit=?,
    ~children: React.element
  ) =>
  React.element =
  "Chip";

let makeProps =
    (
      ~mode,
      ~selected=?,
      ~disabled=?,
      ~accessibilityLabel=?,
      ~avatar=?,
      ~icon: option(Icon.iconType)=?,
      ~style=?,
      ~theme=?,
      ~onPress=?,
      ~onClose=?,
      ~children,
    ) => {
  makeProps(
    ~mode,
    ~selected?,
    ~disabled?,
    ~accessibilityLabel?,
    ~avatar?,
    ~icon=?icon->Icon.mapToIcon,
    ~style?,
    ~theme?,
    ~onPress?,
    ~onClose?,
    ~children,
  );
};
