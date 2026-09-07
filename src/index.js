const http = require('http');

const PORT = process.env.PORT || 5000;

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 'success', 
            message: 'Hello from Node.js CI/CD Pipeline! This is a simple Node.js application running in a CI/CD pipeline.',
            timestamp: new Date().toISOString()
        }));
    });
}

if (require.main === module) {
    const server = createServer();
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

module.exports = { createServer };
