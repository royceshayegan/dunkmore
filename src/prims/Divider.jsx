import React from "react";
import { Box } from "theme-ui";

export default React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __themeKey="dividers"
    __css={{
      marginTop: theme => `${theme.dividers.root?.marginTop || "18px"}`,
      height: theme => `${theme.dividers.root?.height || "3px"}`,
      width: theme => `${theme.dividers.root?.width || "224px"}`,
      border: 0,
      color: "transparent",
      background: theme =>
        `${theme.dividers.root?.background || theme.colors.primary}`
    }}
  />
));
