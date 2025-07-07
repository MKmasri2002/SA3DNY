import Service from "../models/Service.js";

export const addService= async (req,res)=>{

   const { user_id, craftsman_id,serviceType,duration,cost,status} = req.body;
    
    try{
        const service = new Service({ user_id, craftsman_id,serviceType,duration,cost,status});
        await service.save();
        res.status(200).json({msg:"successfully added", service});
    }catch(err){
        console.error(err.message);
        res.status(500).json({msg:"something error", error: err.message});
    }
};

export const getServiceByid= async(req,res)=>{
    try {
        const service= await Service.findOne({service_ID: req.query.service_ID});
        res.status(200).json({msg:"successfully returnd", service});
    } catch (error) {
        res.status(500).json({msg:"not found"});
    }
};

export const getAllService= async(req,res)=>{
    try {
        const service= await Service.find({});
        res.status(200).json({msg:"successfully returnd", service});
    } catch (error) {
        res.status(500).json({msg:"not found"});
    }
};

export const deleteService= async(req, res)=>{
    const {service_ID}= req.body;
    try {
        const deleted= await Service.findOneAndDelete({service_ID});
        if(deleted)
        res.status(200).json({msg:" successfully deleted"});
    else 
    res.status(404).json({msg: "something error"});
    } catch (error) {
        console.error("❌ Error in addBook:", error);
        res.status(500).json({msg: "not faundwwewe",error : error.message});    
    }
};

export const updateService= async(req, res)=>{
    const  { service_ID,user_id, craftsman_id,serviceType,duration,cost,status}= req.body;
    try {
        const updated= await Service.findOneAndUpdate({service_ID}, { user_id, craftsman_id,serviceType,duration,cost,status}, {new:true});
        if(updated)
        res.status(200).json({msg:" successfully updated"});
    else 
    res.status(404).json({msg: "something error"});
    } catch (error) {
        console.error("❌ Error in addBook:", error);
        res.status(500).json({msg: "not faundwwewe",error : error.message});     
    }
};

