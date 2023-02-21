const path = require('path')

console.log(path.sep)

const filePath = path.join('/dummycontent/','dummysubfolder','dummytext.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'dummycontent','dummysubfolder', 'dummytext.txt')
console.log(absolute)
