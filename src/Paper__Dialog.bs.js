'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");

function makeProps($staropt$star, visible, theme, style, onDismiss) {
  var dismissable = $staropt$star !== undefined ? $staropt$star : true;
  var partial_arg = dismissable;
  return (function (param, param$1, param$2) {
      var tmp = {
        visible: visible,
        onDismiss: onDismiss,
        children: param
      };
      if (partial_arg !== undefined) {
        tmp.dismissable = Caml_option.valFromOption(partial_arg);
      }
      if (theme !== undefined) {
        tmp.theme = Caml_option.valFromOption(theme);
      }
      if (style !== undefined) {
        tmp.style = Caml_option.valFromOption(style);
      }
      if (param$1 !== undefined) {
        tmp.key = Caml_option.valFromOption(param$1);
      }
      return tmp;
    });
}

var Actions = { };

var Content = { };

var ScrollArea = { };

var Title = { };

exports.makeProps = makeProps;
exports.Actions = Actions;
exports.Content = Content;
exports.ScrollArea = ScrollArea;
exports.Title = Title;
/* No side effect */
