module.exports = plugin

function plugin (state, emitter) {
  state.loaded = false

  emitter.on('DOMContentLoaded', loaded)

  function loaded () {
    
  }
}
