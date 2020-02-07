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
            // check if the extension of each file is an image and create am image folder
            if(path.extname(`${desktop}/${file}`) === '.png') {
                fs.mkdir(`${desktop}/cleanup/images`, () => {
                console.log(`Created an image folder. 📸`)
                    // add the images to the newly created folder
                    let oldPath = `${desktop}/${file}`
                    let newPath = `${desktop}/cleanup/images`
                    fs.rename(oldPath, newPath, () => {
                        console.log('Files successfully moved.')
                    })
                })
            }
        })
    })
})