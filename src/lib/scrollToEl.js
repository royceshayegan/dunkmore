// simple function to take arguments and scroll to element using jquery

let $;
if (typeof window !== `undefined`) {
  $ = require("jquery");
}

export default function scrollToEl(a, b = 80, c = 500, d = "linear") {
  const element = document.getElementById(a);

  if (element) {
    console.log(element);
    $("html, body").animate(
      {
        scrollTop: $(element).offset().top - b
      },
      c, // transition speed in milliseconds
      d // transition type (linear, ease, etc)
    );
  }
}
