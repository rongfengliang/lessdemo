const css = require('sheetify')
const html = require('bel')
const prefix = css('./myinfo.css')
const tree = html`
  <section class=${prefix}>
    <h1>My beautiful, centered title</h1>
  </section>
`
 window.idinfo  = document.querySelector("#info");
 idinfo.appendChild(tree);
