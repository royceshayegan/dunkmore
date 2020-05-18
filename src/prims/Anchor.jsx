import React from "react";
import { Link } from "theme-ui";

const tab = ["_blank", "noopener noreferrer"];

export default function Anchor({ to, t, children, ...rest }) {
  t = tab;
  return (
    <Link href={to} target={t ? t[0] : ""} rel={t ? t[1] : ""} {...rest}>
      {children}
    </Link>
  );
}
