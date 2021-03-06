import React from "react";

import { Button } from "../prims/Button";

export default React.forwardRef((props, ref) => (
  <Button
    ref={ref}
    {...props}
    className={props.underline ? "animated-underline" : ""}
    __themeKey="buttons"
    __css={{
      fontFamily: theme =>
        `${theme.buttons.root.fontFamily || theme.fonts.body}`,
      textTransform: theme => `${theme.buttons.root.textTransform || "none"}`,
      fontSize: theme => `${theme.buttons.root.fontSize || "16px"}`,
      fontWeight: theme => `${theme.buttons.root.fontWeight || "700"}`,
      pt: `${props.underline ? 3 : 4}`,
      pb: `${props.underline ? 2 : 4}`,
      px: 7,
      borderRadius: theme => `${theme.buttons.root.borderRadius || ".5em"}`,
      border: "solid 3px transparent",
      "& > span:nth-child(1):after": {
        borderColor: theme => `${theme.buttons.borderGradient.underline}`
      },
      backgroundImage: theme => `linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    ${
      theme.buttons.borderGradient && theme.buttons.borderGradient.gradient
        ? theme.buttons.borderGradient.gradient
        : `linear-gradient(101deg, ${theme.colors.primary}, ${theme.colors.secondary})`
    }`,
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box",
      boxShadow: "2px 1000px 1px #fff inset",
      appearance: "none",
      outline: "0",
      cursor: "pointer",
      minWidth: theme => `${theme.buttons.root.minWidth || "224px"}`
    }}
  >
    {props.children}
  </Button>
));
