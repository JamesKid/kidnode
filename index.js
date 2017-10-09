const http = require('http'); // 引用http模块
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { // 创建server
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello,this is KidNode web Framework\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

