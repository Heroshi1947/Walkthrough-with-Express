const http = require('http');
const  hostname  = 'localhost';
const PORT = 3001 ; 

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain') 
        res.end('Welcome to Men & Women Dummy Data');

    }else if(req.url == '/men'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json') 
        res.end(JSON.stringify({ "id" : "1 " , "name" : "men t-shirt" ,
        "brand": "abc", "price" : 1999 , "color" : "rainbow" 
        }));

    }else if(req.url == '/women'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json') 
        res.end(JSON.stringify({"id" : "1 " , "name" : "women t-shirt" ,
        "brand": "xyz", "price" : 2999 , "color" : "red"}));

    }else if(req.url == '/other'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html') 
        res.end('<html>Content not found.</html>');
    }

    else{
        res.statusCode = 500;
        res.setHeader('content-type','text/plain');
        res.end('Server Error!');
    }
})



server.listen(PORT, () =>{
    console.log(`Server running at ${hostname}: ${PORT}`);
})
