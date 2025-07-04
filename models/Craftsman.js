import mongoose  from "mongoose";
import AutoIncrement from "mongoose-sequence";

const craftsmanSchema= new mongoose.Schema({
    fullName:{type:String, required:true},
    phoneNumber:{type:String, required:true},
    email:{type:String, required:true},
    location:{type:String, required:true},
    password:{type:String, required:true},
    userName:{type:String, required:true},
    pricePerHour : {type : String , required : true},
    isAvailable :{type : Boolean }


})
const AutoIncrementFactory = AutoIncrement(mongoose);
craftsmanSchema.plugin(AutoIncrementFactory, { inc_field: "craftsman_ID" });


export default mongoose.model('Craftsman', craftsmanSchema);