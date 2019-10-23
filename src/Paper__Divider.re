[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~inset: bool=?,
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~style: ReactNative.Style.t=?
  ) =>
  React.element =
  "Divider";
