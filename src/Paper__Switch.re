[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~disabled: bool=?,
    ~value: bool=?,
    ~color: string=?,
    ~style: ReactNative.Style.t=?,
    ~theme: Paper__ThemeProvider.appTheme=?,
    ~onValueChange: bool => unit=?,
    ~children: React.element=?
  ) =>
  React.element =
  "Switch";
