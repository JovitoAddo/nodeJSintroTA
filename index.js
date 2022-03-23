const http = require('http');

http
    .createServer(function(req,res){
        res.writeHead(200, {'Content-type':'text/html'})
        if(req.url === '/about'){
        res.write('welcome to about us page')
        res.end()
        }else if(req.url === '/contact'){
            res.write('welcome to contact us page')
            res.end()
        }else{
            res.write('HELLO WORLD')
            res.end
        }
    })
    .listen(8000);