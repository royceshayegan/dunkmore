import React from "react";
import { Box } from "theme-ui";

export default React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    variant="container"
    {...props}
    __themeKey="layout"
    __css={{
      width: "100%",
      maxWidth: props.variant || "container",
      mx: "auto"
    }}
  />
));
