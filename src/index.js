module.exports = function(options, files) {
    if(options && files) {
        console.log('you may proceed with ')
        console.log(options)
        console.log('===================================')
        console.log(files)
    }
    else {
        console.log('error: to build a theme you need to pass {options} and [filepaths]')
        process.exit()
    }
}