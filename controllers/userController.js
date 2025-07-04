import User from "../models/User.js";

export const addUser = async (req,res)=>{

    const{fullName,phoneNumber,email,location,password,userName}=req.body;
    try{
        const user = new User({fullName,phoneNumber,email,location,password,userName});
        await user.save();
        res.status(200).json({msg:"successfully added", user});
    }catch(err){
        console.error(err.message);
    res.status(500).json({msg:"something error", error: err.message});
    }
};

export const getUserByid= async(req,res)=>{
    try {
        const user= await User.findOne({user_ID: req.query.user_ID});
        res.status(200).json({msg:"successfully returnd", user});
    } catch (error) {
        res.status(500).json({msg:"not found"});
    }
};

export const deleteUser= async(req, res)=>{
    const {user_ID}= req.body;
    try {
        const deleted= await User.findOneAndDelete({user_ID});
        if(deleted)
        res.status(200).json({msg:" successfully deleted"});
    else 
    res.status(404).json({msg: "something error"});
    } catch (error) {
        console.error("❌ Error in addBook:", error);
        res.status(500).json({msg: "not faundwwewe",error : error.message});    
    }
};

export const updateUser= async(req, res)=>{
    const {user_ID,fullName,phoneNumber,email,location,password,userName}= req.body;
    try {
        const updated= await User.findOneAndUpdate({user_ID}, {fullName,phoneNumber,email,location,password,userName}, {new:true});
        if(updated)
        res.status(200).json({msg:" successfully updated"});
    else 
    res.status(404).json({msg: "something error"});
    } catch (error) {
        console.error("❌ Error in addBook:", error);
        res.status(500).json({msg: "not faundwwewe",error : error.message});     
    }
};

