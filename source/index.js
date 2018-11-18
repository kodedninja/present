var css = require('sheetify')
var choo = require('choo')

css('./styles/index.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(require('./plugins/present'))

app.route('*', require('./views/main'))

module.exports = app.mount('body')
