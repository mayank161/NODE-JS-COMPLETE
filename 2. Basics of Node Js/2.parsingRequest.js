// her we parsing our request

const http = require('http'); 
const fs = require('fs'); 

const server = http.createServer((request,response) => {
    
    const url = request.url;
    const method = request.method;

    if(url === '/') {
        response.write('<html>');
        response.write('<head><title> response in node </title></head>')
        response.write(`<body> 
        <form action="/message" method="POST">   
        <input type="text" name="message">       
        <button type="submit">Send</button>
        </form>
        </body>`)
        response.write('</html>')
        return response.end();
    }
    
    if(url === '/message' && method === 'POST') {
        const body = [];
        request.on('data', (chunk) => { // pass all the data in chunk parameter
            console.log('this is chunk of data', chunk);
            body.push(chunk);
        });
        
        request.on('end', () => {
            const parseBody = Buffer.concat(body).toString(); // buffer used to handel raw binary data into text formate
            console.log(parseBody)
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message); 

            response.statusCode = 302; 
            response.setHeader('Location','/')
    
            return response.end();
        });
    }
   
    response.setHeader('Content-Type','text/html');
    response.write('<html>'); 
    response.write('<head><title> response in node </title></head>')
    response.write('<body> this line written by response.write inside the node</body>')
    response.write('</html>')
    response.end(); 
});

server.listen(4000);