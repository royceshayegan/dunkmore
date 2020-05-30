import React from "react";
import { Box } from "theme-ui";

// props: underline

export default React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    {...props}
    className={props.underline ? "animated-underline" : ""}
    __themeKey="buttons"
    __css={{
      color: theme => `${theme.buttons.root?.color || "#131313"}`,
      fontFamily: theme =>
        `${theme.buttons.root?.fontFamily || theme.fonts.body}`,
      textTransform: theme => `${theme.buttons.root?.textTransform || "none"}`,
      fontSize: theme => `${theme.buttons.root?.fontSize || "16px"}`,
      fontWeight: theme => `${theme.buttons.root?.fontWeight || "700"}`,
      letterSpacing: theme =>
        `${theme.buttons.root?.letterSpacing || "0.05em"}`,
      pt: `${props.underline ? 3 : 4}`,
      pb: `${props.underline ? 2 : 4}`,
      px: 7,
      borderRadius: theme => `${theme.buttons.root?.borderRadius || ".5em"}`,

      background: theme =>
        `${theme.buttons.root?.background || theme.colors.primary}`,
      border: 0,
      "& > span:after": {
        borderColor: theme => `${theme.buttons[props.variant]?.underline}`
      },

      appearance: "none",
      outline: "0",
      cursor: "pointer",
      transform: "scale(1)",
      transition: theme =>
        `${
          theme.buttons.root?.transition ||
          "box-shadow 250ms ease, background 250ms ease, background-color 250ms ease, transform 100ms ease"
        }`,
      minHeight: theme => `${theme.buttons.root?.minHeight || "54px"}`,
      minWidth: theme => `${theme.buttons.root?.minWidth || "224px"}`,
      "&:active": {
        color: theme =>
          `${theme.buttons[props.variant]?.activeColor || "#fff"}`,
        // if gradient, unset else primary
        background: theme =>
          `${theme.buttons[props.variant]?.activeBgColor || ""}`,
        transform: "scale(.95)",
        boxShadow: "none"
      }
    }}
  />
));
