import React from "react";
import { useState, useEffect } from "react";
import Grid from "prims/Grid";
import styled from "styled-components";

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
  z-index: 999;
  background-color: transparent;

  &[data-active="true"] {
    box-shadow: 0 2px 8px rgba(152, 168, 188, 0.2);
    background-color: #fff;
  }
`;

export default function FixedHeader() {
  // determined if page has scrolled and if the view is on mobile
  const [state, setState] = useState({
    scrolled: false,
    visible: false
  });
  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== state.scrolled) {
        setState({
          ...state,
          scrolled: !state.scrolled
        });
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [state.scrolled]);

  return (
    <Grid data-active={state.scrolled} j={1} a={1} w={"100%"}>
      <Grid c={"200px 400px 100px 200px"} a={1} h={"100px"}>
        <Grid a={1} h={"30px"}>
          test 1
        </Grid>
        <Grid a={1}>test 2</Grid>
        <Grid a={1} h={"100px"}>
          test 3
        </Grid>
        <Grid a={1} h={"64px"}>
          test 4
        </Grid>
      </Grid>
    </Grid>
  );
}
