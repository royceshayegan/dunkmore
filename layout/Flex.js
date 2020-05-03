/** @jsx jsx */
import { jsx, Flex as Flexless } from "theme-ui"
import PropTypes from "prop-types"
import theme from "gatsby-plugin-theme-ui"
import parseResponsiveProp from "lib/parse-responsive-prop"

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
  "100%",
]

const direction = ["row", "column"]

const justify = ["flex-start", "center", "flex-end", "space-between"]

const align = ["flex-start", "center", "flex-end"]

function Flex({
  flexDirection,
  justifyContent,
  alignItems,
  flexBasis,
  maxWidth,
  d,
  j,
  a,
  w,
  sx,
  children,
  ...rest
}) {
  w = parseResponsiveProp(w, flexbasis)
  d = parseResponsiveProp(d, direction)
  j = parseResponsiveProp(j, justify)
  a = parseResponsiveProp(a, align)
  return (
    <Flexless
      sx={{
        flexDirection: d,
        justifyContent: j,
        alignItems: a,
        flexBasis: w,
        maxWidth: w,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Flexless>
  )
}

Flex.defaultProps = {}

Flex.propTypes = {}

export default Flex
