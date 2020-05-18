import React from "react";
import { Flex as Flexless } from "theme-ui";
import parseResponsiveProp from "../lib/parse-responsive-prop";

const flexbasis = [
  "auto",
  "8.33333333%",
  "16.66666667%",
  "25%",
  "33.33333333%",
  "41.66666667%",
  "50%",
  "58.33333333%",
  "66.66666667%",
  "75%",
  "83.33333333%",
  "91.66666667%",
  "100%"
];

const direction = ["row", "column"];

const wrap = ["wrap", "nowrap"];

const justify = ["flex-start", "center", "flex-end", "space-between"];

const align = ["flex-start", "center", "flex-end"];

const layout = ["static", "relative", "absolute", "fixed"];

const visibility = ["none", "flex"];

const bgrepeat = ["no-repeat", "repeat"];

const fill = ["auto", "100%"];

export default function Flex({
  c,
  d,
  j,
  a,
  f,
  w,
  h,
  mw,
  mh,
  l,
  v,
  bg,
  bgc,
  bgi,
  bgr,
  bgp,
  bgs,
  z,
  sx,
  children,
  ...rest
}) {
  c = parseResponsiveProp(c, flexbasis);
  d = parseResponsiveProp(d, direction);
  j = parseResponsiveProp(j, justify);
  a = parseResponsiveProp(a, align);
  l = parseResponsiveProp(l, layout);
  v = parseResponsiveProp(v, visibility);
  f = parseResponsiveProp(f, fill);
  bgr = parseResponsiveProp(bgr, bgrepeat);
  return (
    <Flexless
      sx={{
        flexDirection: d,
        flexWrap: d,
        justifyContent: j,
        alignItems: a,
        flexBasis: c,
        maxWidth: c || mw,
        width: f,
        height: h,
        maxHeight: mh,
        display: v,
        position: l,
        background: bg,
        backgroundImage: bgi,
        backgroundColor: bgc,
        backgroundRepeat: bgr,
        backgroundPosition: bgp,
        backgroundSize: bgs,
        zIndex: z,
        ...sx
      }}
      {...rest}
    >
      {children}
    </Flexless>
  );
}
