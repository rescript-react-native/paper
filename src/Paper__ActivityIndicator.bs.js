'use strict';


function Size_value(prim) {
  return prim;
}

var Size = {
  small: "small",
  large: "large",
  value: Size_value
};

exports.Size = Size;
/* No side effect */
