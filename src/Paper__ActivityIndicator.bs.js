'use strict';

var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function makeProps(size) {
  var arg = Belt_Option.map(size, (function (size) {
          if (typeof size === "number") {
            if (size >= -9768761) {
              return "small";
            } else {
              return "large";
            }
          } else {
            return size[1];
          }
        }));
  return (function (param, param$1, param$2) {
      return (function (param$3, param$4, param$5, param$6) {
          var prim = param;
          var prim$1 = param$1;
          var prim$2 = param$2;
          var prim$3 = arg;
          var prim$4 = param$3;
          var prim$5 = param$4;
          var prim$6 = param$5;
          var tmp = { };
          if (prim !== undefined) {
            tmp.animation = Caml_option.valFromOption(prim);
          }
          if (prim$1 !== undefined) {
            tmp.hidesWhenStopped = Caml_option.valFromOption(prim$1);
          }
          if (prim$2 !== undefined) {
            tmp.color = Caml_option.valFromOption(prim$2);
          }
          if (prim$3 !== undefined) {
            tmp.size = Caml_option.valFromOption(prim$3);
          }
          if (prim$4 !== undefined) {
            tmp.style = Caml_option.valFromOption(prim$4);
          }
          if (prim$5 !== undefined) {
            tmp.theme = Caml_option.valFromOption(prim$5);
          }
          if (prim$6 !== undefined) {
            tmp.key = Caml_option.valFromOption(prim$6);
          }
          return tmp;
        });
    });
}

exports.makeProps = makeProps;
/* No side effect */
