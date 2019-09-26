let http = require('http');
let fs = require('fs');

let hostname = '127.0.0.1';
let port = 3000;

function sendResponse(file, res) {
    fs.readFile(file, (error, page) => {
        res.statusCode = 200;
        res.write(page);
        res.end();
    });
}

let server = http.createServer((req, res) => {
    if (req.url == "/") {
        sendResponse(".\\index.html", res);
    } else if (req.url == "/bin/app.js") {
        sendResponse(".\\bin\\app.js", res);
    } else {
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log("Server running at " + hostname + ":" + port);
});