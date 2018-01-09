var bel = require('bel')
module.exports = function (items) {
  return bel`<ul>
    ${items.map(function (item) {
      return bel`<li>${item}</li>`
    })}
  </ul>`
}