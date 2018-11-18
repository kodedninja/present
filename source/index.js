var css = require('sheetify')
var choo = require('choo')

css('gr8')
css('./styles/index.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(require('./plugins/clicks'))

app.route('*', require('./views/main'))

module.exports = app.mount('body')
