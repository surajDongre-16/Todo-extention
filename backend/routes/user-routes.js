const express=require("express")
const {getAllUser,signup,login }= require("../controller/user-controller")

const router=express.Router()

router.get("/",getAllUser)

router.post("/signup",signup)
router.post("/login",login)



module.exports=router