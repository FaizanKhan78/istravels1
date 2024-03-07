const mongoose = require('mongoose');
const bcrypt = require( "bcryptjs" );
const jwt = require("jsonwebtoken");

const allUserSchema = new mongoose.Schema({
  id: Number,
  student_name: String,
  pick_up_address: String,
  drop_up_address: String,
  area: String,
  gender: String,
  std: Number,
  div: String,
  society: String,
  mobile_number: {
    type: Number,
    unique: true
  },
  alternate_number: Number,
  time: {type:String,default:"empty"},
  password: String,
  route: {
    type:String,
    default:"empty",
  },
  pending_amount: {type:Number,default:0},
  paid_amount: {type:Number,default:0},
  payment_date: {type:String,default:"empty"},
  due_date: {type:String,default:"empty"},
  isAdmin:{
    type:Boolean,
    default:false,
  },
  status: {
    type:Boolean,
    default:false,
  },
  rate:{
    type:Number,
    default:1500,
  } 
});

// Hash Password.
allUserSchema.pre( "save", async function (next)
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


allUserSchema.methods.comparePassword = function(password){
    try {
        return bcrypt.compare(password,this.password);
    } catch (error) {
        res.status(400).json(error);
    }
}

// JWT Token
allUserSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId:this._id.toString(),
            mobile_number:this.mobile_number,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY
        )
    }catch(error){
        res.status(400).json(error);
    }
}


const AllUser = mongoose.model('AllUser', allUserSchema);

module.exports = AllUser;
