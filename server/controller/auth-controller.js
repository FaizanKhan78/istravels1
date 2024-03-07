const Counter = require( '../models/id-model' );
const AllUser = require( '../models/allUser-model' );
const Logindb = require( '../models/login-modal' );
// *----------
// ? Home
// *----------
const home = async ( req, res ) =>
{
    try
    {
        // console.log( req.body );
        res.status( 200 ).send( "Hello World" );
    } catch ( error )
    {
        // console.log( error );
        res.status( 500 ).json( { error: "Internal Server Error" } );
    }
};


// *----------
// ? Register
// *----------
const register = async ( req, res ) =>
{
    try
    {
        const { student_name, mobile_number, password, pick_up_address, drop_up_address, area, div, society, gender, payment_date, due_date, std, alternate_number } = req.body;
        // Check if the user already exists 
        const userExist = await AllUser.findOne( { mobile_number } );
        if ( userExist )
        {
            if ( userExist.status === false )
            {
                return res.status( 400 ).json( { message: "Your Status is Pending" } );
            }
            return res.status( 400 ).json( { message: "User Already Exist" } );
        }

        const userExist2 = await AllUser.findOne( { mobile_number } );
        if ( userExist2 )
        {
            if ( userExist2.status === false )
            {
                return res.status( 400 ).json( { message: "Your Status is Pending" } );
            }
            return res.status( 400 ).json( { message: "User Already Exist" } );
        }

        // Find and update the counter
        const counterData = await Counter.findOneAndUpdate(
            { id: "autoVal" },
            { "$inc": { "seq": 1 } },
            { new: true }
        );

        // If the counter data is null, create a new counter
        let seqId;
        if ( !counterData )
        {
            const newVal = new Counter( { id: "autoVal", seq: 1 } );
            await newVal.save();
            seqId = 1;
        } else
        {
            seqId = counterData.seq;
        }
        // Create the user with the incremented counter value
        // const = await User.create( {
        //     id: seqId,
        //     student_name,
        //     password,
        //     pick_up_address,
        //     drop_up_address,
        //     area,
        //     div,
        //     society,
        //     gender,
        //     payment_date,
        //     due_date,
        //     std,
        //     mobile_number,
        //     alternate_number,
        // } );
        // console.log("New User",

        const payment = await AllUser.create( {
            _id: _id,
            id: seqId,
            student_name,
            pick_up_address,
            drop_up_address,
            area,
            gender,
            std,
            div,
            society,
            mobile_number,
            alternate_number,
            time: time,
            password,
            route: route,
            pending_amount: pending_amount,
            paid_amount: paid_amount,
            payment_date: payment_date,
            due_date: due_date,
            isAdmin: isAdmin,
            status: status,
            rate: rate,
        } );
        // console.log("Payment",payment)

        const login = await Logindb.create( {
            _id: _id,
            id: seqId,
            student_name,
            password: password,
            mobile_number,
            isAdmin: isAdmin,
            status: status,
        } );

        // console.log("I am login",login);

        res.status( 200 ).json( { msg: "Registration Successful", token: await payment.generateToken(), userId: payment._id.toString() } );
    } catch ( error )
    {
        // console.error( error );
        res.status( 500 ).json( error );
    }
};

// *----------
// ? Login
// *----------

const login = async ( req, res ) =>
{
    try
    {
        const { mobile_number, password } = req.body;
        // console.log(mobile_number,"Number")
        let userExist = await Logindb.find( { mobile_number } );
        if ( !userExist )
        {
            return res.status( 400 ).json( { message: "Invalid Credentials" } );
        }
        const user = await userExist[ 0 ].comparePassword( password );
        if ( user )
        {
            res.status( 200 ).json( { msg: "Login Successful", token: await userExist[ 0 ].generateToken(), userId: userExist[ 0 ]._id.toString() } );
        } else
        {
            res.status( 401 ).json( "Unauthorized error" );
        }
    } catch ( error )
    {
        res.status( 500 ).json( error );
    }
};

// *---------------------------------------
// ? To send Data User - logic form Payment.
// *---------------------------------------

const payment = async ( req, res ) =>
{
    try
    {
        const userData = req.user;
        res.status( 200 ).json( userData );
    } catch ( error )
    {
        res.status( 400 ).json( error );
    }
};

const updatePassword = async ( req, res ) =>
{
    try
    {
        const number = req.params.number;
        let data = await AllUser.find( { mobile_number: number } );
        if ( !data )
        {
            res.status( 500 ).json( { message: "User Doesn't Exist" } );
        }
        if ( data[ 0 ].password === req.body.password )
        {
            return res.status( 400 ).json( { message: "New password cannot be the same as your old password" } );
        }
        data = await AllUser.updateMany( { mobile_number: number}, req.body, { new: true } );
        if ( !data.acknowledged )
        {
            await AllUser.updateOne( { mobile_number: number }, req.body, { new: true } );
            await Logindb.updateOne({mobile_number:number}, req.body,{new:true});
        }
        await Logindb.updateMany({mobile_number:number}, req.body,{new:true});
        res.status( 200 ).json( data );
    } catch ( error )
    {
        res.status( 500 ).json( error );
    }
};


module.exports = { home, register, login, payment, updatePassword };