var html = require('choo/html')
var format = require('../components/format')

module.exports = view

function view (state, emit) {
  // loaded
  if (!state.loaded) return loading()
  // incorrect url
  var slide = state.slides[state.index]
  if (!slide) return noslide()

  return html`
    <body class="1 db" onkeyup="${keyup}">
      ${render()}
    </body>
  `

  function render () {
    return html`
      <div class="4/5 m-1 mxa  h100 x xac xjc">
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

  function keyup (e) {
    if (e.keyCode === 37) emit('move', -1) // left
    else if (e.keyCode === 39) emit('move', 1) // right
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

  function noslide () {
    return html`
      <body class="1 db">
        <div class="1 h100 x xac xjc f1 tcgrey">
          <div class="xx tac">no slide</div>
        </div>
      </body>
    `
  }
}
