'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReactNativePaper = require("react-native-paper");

function createTheme($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, param) {
  var roundness = $staropt$star !== undefined ? $staropt$star : ReactNativePaper.DefaultTheme.roundness;
  var dark = $staropt$star$1 !== undefined ? $staropt$star$1 : ReactNativePaper.DefaultTheme.dark;
  var colors = $staropt$star$2 !== undefined ? Caml_option.valFromOption($staropt$star$2) : ReactNativePaper.DefaultTheme.colors;
  var fonts = $staropt$star$3 !== undefined ? Caml_option.valFromOption($staropt$star$3) : ReactNativePaper.DefaultTheme.fonts;
  return {
          roundness: roundness,
          dark: dark,
          colors: colors,
          fonts: fonts
        };
}

exports.createTheme = createTheme;
/* react-native-paper Not a pure module */
