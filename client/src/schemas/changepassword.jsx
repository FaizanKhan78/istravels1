import * as Yup from 'yup';


export const changeSchema = Yup.object( {
    password: Yup.number().required( "Please Mobile Number" ),
    newpassword: Yup.string().min( 8 ).max( 25 ).matches( /[A-Z a-z]{1}[a-z]*[0-9]{3,}/g, "Password Must Contain alphabets and At least 3 digit" ).required( "Please Enter Password" ),
    // confirmpassword:
} );