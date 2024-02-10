const client = require("../index");

client.on('debug', (message) => {
  console.log(message)
});