const docs = require('@toolio/docs')

docs.build('html', {
    entry: '.toolio/docs',
    output: '.toolio/docs/build',
    tmp: '.toolio/docs/tmp',
    theme: '.toolio/build.js'
})