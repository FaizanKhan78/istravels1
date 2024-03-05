import * as Yup from 'yup';

export const registerSchema = Yup.object( {
    student_name: Yup.string().min( 3 ).max( 25 ).required( "Please Enter Name" ),
    mobile_number: Yup.string().matches( /[0-9][0-9]{9}/g ).min( 10 ).max( 10 ).required( "PLease Enter Mobile Number" ),
    password: Yup.string().min( 8 ).max( 25 ).matches( /[A-Z a-z]{1}[a-z]*[0-9]{3,}/g, "Password Must Contain alphabets and At least 3 digit" ).required( "Please Enter Password" ),
    pick_up_address: Yup.string().min( 8 ).max( 255 ).required( "PLease Enter Pick Up Address" ),
    drop_up_address: Yup.string().min( 8 ).max( 255 ).required( "Please Enter Drop Address" ),
    area: Yup.string().min( 4 ).max( 255 ).required( "Please Enter Area" ),
    div: Yup.string().min( 1 ).required( "Please Enter Division" ),
    society: Yup.string().min( 6 ).max( 50 ).required( "Please Enter Society" ),
    gender: Yup.string().required( "Please Select Gender" ),
    std: Yup.string().min( 1 ).max( 3 ).required( "Please Enter STD" ),
    alternate_number: Yup.string().matches( /[0-9][0-9]{9}/g ).min( 10 ).max( 10 ),
} );