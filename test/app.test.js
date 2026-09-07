const assert = require('assert');
const { createServer } = require('../src/index');

console.log('Running test suite...');

const server = createServer();
assert(server !== null && typeof server.listen === 'function', 'Server must be an instance of http.Server');

console.log('✓ All Node.js test cases passed successfully!');
process.exit(0);
