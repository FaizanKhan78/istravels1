const mongoose = require("mongoose");
const oldDataModal = mongoose.Schema({
    student_Name:{
        type:String,
    },
    Mobile_No:{
        type:Number,
    },
    Alt_No:{
        type:Number,
    },
    Rate:{
        type:Number,
    },
    Jun:{
        type:Number,
    },
    Aug:{
        type:Number,
    },
    Sep:{
        type:Number,
    },
    Oct:{
        type:Number,
    },
    Nov:{
        type:Number,
    },
    Dec:{
        type:Number,
    },
    Jan:{
        type:Number,
    },
    Feb:{
        type:Number,
    },
    Mar:{
        type:Number,
    },
    Apr:{
        type:Number,
    },
    May:{
        type:Number,
    },
})

const OldData = mongoose.model("OldData",oldDataModal);
module.exports = OldData;