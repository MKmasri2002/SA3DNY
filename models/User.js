import mongoose  from "mongoose";
import AutoIncrement from "mongoose-sequence";

const userSchema= new mongoose.Schema({
    fullName:{type:String, required:true},
    phoneNumber:{type:String, required:true},
    email:{type:String, required:true},
    location:{type:String, required:true},
    password:{type:String, required:true, select: false},
    userName:{type:String, required:true , unique : true},
})

const AutoIncrementFactory = AutoIncrement(mongoose);
userSchema.plugin(AutoIncrementFactory, { inc_field: "user_ID" });

export default mongoose.model('User', userSchema);