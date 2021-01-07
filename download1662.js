//ServerNode v. 1.0.0
const express = require('express')
const app = express()
const port = 3000

createWebPageFor('/', '/index.html');
sendErrorFile('/error.html');

//The "sendErrorFile(file)" function asks for what file to show when an error occurs, and the "createWebPageFor(path, fileSent)" function sends out files at request when you put the path and the file in the function.

function createWebPageFor(path, fileSent){
  app.get(path, (request, response) => {
    request.console.log("Sending File for request");
    response.sendFile(__dirname + fileSent);
  });
}

function sendErrorFile(file){
  app.listen(port, (response, err) => {
  if (err) {
    response.sendFile(__dirname + file);
    return console.log('something bad happened', err)
  };
   console.log(`server is listening on ${port}`);
  });
}