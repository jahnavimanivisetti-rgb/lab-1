const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    if (request.url === "/" || request.url === "") {
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.end("Hello");
    } else {
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.end("404 - Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Basic HTTP server is running at http://localhost:${PORT}`);
});
