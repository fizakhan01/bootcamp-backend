import http from 'http'
const port =3000
const server = http.createServer((req, res)=>{
    if (req.url =='/'){
        res.end('<h1>welcome to backend server </h1>')
    }

})


server.listen(port,()=>{
    console.log('server is listen in a port',port)
})