const express=require("express");
const app=express();

const port=3001;


const client=require('prom-client');
const collectDefaultMetrics=client.collectDefaultMetrics;

collectDefaultMetrics({timeout: 5000});

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/metrics',(req,res)=>{
    res.set('Content-Type',client.register.contentType);
    res.end(client.register.metrics()); 
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})