'use strict';

var Curry = require("rescript/lib/js/curry.js");

function renderImage(reRenderIcon, jsIconProps) {
  return Curry._1(reRenderIcon, {
              size: jsIconProps.size
            });
}

exports.renderImage = renderImage;
/* No side effect */
