# ServerNode
Basic node.js server for people new to node.js.


ServerNode is a basic expressjs-based program for people who want to make a web server, but don't have a lot of knowledge about node.js. Here is the script to make 
your own server with a homepage:
```js
createWebPageFor('/', '/index.html');
```
This will create a homepage for the website that references the HTML index.html file you upload to put into the front page. To create a page that changes URL every
 millisecond, use this script, and upload a file called "expire.html":
 ```js
 var d = new Date();
 createWebPageFor('/' + d.getTime(), '/expire.html');
 ```
To run your new server in NPM, use:
```bash
npm run index.js
```
