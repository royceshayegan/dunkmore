import React from "react";
import { Box } from "theme-ui";

export default React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    {...props}
    __themeKey="buttons"
    __css={{
      fontFamily: theme =>
        `${theme.buttons.root.fontFamily || theme.fonts.body}`,
      textTransform: theme => `${theme.buttons.root.textTransform || "none"}`,
      fontSize: theme => `${theme.buttons.root.fontSize || "16px"}`,
      fontWeight: theme => `${theme.buttons.root.fontWeight || "700"}`,
      py: 3,
      px: 6,
      borderRadius: theme => `${theme.buttons.root.borderRadius || ".5em"}`,
      border: "solid 3px transparent",
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
  />
));
