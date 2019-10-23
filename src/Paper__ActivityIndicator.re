open Belt;
open Paper__Utils;

type size = [ | `small | `large | `value(int)];

[@bs.module "react-native-paper"] [@react.component]
external make:
  (
    ~animation: bool=?,
    ~hidesWhenStopped: bool=?,
    ~color: string=?,
    ~size: 'size=?,
    ~style: ReactNative.Style.t=?,
    ~theme: Paper__ThemeProvider.appTheme=?
  ) =>
  React.element =
  "ActivityIndicator";

let makeProps = (~size: option(size)=?) => {
  makeProps(
    ~size=?
      size->Option.map(size =>
        switch (size) {
        | `small => "small"
        | `large => "large"
        | `value(v) => v->toString
        }
      ),
  );
};
