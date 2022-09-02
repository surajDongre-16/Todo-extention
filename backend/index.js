const express=require("express")
const mongoose=require("mongoose")
const todorouter = require("./routes/todo-routes")
const router = require("./routes/user-routes")
const cors =require("cors")

const app=express()
app.use(cors())
app.use(express.json())


app.use("/user",router)
app.use("/todo",todorouter)

app.get("/",(req,res)=>{
    res.send("Welcome")
})

mongoose.connect(
    "mongodb+srv://shristi:shristi123@cluster0.imvho.mongodb.net/todoextension?retryWrites=true&w=majority"
).then(()=>app.listen(5000)).then(()=>
console.log("connected port 5000")
).catch((err)=>console.log(err))