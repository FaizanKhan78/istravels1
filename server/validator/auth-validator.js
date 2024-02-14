const {z} = require("zod");

const signupSchema = z.object({
    student_name:z.string({required_error:"Name required"}).trim(),
    
    mobile_no:z.number({required_error:"Mobile Number Required"}),
    
    password:z.string({required_error:"Password Required"}).trim(),

    pick_up_address:z.string({required_error:"PickUpAddress Required"}).trim(),

    drop_up_address:z.string({required_error:"DropAddress Required"}).trim(),

    area:z.string({required_error:"Area Required"}).trim(),

    gender:z.string({required_error:"Gender Required"}).trim(),


    std:z.number({required_error:"Std Required"})


    // pickUpTime:z.string({required_error:"PickUpTime Required"}).trim()
})

module.exports = signupSchema;