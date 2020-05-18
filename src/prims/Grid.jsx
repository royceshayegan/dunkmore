import React from "react";
import { Grid as Gridless } from "theme-ui";
import parseResponsiveProp from "../lib/parse-responsive-prop";

const justify = ["start", "center", "end", "stretch"];

const align = ["start", "center", "end", "stretch"];

const layout = ["static", "absolute", "fixed"];

const visibility = ["none", "grid"];

const fill = ["auto", "100%"];

export default function Grid({
  mw,
  w,
  h,
  c,
  j,
  f,
  a,
  v,
  l,
  sx,
  children,
  ...rest
}) {
  j = parseResponsiveProp(j, justify);
  a = parseResponsiveProp(a, align);
  l = parseResponsiveProp(l, layout);
  v = parseResponsiveProp(v, visibility);
  f = parseResponsiveProp(f, fill);
  return (
    <Gridless
      width={w}
      columns={c}
      sx={{
        width: f,
        maxWidth: mw,
        gridAutoRows: h,
        justifyItems: j,
        alignItems: a,
        display: v,
        position: l,
        ...sx
      }}
      {...rest}
    >
      {children}
    </Gridless>
  );
}
