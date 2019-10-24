[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~visible: bool=?,
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~children: React.element=?,
    ~size: int=?,
    ~style: ReactNative.Style.t=?
  ) =>
  React.element =
  "Badge";
