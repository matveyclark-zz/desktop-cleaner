// constants
const fs = require('fs')
const path = require('path')

// desktop
const desktop = path.join(require('os').homedir(), 'Desktop')

// create a new directory
fs.mkdir(`${desktop}/cleanup`, () => {
    console.log('Cleanup file created. 🧼')
    // get all files located in the desktop
    fs.readdir(desktop, (error, files) => {
        // create an array with each file in the desktop
        const fileArray = []
        files.forEach(file => {
            fileArray.push(file)
        })
        fileArray.forEach(file => {
            console.log(file)
            let item = file.split('.')
            if(item[item.length - 1] === 'png' || 'jpg') {
                fs.mkdir(`${desktop}/cleanup/images`, () => {
                    // console.log('Image file created 📸')
                })
            }
        })
    })
})