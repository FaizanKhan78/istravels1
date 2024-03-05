const mongoose = require('mongoose');

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

const AllUser = mongoose.model('AllUser', allUserSchema);

module.exports = AllUser;
