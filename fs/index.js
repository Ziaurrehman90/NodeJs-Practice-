const fs=require('fs')
// asynchronous way to read file 
// kaam hone k baafd notification aayefa tab tak aage ka kaam kr sakta hn n
console.log("read start ")
fs.readFile('read.txt',function(err,data){
    if(err){
        console.log("Eroor")
        return err;
    }
    console.log(data.toString())
    return data;
})
console.log("read end")
// 1 buffer bna dete h jaaha ,ujhe file store krni h 
const buff=new Buffer(1024)

// opening a file 
fs.open('read.txt','r+',function(err,fd){
    if(err){
        console.log("error has occured in opening the file ",err);
    }
    console.log("file has beenm successfully opened ")
    // now hyaha or ab m file kpom read krunga 
    fs.read(/*mereko jo bhi read krna h */ fd,/*mera buffer jaha data store hoga */ buff,/*ab offset*/ 0,buff.length,0,function(er,bytes){
        if(er){
            console.log("ther eis a error in reasding a file ",er);
        }
        console.log("the data of the file is : " , bytes)
        // ab byrtes wale data ko buffer s ssimply string m convert kr denge ]
        console.log("new data in string  format is ",buff.slice(0,bytes).toString())
    })
})

//  let's study the writting of the file 
fs.writeFile('read.txt',"currently i'm in my 6th sem ",function(err){
    if(err){
        console.log("there is an error in writting the file ,",err)
    }
    console.log("new things have been update to the file ");
})
// let's do append teh data to the file 
fs.appendFile("read.txt","wassup guyz we are currenlty learning thr nodeJS","utf-8",function(err){
    if(err){
        console.log("There is an error in appending  the document ot the file ")
    }
    console.log("document is successfully appended to the file ")
})

// deleting a file : 
// use unlimk function for that 
fs.unlink("read.txt",function(err){
    if(err){
        console.log("there is an error in delelting a file ",err)
    }
    console.log("file has been delelted successfully ");
})