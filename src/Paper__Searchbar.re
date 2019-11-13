type ref;

[@bs.send] external isFocused: (ref, unit) => bool = "isFocused";
[@bs.send] external clear: (ref, unit) => unit = "clear";
[@bs.send] external focus: (ref, unit) => unit = "focus";
[@bs.send] external blur: (ref, unit) => unit = "blur";

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~style: ReactNative.Style.t=?,
    ~inputStyle: ReactNative.Style.t=?,
    ~value: string,
    ~iconColor: string=?,
    ~placeholder: string=?,
    ~onChangeText: string => unit=?,
    ~onIconPress: ReactNative.Event.pressEvent => unit=?,
    ~icon: Paper__Icon.t=?,
    ~clearIcon: Paper__Icon.t=?,
    ~ref: Js.Null.t(ref) => unit=?
  ) =>
  React.element =
  "Searchbar";
