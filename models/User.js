import mongoose  from "mongoose";

const userSchema= new mongoose.Schema({
    id:{type:String, required:true, unique : true},
    fullName:{type:String, required:true},
    phoneNumber:{type:String, required:true},
    email:{type:String, required:true},
    location:{type:String, required:true},
    password:{type:String, required:true},
    userName:{type:String, required:true},


})
export default mongoose.model('User', userSchema);