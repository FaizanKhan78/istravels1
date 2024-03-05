const mongoose = require( "mongoose" );
const bcrypt = require( "bcryptjs" );
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  id: { type: Number,},
  student_name: { type: String, },
  pick_up_address: { type: String,  },
  drop_up_address: { type: String,  },
  area: { type: String,  },
  gender: { type: String,  },
  std: { type: Number,default:"empty",  },
  div: { type: String, default:"empty", },
  society: { type: String,  },
  mobile_number: { type: Number,  },
  alternate_number: { type: String },
  time: { type: String,  default:"7:00 AM",},
  password: { type: String,  },
  route: { type: String,  },
  pending_amount: { type: Number, default: 0 },
  paid_amount: { type: Number, default: 0 },
  payment_date: { type: String },
  due_date: { type: String },
  isAdmin: { type: Boolean, default: false },
  status: { type: Boolean, default: false },
  rate: { type: Number, default:0 }
});

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
            mobile_number:this.mobile_number,
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