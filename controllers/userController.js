import User from "../models/User.js";

export const addUser = async (req,res)=>{

    const{id,fullName,phoneNumber,email,location,password,userName}=req.body
    
    try{
        const user = new User({id,fullName,phoneNumber,email,location,password,userName});
        await user.save();
        res.status(200).json({msg:"successfully added", user});
    }catch(err){
       console.error(err.message);
    res.status(500).json({msg:"something error", error: err.message});
    }
}

export const getUserByid= async(req,res)=>{
    try {
        const user= new User.findById({id: req.query.id});
        res.status(200).json({msg:"successfully returnd", user});
    } catch (error) {
        res.status(500).json({msg:"not found"});
    }
}