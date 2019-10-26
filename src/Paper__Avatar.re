open Paper__Utils;

module Icon = {
  [@bs.module "react-native-paper"] [@bs.scope "Avatar"] [@react.component]
  external make:
    (
      ~icon: 'icon,
      ~size: int=?,
      ~color: string=?,
      ~style: ReactNative.Style.t=?,
      ~theme: Paper__ThemeProvider.appTheme=?
    ) =>
    React.element =
    "Icon";

  let makeProps = (~icon: Icon.iconType) =>
    makeProps(~icon=icon->Icon.extractIconProps);
};

module Image = {
  [@bs.module "react-native-paper"] [@bs.scope "Avatar"] [@react.component]
  external make:
    (
      ~source: 'source,
      ~size: int=?,
      ~style: ReactNative.Style.t=?,
      ~theme: Paper__ThemeProvider.appTheme=?
    ) =>
    React.element =
    "Image";
};

module Text = {
  [@bs.module "react-native-paper"] [@bs.scope "Avatar"] [@react.component]
  external make:
    (
      ~label: string,
      ~size: int=?,
      ~color: string=?,
      ~style: ReactNative.Style.t=?,
      ~labelStyle: ReactNative.Style.t=?,
      ~theme: Paper__ThemeProvider.appTheme=?
    ) =>
    React.element =
    "Text";
};
