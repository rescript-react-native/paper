'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function renderImage(reRenderIcon, jsIconProps) {
  return Curry._1(reRenderIcon, /* record */[/* size */jsIconProps.size]);
}

exports.renderImage = renderImage;
/* No side effect */
