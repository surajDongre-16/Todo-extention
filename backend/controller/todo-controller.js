const Todo =require("../model/Todo")
const User=require("../model/User")
const mongoose=require("mongoose")


const addTodo=async(req,res,next)=>{
    const{title,description,date,category,status,user}=req.body;
    let existinguser
    try{
        existinguser=await User.findById(user)
    }catch(err){
        console.log(err)
    }
    if(!existinguser){
        return res.status(400).json({message:"unable to find user by this id"})
    }
    const todo =new Todo({
        title,description,date,category,status,user
    })
    try{
       const session=await mongoose.startSession()
       session.startTransaction()
       await todo.save({session})
       existinguser.todos.push(todo)
       await existinguser.save({session})
       await session.commitTransaction()

    }catch(err){
        
       return res.status(500).json({message:err})
      
    }
    return res.status(200).json({todo})
}


const updateTodo=async(req,res,next)=>{
    const {title,description,status}=req.body;
    const todoId=req.params.id;

    let todo
    try{
        todo=await Todo.findByIdAndUpdate(todoId,{
            title,
            description,
            status
        })
    }catch(err){
        return console.log(err)
    }
    if(!todo){
        return res.status(500).json({message:"unable to update todo"})
    }
    return res.status(200).json({todo})
}



 const deleteTodo=async(req,res,next)=>{
    const id=req.params.id
    console.log(id)

    let todo
    try{
        todo=await Todo.findByIdAndRemove(id).populate("user")
        await todo.user.todos.pull(todo)
        await todo.user.save()
    }catch(err){
        console.log(err)
    }
    if(!todo){
        return res.status(500).json({message:"Unable to Delete the todo"})
    }
    return res.status(200).json({message:"successfully deleted"})
 }


 const getbyuserId=async(req,res,next)=>{
    const userId=req.params.id;
    let userTodos;
    try{
        userTodos=await User.findById(userId).populate("todos")
    }
    catch(err){
        return console.log(err)
    }
    if(!userTodos){
        return res.status(404).json({message:"No Todo Found"})
    }
    return res.status(200).json({todos:userTodos.todos})
 }


module.exports= {addTodo,updateTodo,deleteTodo,getbyuserId}