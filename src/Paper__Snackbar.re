[@bs.module "react-native-paper"] [@bs.scope "Snackbar"]
external durationShort: int = "DURATION_SHORT";
[@bs.module "react-native-paper"] [@bs.scope "Snackbar"]
external durationMedium: int = "DURATION_MEDIUM";
[@bs.module "react-native-paper"] [@bs.scope "Snackbar"]
external durationLong: int = "DURATION_LONG";

type duration =
  | DurationShort
  | DurationMedium
  | DurationLong
  | Duration(int);

let getDuration = d =>
  switch (d) {
  | DurationShort => durationShort
  | DurationMedium => durationMedium
  | DurationLong => durationLong
  | Duration(duration) => duration
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
    ~duration: 'duration=?,
    ~onDismiss: unit => unit,
    ~style: ReactNative.Style.t=?,
    ~action: snackbarAction=?,
    ~visible: bool
  ) =>
  React.element =
  "Snackbar";

let makeProps = (~duration: option(duration)=?) => {
  makeProps(~duration=?duration->Belt.Option.map(d => getDuration(d)));
};
