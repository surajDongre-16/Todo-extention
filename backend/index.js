const express=require("express")
const mongoose=require("mongoose")
const todorouter = require("./routes/todo-routes")
const router = require("./routes/user-routes")
const cors =require("cors")
const connection=require("./config/db")
require("dotenv").config();
const PORT=process.env.PORT

const app=express()
app.use(cors())
app.use(express.json())


app.use("/user",router)
app.use("/todo",todorouter)

app.get("/",(req,res)=>{
    res.send("Welcome")
})



app.listen(PORT, async() => {
    try{
        await connection;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log(`Server listening on localhost:${PORT}`)
})