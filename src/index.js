const http = require('http');

const PORT = process.env.PORT || 3000;

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', message: 'Hello from Node.js CI Pipeline!' }));
    });
}

if (require.main === module) {
    const server = createServer();
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

module.exports = { createServer };
