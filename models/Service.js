import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const serviceSchema = new mongoose.Schema(
    {

        user_id: {type:String, required:true, },
        craftsman_id: {type:String, required:true, },
        serviceType:{type:String, required:true},
        duration:{type:String, required:true},
        cost:{type:String,required:true},
        status:{type:String, required:true}

    })

    const AutoIncrementFactory = AutoIncrement(mongoose);
    serviceSchema.plugin(AutoIncrementFactory, { inc_field: "service_ID" });

    export default mongoose.model('Service', serviceSchema);