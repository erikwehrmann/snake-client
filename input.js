let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    data = "Move: up"
  }
  if (data === 'a') {
    data = "Move: left"
  }
  if (data === 's') {
    data = "Move: down"
  }
  if (data === 'd') {
    data = "Move: right"
  }
}

module.exports = setupInput;