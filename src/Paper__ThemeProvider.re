module Theme = {
  type t;

  module Colors = {
    type t;

    [@bs.obj]
    external make:
      (
        ~primary: string,
        ~accent: string,
        ~background: string,
        ~surface: string,
        ~error: string,
        ~text: string,
        ~disabled: string,
        ~placeholder: string,
        ~backdrop: string
      ) =>
      t =
      "";

    [@bs.get] external primary: t => string = "primary";
    [@bs.get] external accent: t => string = "accent";
    [@bs.get] external background: t => string = "background";
    [@bs.get] external surface: t => string = "surface";
    [@bs.get] external error: t => string = "error";
    [@bs.get] external text: t => string = "text";
    [@bs.get] external disabled: t => string = "disabled";
    [@bs.get] external placeholder: t => string = "placeholder";
    [@bs.get] external backdrop: t => string = "backdrop";
  };

  module Fonts = {
    type t;
    type configured;

    [@bs.deriving abstract]
    type font = {
      fontFamily: string,
      fontWeight: string,
    };

    [@bs.module "react-native-paper"]
    external configureFonts: t => configured = "configureFonts";

    [@bs.obj]
    external make:
      (~regular: font, ~medium: font, ~light: font, ~thin: font) => t =
      "";
  };

  [@bs.obj]
  external make:
    (
      ~roundness: int=?,
      ~dark: bool=?,
      ~colors: Colors.t=?,
      ~fonts: Fonts.configured=?,
      unit
    ) =>
    t =
    "";

  [@bs.get] external fonts: t => Fonts.configured = "fonts";
  [@bs.get] external colors: t => Colors.t = "colors";
  [@bs.get] external dark: t => bool = "dark";
};

[@bs.module "react-native-paper"] [@react.component]
external make: (~theme: Theme.t=?, ~children: React.element) => React.element =
  "ThemeProvider";

[@bs.module "react-native-paper"]
external defaultTheme: Theme.t = "DefaultTheme";

[@bs.module "react-native-paper"] external darkTheme: Theme.t = "DarkTheme";
