import React from "react";
import { Box } from "theme-ui";
import parseResponsiveProp from "../lib/parseResponsiveProp";

const layout = ["static", "relative", "absolute", "fixed"];

const visibility = ["none", "block"];

const fill = ["auto", "100%"];

export default function Section({ l, v, f, w, mw, h, sx, children, ...rest }) {
  l = parseResponsiveProp(l, layout);
  v = parseResponsiveProp(v, visibility);
  f = parseResponsiveProp(f, fill);
  return (
    <Box
      as="section"
      __themeKey="sections"
      sx={{ width: f, maxWidth: mw, height: h, display: v, position: l, ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
}
