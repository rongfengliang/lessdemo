var b = require('browserify');
var fs = require("fs")
var bundler = b('./index.js')
bundler.transform('sheetify', { use: [] })
bundler.transform('uglifyify', { global: true  })
.plugin('css-extract', { out: 'bundle.css' })
bundler.bundle()
.pipe(fs.createWriteStream(__dirname + '/app.js'))