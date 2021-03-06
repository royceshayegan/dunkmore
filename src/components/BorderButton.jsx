import React from "react";
import { Box } from "theme-ui";

// props: underline, gradient

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
      // if gradient, unset bg else transparent
      background: theme => `${props.gradient ? "inherit" : "transparent"}`,
      // if gradient, set transparent border else primary
      border: theme =>
        `${
          props.gradient
            ? "solid 3px transparent"
            : `solid 3px ${theme.colors.primary}`
        }`,
      "& > span:after": {
        borderColor: theme => `${theme.buttons[props.variant]?.underline}`
      },
      // if gradient, set bg image else unset
      backgroundImage: theme =>
        `${
          props.gradient
            ? `linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    ${
      theme.buttons[props.variant] && theme.buttons[props.variant]?.gradient
        ? theme.buttons[props.variant]?.gradient
        : `linear-gradient(101deg, ${theme.colors.primary}, ${theme.colors.secondary})`
    }`
            : "none"
        }`,
      backgroundOrigin: "border-box",
      // if gradient, set clip else unset
      backgroundClip: theme =>
        `${props.gradient ? "content-box, border-box" : "inherit"}`,
      // if gradient, set boxshadow else unset
      boxShadow: theme =>
        `${props.gradient ? "2px 1000px 1px #fff inset" : "inherit"}`,
      appearance: "none",
      outline: "0",
      cursor: "pointer",
      transform: "scale(1)",
      transition: theme =>
        `${
          theme.buttons.root?.transition ||
          "box-shadow 250ms ease, background-color 250ms ease, transform 100ms ease"
        }`,
      minWidth: theme => `${theme.buttons.root.minWidth || "224px"}`,
      minHeight: theme => `${theme.buttons.root?.minHeight || "54px"}`,
      "&:disabled": {
        color: "rgb(170, 170, 170)",
        backgroundColor: "rgb(221, 221, 221)",
        pointerEvents: "none"
      },
      "&:active": {
        color: theme =>
          `${theme.buttons[props.variant]?.activeColor || "#fff"}`,
        // if gradient, unset else primary
        backgroundColor: theme =>
          `${
            props.gradient
              ? "inherit"
              : theme.buttons[props.variant]?.activeBgColor ||
                theme.colors.primary
          }`,
        transform: "scale(.95)",
        boxShadow: "none"
      }
    }}
  />
));
