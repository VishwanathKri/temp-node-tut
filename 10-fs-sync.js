const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./dummycontent/first.txt', 'utf8')
const second = readFileSync('./dummycontent/second.txt', 'utf8')

console.log(first , second)

writeFileSync('./dummycontent/result-sync.txt', `Here is the thing: ${first} , ${second}`, {flag: 'a'})
