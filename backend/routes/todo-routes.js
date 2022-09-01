const express=require("express")
const {addTodo,updateTodo,deleteTodo,getbyuserId} =require("../controller/todo-controller")

const todorouter=express.Router()


todorouter.post("/add",addTodo)
todorouter.put("/update/:id",updateTodo)
todorouter.delete("/:id",deleteTodo)
todorouter.get("/user/:id",getbyuserId)
module.exports= todorouter
