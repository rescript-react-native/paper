'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Paper__Utils = require("./Paper__Utils.bs.js");

function makeProps(onPress, disabled, color, style, accessibilityLabel, theme, animated, icon, size) {
  var partial_arg = Paper__Utils.Icon.mapToIcon(icon);
  return (function (param, param$1) {
      var tmp = { };
      if (disabled !== undefined) {
        tmp.disabled = Caml_option.valFromOption(disabled);
      }
      if (animated !== undefined) {
        tmp.animated = Caml_option.valFromOption(animated);
      }
      if (partial_arg !== undefined) {
        tmp.icon = Caml_option.valFromOption(partial_arg);
      }
      if (color !== undefined) {
        tmp.color = Caml_option.valFromOption(color);
      }
      if (accessibilityLabel !== undefined) {
        tmp.accessibilityLabel = Caml_option.valFromOption(accessibilityLabel);
      }
      if (style !== undefined) {
        tmp.style = Caml_option.valFromOption(style);
      }
      if (size !== undefined) {
        tmp.size = Caml_option.valFromOption(size);
      }
      if (onPress !== undefined) {
        tmp.onPress = Caml_option.valFromOption(onPress);
      }
      if (theme !== undefined) {
        tmp.theme = Caml_option.valFromOption(theme);
      }
      if (param !== undefined) {
        tmp.key = Caml_option.valFromOption(param);
      }
      return tmp;
    });
}

exports.makeProps = makeProps;
/* No side effect */
