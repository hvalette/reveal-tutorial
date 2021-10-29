import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/highlight/monokai.css";

let deck = new Reveal({
  plugins: [RevealHighlight],
  pdfSeparateFragments: false,
});
deck.initialize();
