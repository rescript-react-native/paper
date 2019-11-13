module Duration = {
  type t;
  [@bs.module "react-native-paper"] [@bs.scope "Snackbar"]
  external short: t = "DURATION_SHORT";
  [@bs.module "react-native-paper"] [@bs.scope "Snackbar"]
  external medium: t = "DURATION_MEDIUM";
  [@bs.module "react-native-paper"] [@bs.scope "Snackbar"]
  external long: t = "DURATION_LONG";

  external value: int => t = "";
};

[@bs.deriving abstract]
type snackbarAction = {
  label: string,
  onPress: unit => unit,
};

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~duration: Duration.t=?,
    ~onDismiss: unit => unit,
    ~style: ReactNative.Style.t=?,
    ~action: snackbarAction=?,
    ~visible: bool
  ) =>
  React.element =
  "Snackbar";
