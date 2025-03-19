let http = require('http')
let fs = require('fs')
// let data = fs.readFileSync('data.json','utf-8')
let sample = fs.readFileSync('sample.html','utf-8')

let data2 = JSON.parse(data) //to conver in to json format
let products= data2.products


let myserver = http.createServer((req, res)=>{
    console.log('server is ready')
    //  res.end('this is my own server')

    // res.setHeader('content-type','application/json')

        if(req.url.startsWith('/products'))
        {
            let urlid = req.url.split('/')[2]
            // res.end(urlid)
            let product = products.find(p=>p.id === (+urlid))


            let  sample1 = sample.replace('**title**',product.title).replace('**price**',product.price).replace('**rating**',product.rating)
            res.end(sample1)
            return;

        }
    
   
    


    switch(req.url)
    {
        case'/':
            res.end('homepage')
        break;

        default:
            res.end('404 page not found')
            break;
    }

})

myserver.listen(1999, ()=>{
    console.log('server running')
})