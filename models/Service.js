import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        id: {type:String, required:true, unique: true},
        serviceType:{type:String, required:true},
        duration:{type:String, required:true},
        cost:{type:String},
        status:{type:String, required:true}

    })

    export default mongoose.model('Service', serviceSchema);