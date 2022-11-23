const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log("Successfully established connection");
    conn.write("Name: EJW");
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });
  
  process.stdin.on('data', (input) => {
    var movement = setInterval (() => {
      conn.write(`Move: ${input}`);
    }, 150);
    process.stdin.on('data', (input) => {
      clearInterval(movement)
    });
  });

  process.stdin.on('data', (input) => {
    if (input === "q") {
      conn.write("Say: I did it!")
    };
    if (input === "e") {
      conn.write("Say: WOOOOOOO!")
    };
  })


  return conn;
};

module.exports = { connect };
