'use strict';

var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReactNativePaper = require("react-native-paper");

function getDuration(d) {
  if (typeof d === "number") {
    switch (d) {
      case /* DurationShort */0 :
          return ReactNativePaper.Snackbar.DURATION_SHORT;
      case /* DurationMedium */1 :
          return ReactNativePaper.Snackbar.DURATION_MEDIUM;
      case /* DurationLong */2 :
          return ReactNativePaper.Snackbar.DURATION_LONG;
      
    }
  } else {
    return d[0];
  }
}

function makeProps(duration) {
  var arg = Belt_Option.map(duration, getDuration);
  return (function (param) {
      return (function (param$1, param$2, param$3, param$4, param$5, param$6) {
          var prim = param;
          var prim$1 = arg;
          var prim$2 = param$1;
          var prim$3 = param$2;
          var prim$4 = param$3;
          var prim$5 = param$4;
          var prim$6 = param$5;
          var tmp = {
            onDismiss: prim$2,
            visible: prim$5
          };
          if (prim !== undefined) {
            tmp.theme = Caml_option.valFromOption(prim);
          }
          if (prim$1 !== undefined) {
            tmp.duration = Caml_option.valFromOption(prim$1);
          }
          if (prim$3 !== undefined) {
            tmp.style = Caml_option.valFromOption(prim$3);
          }
          if (prim$4 !== undefined) {
            tmp.action = Caml_option.valFromOption(prim$4);
          }
          if (prim$6 !== undefined) {
            tmp.key = Caml_option.valFromOption(prim$6);
          }
          return tmp;
        });
    });
}

exports.getDuration = getDuration;
exports.makeProps = makeProps;
/* react-native-paper Not a pure module */
