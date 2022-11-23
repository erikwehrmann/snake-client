const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 
    port:
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Thanks for joining us");
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting...");
connect();