const date_utils = require('date-utils');

var dt = new Date();

var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS')

const http = require('http')

const server = http.createServer((req, res) =>{
  res.write(d);
  res.end();
});

server.listen(8080)
server.on('listening', () => {
    console.log("server is running on 8080 port.");
})
server.on('error', (error) => {
    console.log("error occured", error);
})

