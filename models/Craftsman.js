import mongoose  from "mongoose";

const craftsmanSchema= new mongoose.Schema({
    id:{type:String, required:true},
    fullName:{type:String, required:true},
    phoneNumber:{type:String, required:true},
    email:{type:String, required:true},
    location:{type:String, required:true},
    password:{type:String, required:true},
    userName:{type:String, required:true},
    pricePerHour : {type : double , required : true},
    isAvailable :{type : Boolean }


})
export default mongoose.model('Craftsman', craftsmanSchema);