import React from "react";
import { Button } from "theme-ui";
import styled from "styled-components";

const Base = styled(Button)`
  color: #212121;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  border: solid 3px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #424242, #212121);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  border-radius: 8px;
  padding: 12px 48px;
  text-transform: uppercase;
  letter-spacing: 0.095em;
  font-size: 12px;
  font-weight: 800;
  min-width: 224px;
  min-height: 52px;
  max-height: 52px;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  transition: all 200ms ease;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
export default function BorderButton({ children, ...rest }) {
  return <Base {...rest}>{children}</Base>;
}
