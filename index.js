// constants
const fs = require('fs')
const path = require('path')

// desktop
const desktop = path.join(require('os').homedir(), 'Desktop')

// create a new directory
const cleanupFile = fs.mkdirSync(`${desktop}/cleanup`)