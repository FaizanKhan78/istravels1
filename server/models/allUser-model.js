const {Schema,model}  = require("mongoose");

const allUserSchema = Schema({
    id:{
        type:Number,
    },
    student_name:{
        type:String,
    },
    mobile_no:{
        type:Number,
    },
    Rate:{
        type:Number,
    },
    payment_date:{
        type:String,
        default:"12/1/2024"
    },
    due_date:{
        type:String,
        default:"12/4/2024"
    },
    std:{
        type:Number,
    },
    pending_amount:{
        type:Number,
        default:1500,
    },

    paid_amount:{
        type:Number,
        default:0,
    },

    isAdmin: {
        type: Boolean,
    },
    status: {
        type: Boolean,
    },
})

const AllUser = model("AllUser",allUserSchema);
module.exports = AllUser;