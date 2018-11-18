module.exports = plugin

function plugin (state, emitter) {
  state.loaded = false
  state.slides = []
  state.index = 0

  emitter.on('DOMContentLoaded', loaded)
  emitter.on('move', move)

  async function loaded () {
    var res = await $get('/slides.txt')
    state.slides = res.split('\n---\n')
    state.loaded = true
    emitter.emit('render')
  }

  function move (direction) {
    var newindex = state.index + direction
    if (newindex >= 0 && newindex < state.slides.length) {
      state.index = newindex
      emitter.emit('render')
    }
  }

  function $get (url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          resolve(request.responseText)
        } else {
          reject(new Error('server returned error'))
        }
      }
      request.onerror = function () {
        reject(new Error('error in the request'))
      }
      request.send()
    })
  }
}
