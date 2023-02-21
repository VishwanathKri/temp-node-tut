const http = require('http')

const server = http.createServer((req, res) => 
{
    if( req.url === '/')
    {
    res.write('Hi There This is the Welcome page')
    res.end()
    }
    if( req.url === '/about')
    {
        res.end('This is the about page')
    }
    res.end(`
    <p>This is the default error page </p>
    <h5>click here for</h5>
    <a href = "/">home<a/>
    `)
})
server.listen(5000)