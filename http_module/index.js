// getting http module 
const http=require("http");
// creating http server 
const server=http.createServer((request,response)=>{
     if(request.url=='/'){
        response.write("<h1>Hello NodeJs</h1>")
     }
     response.end();
})
// now we have to start the server at a particularport 
server.listen(5000);
console.log("server is running on port 5000")