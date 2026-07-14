import mongoose from "mongoose";





const userSchema =new mongoose.Schema({
    password:{
        type:String,
        reqire:true
    },
    name:{
        type:String,
        reqire:true
    },
    email:{
        type:String,
        reqire:true,
        trim:true
    },
    role:{
        type:String,
        enum:['admin','student','teacher']
    },


})
const User= mongoose.model('User',userSchema)
export default User