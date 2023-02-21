const { readFile, writeFile } = require('fs')

readFile('./dummycontent/first.txt', 'utf8', (err, result) => 
{
    if(err)
    {
        console.log(err)
        return;
    }
    const first = result
    console.log(first)

    readFile('./dummycontent/second.txt', 'utf8', (err, result) => 
    {
        if(err)
        {
        console.log(err)
        return;
        }
        const second = result 
        console.log(second)
        writeFile('./dummycontent/result-async.txt', `Here is the data ${first}, ${second}`, (err, result) => {
        if(err)
        console.log(err)
        console.log(result)
        })
    })
}
)
