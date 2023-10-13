//Globals - NO WINDOW !!!!

//__dirname = current directory
//__filename = file name
//require = function to use modules
//module = info about cureent module
//process = info about env where the program is being executed

// console.log(__dirname);
// setInterval(() =>{
// console.log('Hello World')
// },1000)


// //Modules
// const secret = 'secret'
// const peter = 'peter'
// const john = 'john'

// const sayHi = (name) => {
//    console.log(`Hello there ${name}`)
// }

// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
// require('./7-mind-grenade')
// sayHi('Harsh')
// sayHi(names.john)
// sayHi(names.peter)


// const os = require('os')
// const user = os.userInfo()
// console.log(user)


// const { log } = require('console');
// const os = require('os')

// //info about current user

// const user = os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds

// console.log(`The System Uptime is ${os.uptime()} seconds`)



// const os = require('os')

// const user = os.userInfo()
// console.log(user)

// console.log(`The System uptime is ${os.uptime()} seconds`)


// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }

// console.log(currentOS);

// const path = require('path')
// console.log(path.sep);

// const filePath =path.join('/content/','subfolder','test.txt')
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base)

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);


// const { readFileSync,writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')

// writeFileSync(
//     './content/result-sync.txt',
//      `Here is the result: ${first},${second}`,{flag:'a'}
//      )

// const {readFile , writeFile, read} = require('fs')

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// const first = result;
// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
// const second = result
// writeFile('/content/result-sync.txt',
// `Here is the result : ${first},${second}`
// ,(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// }
// )
// })
// })


// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Welcome to our Home page');
//   } else if (req.url === '/about') {
//     res.end('Here is our short history');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end(`
//       <h1>OOppsss!!</h1>
//       <p>We can't seem to find the page you are looking for</p>
//       <a href='/'>Back Home</a>
//     `);
//   }
// });

// server.listen(5000, () => {
//   console.log('Server is listening on port 5000');
// });


// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('Welcome to our Home page');
//     }
//     else if (req.url ==='/about'){
//         res.end('Here is our short history');
//     }else {
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.end(`
//         <h1>OOPPSSS!!!</h1>
//         <p>we cant seem to find the page you are looking for</p>
//         <a href="/">Back Home</a>
//         `);
//     }
// });

// server.listen(5000,() => {
//     console.log('Server is listening on port 5000');
// })


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);