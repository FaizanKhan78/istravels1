const mongoose = require( "mongoose" );
const bcrypt = require( "bcryptjs" );
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema( {
    id: {
        type: Number,
    },
    student_name: {
        type: String,
        require: true,
    },
    mobile_no:{
        type:Number,
        require:true,
    },
    Rate:{
        type:Number,
        default:1500,
    },
    password: {
        type: String,
        require: true,
    },
    pick_up_address:{
        type:String,
        require:true,
    },
    drop_up_address:{
        type:String,
        require:true,
    },
    area:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    std:{
        type:Number,
        require:true,
    },
    alter_no:{
        type:Number,
        default:0,
    },
    pick_up_time:{
        type:String,
        default:"7:00 AM",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    status: {
        type: Boolean,
        default: false,
    },
} );

// Hash Password.
userSchema.pre( "save", async function (next)
{
    const user = this;
    if(!user.isModified("password")){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(5);
        const hash_password = await bcrypt.hash( user.password, saltRound );
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
} );


userSchema.methods.comparePassword = function(password){
    try {
        return bcrypt.compare(password,this.password);
    } catch (error) {
        res.status(400).json(error);
    }
}

// JWT Token
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId:this._id.toString(),
            mobile_no:this.mobile_no,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY
        )
    }catch(error){
        res.status(400).json(error);
    }
}

// Define Modal for Collection Name
const User = mongoose.model( "User", userSchema );

module.exports = User;