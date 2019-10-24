external toString: 'a => string = "%identity";

module Icon = {
  type jsIconProps = {
    .
    "color": string,
    "size": float,
    "direction": string,
  };

  type iconProps = {
    color: string,
    size: float,
    direction: string,
  };

  type renderIcon = jsIconProps => React.element;

  let renderIcon = (reRenderIcon: iconProps => React.element): renderIcon =>
    (jsIconProps: jsIconProps) =>
      reRenderIcon({
        color: jsIconProps##color,
        size: jsIconProps##size,
        direction: jsIconProps##direction,
      });

  type iconType =
    | Name(string)
    | Element(renderIcon);

  external toIconIdentity: 'a => 'b = "%identity";

  let extractIconProps = icon =>
    switch (icon) {
    | Name(name) => name->toIconIdentity
    | Element(el) => el->toIconIdentity
    };

  let mapToIcon = icon => icon->Belt.Option.map(extractIconProps);
};
