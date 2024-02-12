const path=require("path");
// console.log(path.sep); 
// //  \
// console.log(process.env.path);
// console.log(path.delimiter)
const currrentFilepath=__filename;
console.log(currrentFilepath);
// yeh base name jaane k liyr ho gya 
console.log(path.basename(currrentFilepath));
// ab agr mujhe bina extension k naam zaana h tou 
console.log(path.basename(currrentFilepath,'.js'));/*extensiojon chor k */
// ab agr extension name zanna h tou 
console.log(path.extname(currrentFilepath))
// we can combijne base an ddirectory ysing format function 
let newPath=path.format({
    dir:'\pulbic_html\home',
    base:'index.html'
})
console.log(newPath)
console.log(path.sep)
// join method 
// it joins all the directories or sub path in a path 
console.log(path.join('\home','index','dist','zia.js'));

// parse function : saare components btayega 
console.log(path.parse(currrentFilepath))