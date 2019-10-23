'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Paper__Utils = require("./Paper__Utils.bs.js");

function makeProps(mode, selected, disabled, accessibilityLabel, avatar, icon, style, theme, onPress, onClose, children) {
  var partial_arg = Paper__Utils.Icon.mapToIcon(icon);
  return (function (param, param$1) {
      var tmp = {
        mode: (function () {
              switch (mode) {
                case 613841570 :
                    return "outlined";
                case -1010955335 :
                    return "flat";
                
              }
            })(),
        children: children
      };
      if (selected !== undefined) {
        tmp.selected = Caml_option.valFromOption(selected);
      }
      if (disabled !== undefined) {
        tmp.disabled = Caml_option.valFromOption(disabled);
      }
      if (accessibilityLabel !== undefined) {
        tmp.accessibilityLabel = Caml_option.valFromOption(accessibilityLabel);
      }
      if (avatar !== undefined) {
        tmp.avatar = Caml_option.valFromOption(avatar);
      }
      if (partial_arg !== undefined) {
        tmp.icon = Caml_option.valFromOption(partial_arg);
      }
      if (style !== undefined) {
        tmp.style = Caml_option.valFromOption(style);
      }
      if (theme !== undefined) {
        tmp.theme = Caml_option.valFromOption(theme);
      }
      if (onPress !== undefined) {
        tmp.onPress = Caml_option.valFromOption(onPress);
      }
      if (onClose !== undefined) {
        tmp.onClose = Caml_option.valFromOption(onClose);
      }
      if (param !== undefined) {
        tmp.key = Caml_option.valFromOption(param);
      }
      return tmp;
    });
}

exports.makeProps = makeProps;
/* No side effect */
