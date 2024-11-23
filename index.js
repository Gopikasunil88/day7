//1.importing
const express = require("express")

//2.initialize
const  app= new express()
app.use(express.json());

const dbArray =[
    {id:11, name: "Nayana", age: 18,dept:"maths"},
    {id:12, name: "Gopika", age: 19,dept:"cs"},
    {id:13, name: "Navya", age: 20,dept:"maths"},
    {id:14, name: "Gayu", age: 21,dept:"cs"},
];


app.get('/view',(req,res)=>{
    res.send(dbArray)
})

app.post('/add',(req,res)=>{
    console.log (req.body)
    dbArray.push(req.body)
    res.send("data added");
 })
 


//4.port
app.listen(7070,()=>{
    console.log("port is running")
})