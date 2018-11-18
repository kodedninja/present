module.exports = plugin

function plugin (state, emitter) {
  state.loaded = false
  state.slides = []

  emitter.on('DOMContentLoaded', loaded)

  async function loaded () {
    var res = await $get('/slides.txt')
    state.slides = res.split('\n---\n')
    emitter.emit('render')
  }

  function $get (url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          resolve(request.responseText)
        } else {
          reject()
        }
      }
      request.onerror = function() {
        reject()
      }
      request.send()
    })
  }
}
