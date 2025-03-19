let http = require('http')
let fs = require('fs')

let demo = fs.readFileSync('demo.html','utf-8')
let data = fs.readFileSync('data.json','utf-8')

let data2 = JSON.parse(data)
let products =data2.products

let myserver = http.createServer((req,res)=>{

    console.log('server is redy ')
    // res.end(demo1)



    if(req.url.startsWith('/products'))
    {

        let urlid= req.url.split('/')[2]
        // res.end(urlid)
        let product = products.find(p=>p.id ===(+urlid))
        let demo1 =demo.replace("**title**",product.title).replace("**price**",product.price).replace("**rating**",product.rating).replace("**description**",product.description).replace("**category**",product.category).replace("**brand**",product.brand)
        res.end(demo1)
        return;

    }
    





    switch(req.url){

        case'/':
        res.end('Home page')
        break;
    
        default:
            res.end('404 not found')
            break;
    }

   

})

myserver.listen(2999,()=>{

    console.log('srever is star ')
})