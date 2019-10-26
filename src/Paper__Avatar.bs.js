'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Paper__Utils = require("./Paper__Utils.bs.js");

function makeProps(icon) {
  var partial_arg = Paper__Utils.Icon.extractIconProps(icon);
  return (function (param, param$1, param$2, param$3, param$4, param$5) {
      var tmp = {
        icon: partial_arg
      };
      if (param !== undefined) {
        tmp.size = Caml_option.valFromOption(param);
      }
      if (param$1 !== undefined) {
        tmp.color = Caml_option.valFromOption(param$1);
      }
      if (param$2 !== undefined) {
        tmp.style = Caml_option.valFromOption(param$2);
      }
      if (param$3 !== undefined) {
        tmp.theme = Caml_option.valFromOption(param$3);
      }
      if (param$4 !== undefined) {
        tmp.key = Caml_option.valFromOption(param$4);
      }
      return tmp;
    });
}

var Icon = {
  makeProps: makeProps
};

var $$Image = { };

var $$Text = { };

exports.Icon = Icon;
exports.$$Image = $$Image;
exports.$$Text = $$Text;
/* No side effect */
