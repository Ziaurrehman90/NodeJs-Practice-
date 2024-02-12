// let;s take the os path 
const os = require("os");
// finding the architecture of the OS 
console.log("architecture: ", os.arch());
// finding thre free memory in bytes
console.log("free memorry : ", os.freemem());
// finding the totalmem of the OS 
console.log("total memory : ", os.totalmem());
// finding the network interfaceds 
console.log("network interfaces: ", os.networkInterfaces())
console.log("network interfaces: ",JSON.stringify(os.networkInterfaces()))
// finding the temporary directory of OS 
console.log("temporary directory : ",os.tmpdir());

// endianess
console.log("endianess: ",os.endianness())
// findint the hostname 
console.log("hostname: ",os.hostname())
// finding the type of OS 
console.log("OS type : ",os.type())
// findint the OS platfomr 
console.log("OS platform : ",os.platform());
