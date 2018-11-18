var html = require('choo/html')
var format = require('../components/format')

module.exports = view

function view (state, emit) {
  // loaded
  if (!state.loaded) return loading()

  var slide = state.slides[state.index]

  return html`
    <body class="1 db" onkeyup="${keyup}">
      ${render()}
    </body>
  `

  function render () {
    return html`
      <div class="1 h100 x xac xjc">
        ${slide.map(column)}
      </div>
    `
    function column (c) {
      return html`
        <div class="xx tac">
          ${format(c)}
        </div>
      `
    }
  }

  function loading () {
    return html`
      <body class="1 db">
        <div class="1 h100 x xac xjc f1">
          <div class="xx tac">loading</div>
        </div>
      </body>
    `
  }

  function keyup (e) {
    if (e.keyCode === 37) emit('move', -1) // left
    else if (e.keyCode === 39) emit('move', 1) // right
  }
}
