// her we create a local server

const http = require('http'); // get the url request
const fs = require('fs'); // fs enable us to work with the file system

const server = http.createServer((request,response) => { // crete server from teh url req. and its response
    
    const url = request.url;
    const method = request.method;

    if(url === '/') {
        response.write('<html>');
        response.write('<head><title> response in node </title></head>')
        response.write(`<body> 
        <form action="/message" method="POST">   /* the action in the form will move the page to that/message*/
        <input type="text" name="message">       /* name message will be shown on the network  menu doc */
        <button type="submit">Send</button>
        </form>
        </body>`)
        response.write('</html>')
        return response.end(); // we have to return the after response end so it will not go down further because we do not write after response end
    }
    
    if(url === '/message' && method === 'POST') { // it will run only the above condition run

        fs.writeFileSync('message.txt','Dummy'); // it will create the file with of .txt

        response.statusCode = 302; // it sends for redirection 302 will redirect
        response.setHeader('Location','/') // it will locate the heder back to (/) home page

        return response.end();
    }


    console.log(request); // it keeps on running in the event loop
    // process.exit() // it is used to quit the server 
    response.setHeader('Content-Type','text/html');
    response.write('<html>');  // it will write the in the response in form of html
    response.write('<head><title> response in node </title></head>')
    response.write('<body> this line written by response.write inside the node</body>')
    response.write('</html>')
    response.end(); 
})

server.listen(3000); // it will listen the server continuously with the port of 3000
// and the host name as local host by default if we do not pass so

// so when we write localhost 3000 in our browser it will console in our node