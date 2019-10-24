'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Paper__Utils = require("./Paper__Utils.bs.js");

function makeProps(icon, clearIcon) {
  var arg = Paper__Utils.Icon.mapToIcon(icon);
  var arg$1 = Paper__Utils.Icon.mapToIcon(clearIcon);
  return (function (param) {
      var prim = undefined;
      var prim$1 = undefined;
      var prim$2 = undefined;
      var prim$3 = param;
      var prim$4 = undefined;
      var prim$5 = undefined;
      var prim$6 = undefined;
      var prim$7 = undefined;
      var prim$8 = arg;
      var prim$9 = arg$1;
      var prim$10 = undefined;
      var prim$11 = undefined;
      var tmp = {
        value: prim$3
      };
      if (prim !== undefined) {
        tmp.theme = Caml_option.valFromOption(prim);
      }
      if (prim$1 !== undefined) {
        tmp.style = Caml_option.valFromOption(prim$1);
      }
      if (prim$2 !== undefined) {
        tmp.inputStyle = Caml_option.valFromOption(prim$2);
      }
      if (prim$4 !== undefined) {
        tmp.iconColor = Caml_option.valFromOption(prim$4);
      }
      if (prim$5 !== undefined) {
        tmp.placeholder = Caml_option.valFromOption(prim$5);
      }
      if (prim$6 !== undefined) {
        tmp.onChangeText = Caml_option.valFromOption(prim$6);
      }
      if (prim$7 !== undefined) {
        tmp.onIconPress = Caml_option.valFromOption(prim$7);
      }
      if (prim$8 !== undefined) {
        tmp.icon = Caml_option.valFromOption(prim$8);
      }
      if (prim$9 !== undefined) {
        tmp.clearIcon = Caml_option.valFromOption(prim$9);
      }
      if (prim$10 !== undefined) {
        tmp.ref = Caml_option.valFromOption(prim$10);
      }
      if (prim$11 !== undefined) {
        tmp.key = Caml_option.valFromOption(prim$11);
      }
      return tmp;
    });
}

exports.makeProps = makeProps;
/* No side effect */
