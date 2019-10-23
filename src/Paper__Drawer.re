module Item = {
  [@bs.module "react-native-paper"] [@bs.scope "Drawer"] [@react.component]
  external make:
    (
      ~label: string,
      ~icon: React.element=?,
      ~active: bool=?,
      ~theme: Paper__ThemeProvider.appTheme=?,
      ~onPress: ReactNative.Event.targetEvent => unit=?,
      ~style: ReactNative.Style.t=?
    ) =>
    React.element =
    "Item";
};

module Section = {
  [@bs.module "react-native-paper"] [@bs.scope "Drawer"] [@react.component]
  external make:
    (~title: string=?, ~theme: Js.t({..})=?, ~children: React.element) =>
    React.element =
    "Section";
};
