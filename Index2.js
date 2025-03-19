let http = require('http')
let fs = require('fs')

let demo3 =fs.readFileSync('demo.html','utf-8')

let myserver = http.createServer((req,res)=>{
    // res.end('this is server page')
    res.end(demo3)
})

myserver.listen(2222,()=>{

    console.log('srever is start')
})