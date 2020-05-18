import React from "react";
import Flex from "./Flex";

export default function Sheath(props) {
  return (
    <Flex
      variant="container"
      {...props}
      __themeKey="layout"
      sx={{
        width: "100%",
        maxWidth: props.variant || "container",
        mx: "auto"
      }}
    />
  );
}
