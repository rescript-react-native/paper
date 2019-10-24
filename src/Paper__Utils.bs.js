'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function renderIcon(reRenderIcon, jsIconProps) {
  return Curry._1(reRenderIcon, /* record */[
              /* color */jsIconProps.color,
              /* size */jsIconProps.size,
              /* direction */jsIconProps.direction
            ]);
}

function extractIconProps(icon) {
  return icon[0];
}

function mapToIcon(icon) {
  return Belt_Option.map(icon, extractIconProps);
}

var Icon = {
  renderIcon: renderIcon,
  extractIconProps: extractIconProps,
  mapToIcon: mapToIcon
};

exports.Icon = Icon;
/* No side effect */
