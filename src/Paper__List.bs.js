'use strict';

var Paper__Utils = require("./Paper__Utils.bs.js");

var Section = { };

var AccordionGroup = { };

var Subheader = { };

var Item = { };

function makeProps(icon) {
  return {
          icon: Paper__Utils.Icon.extractIconProps(icon)
        };
}

var Icon = {
  makeProps: makeProps
};

var Accordion = { };

exports.Section = Section;
exports.AccordionGroup = AccordionGroup;
exports.Subheader = Subheader;
exports.Item = Item;
exports.Icon = Icon;
exports.Accordion = Accordion;
/* No side effect */
