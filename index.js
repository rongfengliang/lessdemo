const css = require('sheetify')
const html = require('bel')
 
const prefix = css`
   h1 {
    text-align: center;
    color:red;
  }
`
 
const tree = html`
  <section class=${prefix}>
    <h1>My beautiful, centered title</h1>
  </section>
`
 window.idinfo  = document.querySelector("#info");
 idinfo.appendChild(tree);
