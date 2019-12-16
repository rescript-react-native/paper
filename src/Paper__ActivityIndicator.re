module Size = {
  type t;

  [@bs.val] external small: t = "small";
  [@bs.val] external large: t = "large";

  external value: int => t = "";
};

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~animation: bool=?,
    ~hidesWhenStopped: bool=?,
    ~color: string=?,
    ~size: Size.t=?,
    ~style: ReactNative.Style.t=?,
    ~theme: Paper__ThemeProvider.Theme.t=?
  ) =>
  React.element =
  "ActivityIndicator";
