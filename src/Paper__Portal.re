module Host = {
  [@bs.module "react-native-paper"] [@bs.scope "Portal"] [@react.component]
  external make: (~children: React.element) => React.element = "Host";
};

[@bs.module "react-native-paper"] [@react.component]
external make:
  (~theme: Paper__ThemeProvider.appTheme=?, ~children: React.element) =>
  React.element =
  "Portal";
