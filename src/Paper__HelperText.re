[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~style: ReactNative.Style.t=?,
    ~visible: bool=?,
    ~_type: [@bs.string] [ | `error | `info],
    ~children: React.element
  ) =>
  React.element =
  "HelperText";
