const { clear } = require('console');
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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
    process.stdin.setEncoding('utf8');
    let move = input.toString().trim();
    if (move == 'w') {
      move = 'up'
    }
    if (move == 's') {
      move = 'down'
    }
    if (move == 'a') {
      move = "left"
    }
    if (move == 'd') {
      move = "right"
    }
    var movement = setInterval (() => {
      conn.write(`Move: ${move}`);
    }, 50);
    process.stdin.on('data', (input) => {
      clearInterval(movement)
    });
  });


  return conn;
};

module.exports = { connect };
