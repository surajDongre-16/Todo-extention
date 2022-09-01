const express=require("express")

const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Welcome")
})


app.listen(8080,()=>{
    console.log("Port is listening on port 8080")
})