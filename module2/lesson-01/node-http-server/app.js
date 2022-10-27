const http = require('http'); // loads the in-built http package
const example = require('./example');
console.log(example.sayHello());
console.log(example.sayGoodbye());

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Welcome to the Homepage');
        response.end();
      } 
      else if(request.url === '/about'){
        response.write('Welcome to the About page');
        response.end();
      }
      else if(request.url === '/contact'){
        response.write('Welcome to the Contact page');
        response.end();
      }
      else {
        response.statusCode = 404;
        response.write('404 Page');
        response.end();
      }
  }); // creates my server

server.listen(3000, ()=> console.log('Server is running on port 3000')); // listen to incoming requests on port 3000