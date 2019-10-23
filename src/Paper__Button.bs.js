'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Paper__Utils = require("./Paper__Utils.bs.js");

function makeProps(icon) {
  var arg = Paper__Utils.Icon.mapToIcon(icon);
  return (function (param, param$1, param$2, param$3, param$4, param$5) {
      return (function (param$6, param$7, param$8, param$9, param$10, param$11, param$12, param$13, param$14) {
          var prim = param;
          var prim$1 = param$1;
          var prim$2 = param$2;
          var prim$3 = param$3;
          var prim$4 = param$4;
          var prim$5 = param$5;
          var prim$6 = arg;
          var prim$7 = param$6;
          var prim$8 = param$7;
          var prim$9 = param$8;
          var prim$10 = param$9;
          var prim$11 = param$10;
          var prim$12 = param$11;
          var prim$13 = param$12;
          var prim$14 = param$13;
          var tmp = {
            children: prim$13
          };
          if (prim !== undefined) {
            tmp.mode = (function () {
                  switch (Caml_option.valFromOption(prim)) {
                    case -856044371 :
                        return "text";
                    case 613841570 :
                        return "outlined";
                    case 1064531251 :
                        return "contained";
                    
                  }
                })();
          }
          if (prim$1 !== undefined) {
            tmp.disabled = Caml_option.valFromOption(prim$1);
          }
          if (prim$2 !== undefined) {
            tmp.compact = Caml_option.valFromOption(prim$2);
          }
          if (prim$3 !== undefined) {
            tmp.raised = Caml_option.valFromOption(prim$3);
          }
          if (prim$4 !== undefined) {
            tmp.loading = Caml_option.valFromOption(prim$4);
          }
          if (prim$5 !== undefined) {
            tmp.dark = Caml_option.valFromOption(prim$5);
          }
          if (prim$6 !== undefined) {
            tmp.icon = Caml_option.valFromOption(prim$6);
          }
          if (prim$7 !== undefined) {
            tmp.color = Caml_option.valFromOption(prim$7);
          }
          if (prim$8 !== undefined) {
            tmp.accessibilityLabel = Caml_option.valFromOption(prim$8);
          }
          if (prim$9 !== undefined) {
            tmp.style = Caml_option.valFromOption(prim$9);
          }
          if (prim$10 !== undefined) {
            tmp.labelStyle = Caml_option.valFromOption(prim$10);
          }
          if (prim$11 !== undefined) {
            tmp.theme = Caml_option.valFromOption(prim$11);
          }
          if (prim$12 !== undefined) {
            tmp.onPress = Caml_option.valFromOption(prim$12);
          }
          if (prim$14 !== undefined) {
            tmp.key = Caml_option.valFromOption(prim$14);
          }
          return tmp;
        });
    });
}

exports.makeProps = makeProps;
/* No side effect */
