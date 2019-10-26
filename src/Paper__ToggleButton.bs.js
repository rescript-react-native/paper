'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Paper__Utils = require("./Paper__Utils.bs.js");

function makeProps(icon) {
  var arg = Paper__Utils.Icon.mapToIcon(icon);
  return (function (param, param$1, param$2, param$3) {
      return (function (param$4, param$5, param$6, param$7, param$8, param$9, param$10) {
          var prim = param;
          var prim$1 = param$1;
          var prim$2 = param$2;
          var prim$3 = param$3;
          var prim$4 = arg;
          var prim$5 = param$4;
          var prim$6 = param$5;
          var prim$7 = param$6;
          var prim$8 = param$7;
          var prim$9 = param$8;
          var prim$10 = param$9;
          var tmp = { };
          if (prim !== undefined) {
            tmp.value = Caml_option.valFromOption(prim);
          }
          if (prim$1 !== undefined) {
            tmp.disabled = Caml_option.valFromOption(prim$1);
          }
          if (prim$2 !== undefined) {
            tmp.loading = Caml_option.valFromOption(prim$2);
          }
          if (prim$3 !== undefined) {
            tmp.status = (function () {
                  switch (Caml_option.valFromOption(prim$3)) {
                    case 321172263 :
                        return "checked";
                    case 254196206 :
                        return "unchecked";
                    
                  }
                })();
          }
          if (prim$4 !== undefined) {
            tmp.icon = Caml_option.valFromOption(prim$4);
          }
          if (prim$5 !== undefined) {
            tmp.color = Caml_option.valFromOption(prim$5);
          }
          if (prim$6 !== undefined) {
            tmp.accessibilityLabel = Caml_option.valFromOption(prim$6);
          }
          if (prim$7 !== undefined) {
            tmp.style = Caml_option.valFromOption(prim$7);
          }
          if (prim$8 !== undefined) {
            tmp.theme = Caml_option.valFromOption(prim$8);
          }
          if (prim$9 !== undefined) {
            tmp.onPress = Caml_option.valFromOption(prim$9);
          }
          if (prim$10 !== undefined) {
            tmp.key = Caml_option.valFromOption(prim$10);
          }
          return tmp;
        });
    });
}

var Group = { };

var Row = { };

exports.makeProps = makeProps;
exports.Group = Group;
exports.Row = Row;
/* No side effect */
