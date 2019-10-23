'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Paper__Utils = require("./Paper__Utils.bs.js");

function makeProps(label, accessibilityLabel, disabled, small, color, theme, icon, style, onPress) {
  var partial_arg = Paper__Utils.Icon.mapToIcon(icon);
  return (function (param, param$1) {
      var tmp = {
        onPress: onPress
      };
      if (label !== undefined) {
        tmp.label = Caml_option.valFromOption(label);
      }
      if (small !== undefined) {
        tmp.small = Caml_option.valFromOption(small);
      }
      if (color !== undefined) {
        tmp.color = Caml_option.valFromOption(color);
      }
      if (disabled !== undefined) {
        tmp.disabled = Caml_option.valFromOption(disabled);
      }
      if (theme !== undefined) {
        tmp.theme = Caml_option.valFromOption(theme);
      }
      if (style !== undefined) {
        tmp.style = Caml_option.valFromOption(style);
      }
      if (accessibilityLabel !== undefined) {
        tmp.accessibilityLabel = Caml_option.valFromOption(accessibilityLabel);
      }
      if (partial_arg !== undefined) {
        tmp.icon = Caml_option.valFromOption(partial_arg);
      }
      if (param !== undefined) {
        tmp.key = Caml_option.valFromOption(param);
      }
      return tmp;
    });
}

exports.makeProps = makeProps;
/* No side effect */
