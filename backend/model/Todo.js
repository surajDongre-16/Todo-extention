const mongoose=require("mongoose")
const Schema=mongoose.Schema

const TodoSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
       
    },
    date:{
        type:String,
        required:true,
       
    },
    category:{
        type:String,
        required:true,
       
    },
    status:{
        type:Boolean,
        default:false
       
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }
})

module.exports= mongoose.model("Todo",TodoSchema)