const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller')
const validate  = require("../middleware/validate-middleware");
const signupSchema = require("../validator/auth-validator");
const loginSchema  = require("../validator/login-validator");
const authMiddleWare = require("../middleware/auth-middleware");

router.route('/').get(authController.home)

router.route('/register').post(validate(signupSchema),authController.register)

router.route('/login').post(validate(loginSchema),authController.login)

router.route('/payment').get(authMiddleWare,authController.payment);

router.route('/updatePassword/:number').patch(authController.updatePassword)

// router.route('/olddata/:number').get(authController.oldData);


module.exports = router