const AllUser = require( '../models/allUser-model');
const Logindb = require( '../models/login-modal' );
const OldData = require( '../models/old-data-modal');
const User = require('../models/user-model');
// *----------
// ? AllData
// *----------

const getAllOldData = async (req,res) =>{
    try {
        const allOldData = await OldData.find();
        res.status(200).json(allOldData)
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllNewData = async (req,res,next)=>{
    try {
        const newData = await AllUser.find();
        res.status(200).json(newData)
    } catch (error) {
        res.status(400).json(error)
    }
}

const setAllDataDate = async (req,res) =>{
    try{
        const data = await AllUser.updateMany({std:{$gte:0}},req.body);
        res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
}

const updateSingle = async (req,res) =>{
    try {
        const number = req.params.number;
        const data = await AllUser.findOneAndUpdate({mobile_no:number},req.body,{
            new:true,
        });
        await User.findOneAndUpdate({mobile_no:number},req.body);
        await Logindb.findOneAndUpdate({mobile_no:number},req.body);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
}



const  deleteUser =async (req,res)=>{
    try {
        const id = req.params.id;
        await AllUser.findByIdAndDelete({_id:id});
        await User.findByIdAndDelete({_id:id});
        await Logindb.findByIdAndDelete({_id:id});
        res.status(200).json({msg:"Deleted Successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {getAllOldData,setAllDataDate,updateSingle,deleteUser,getAllNewData}