//⭐☞ Require http And Fs module
const http = require('http');
const fs = require('fs');

//⭐☞ Make Server using Node Js
const server = http.createServer((req, res) => {
    const url = req.url;

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is Home Page');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is About Page');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is Contact Page');
    } else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write(err.message);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File written successfully');
            }
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Page Not Found');
    }

    //⭐☞ end the server response
    res.end();

});

//⭐☞ Server listen on port
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

