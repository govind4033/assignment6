const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {

    if (req.url === "/home" || req.url === "/") {
        fs.readFile('home.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }

    else if (req.url === "/about") {
        fs.readFile('about.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }

    else if (req.url === "/contact") {
        fs.readFile('contact.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }

    else {
        fs.readFile('404.html', (err, data) => {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
});

const port = 3000;

app.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});