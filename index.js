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
        files.forEach(file => {
            // check if the extension of each file is an image
            path.extname(`${desktop}/${file}`) === '.png'
            // create an image folder 
            && fs.mkdir(`${desktop}/cleanup/images`, () => {
                console.log(`Created an image folder. 📸`)
            })
        })
    })
})