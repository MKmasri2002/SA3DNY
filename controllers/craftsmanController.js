import Craftsman from "../models/Craftsman.js";

export const addCraftsman= async (req,res)=>{

    const{fullName,phoneNumber,email,location,password,userName, pricePerHour, isAvailable}=req.body;
    try{
        const craftsman = new Craftsman({fullName,phoneNumber,email,location,password,userName, pricePerHour, isAvailable});
        await craftsman.save();
        res.status(200).json({msg:"successfully added", craftsman});
    }catch(err){
        console.error(err.message);
    res.status(500).json({msg:"something error", error: err.message});
    }
};

export const getCraftsmanByid= async(req,res)=>{
    try {
        const craftsman= await Craftsman.findOne({craftsman_ID: req.query.craftsman_ID});
        res.status(200).json({msg:"successfully returnd", craftsman});
    } catch (error) {
        res.status(500).json({msg:"not found"});
    }
};


export const getAllCraftsman= async(req,res)=>{
    try {
        const craftsman= await Craftsman.find({});
        res.status(200).json({msg:"successfully returnd", craftsman});
    } catch (error) {
        res.status(500).json({msg:"not found"});
    }
};

export const deleteCraftsman= async(req, res)=>{
    const {craftsman_ID}= req.body;
    try {
        const deleted= await Craftsman.findOneAndDelete({craftsman_ID});
        if(deleted)
        res.status(200).json({msg:" successfully deleted"});
    else 
    res.status(404).json({msg: "something error"});
    } catch (error) {
        console.error("❌ Error in addBook:", error);
        res.status(500).json({msg: "not faundwwewe",error : error.message});    
    }
};

export const updateCraftsman= async(req, res)=>{
    const {craftsman_ID,fullName,phoneNumber,email,location,password,userName, pricePerHour, isAvailable}= req.body;
    try {
        const updated= await Craftsman.findOneAndUpdate({craftsman_ID}, {fullName,phoneNumber,email,location,password,userName, pricePerHour, isAvailable}, {new:true});
        if(updated)
        res.status(200).json({msg:" successfully updated"});
    else 
    res.status(404).json({msg: "something error"});
    } catch (error) {
        console.error("❌ Error in addBook:", error);
        res.status(500).json({msg: "not faundwwewe",error : error.message});     
    }
};

