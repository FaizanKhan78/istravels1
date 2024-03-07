const mongoose = require("mongoose");
const bcrypt = require( "bcryptjs" );
const jwt = require("jsonwebtoken");
const loginModal = new mongoose.Schema({
    id:{
        type:Number,
    },
    student_name:{
        type:String,
    },
    mobile_number:{
        type:Number,
        require:true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin:{
        type:Boolean,
    },
    status:{
        type:Boolean,
    }
})

loginModal.methods.comparePassword = async function(password){
    try {
        const compare = await bcrypt.compare(password,this.password);
        if(!compare){
            return password===this.password;
        }else{
            return bcrypt.compare(password,this.password);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

loginModal.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId:this._id.toString(),
            mobile_number:this.mobile_number,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY
        )
    }catch(error){
        console.log(error)
        res.status(400).json(error);
    }
}

const Logindb = mongoose.model("Logindb",loginModal);
module.exports = Logindb;