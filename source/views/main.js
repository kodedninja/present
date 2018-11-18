var html = require('choo/html')

module.exports = view

function view (state, emit) {
  return html`
    <body class="c12 db">
      <div class="c12 h100 x xac xjc fs3-2">
        <div class="xx tac">i'm a peer</div>
      </div>
      <div class="c12 h100 x xac xjc fs3-2">
        <div class="xx tac">present</div>
        <div class="xx tac">present</div>
      </div>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
