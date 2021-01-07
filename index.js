//ServerNode v. 1.0.1 BETA
const express = require('express')
const app = express()
const port = 3000

//Examples are below, please delete unless you create the files "index.html" and "error.html"
createWebPageFor('/', '/index.html');
sendErrorFile('/error.html');
sendHTMLcontentfor('/html', '<title>HTML</title>')

//The "sendErrorFile(file)" function asks for what file to show when an error occurs, and the "createWebPageFor(path, fileSent)" function sends out files at request when you put the path and the file in the function.

function createWebPageFor(path, fileSent){
  app.get(path, (request, response) => {
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

function sendHTMLcontentfor(path, html){
  app.get(path, (request, response) => {
    response.send(html);
  });
}
