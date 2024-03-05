const express = require('express');
const adminRouter = express.Router();
const adminController = require("../controller/admin-controller");
const authMiddleWare = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");


adminRouter.route('/getAllNewData').get(authMiddleWare,adminMiddleware,adminController.getAllNewData)

adminRouter.route('/setAllDataDate').patch(authMiddleWare,adminMiddleware,adminController.setAllDataDate);

adminRouter.route('/updateSingle/:number').patch(authMiddleWare,adminMiddleware,adminController.updateSingle);

adminRouter.route('/delete/:id').delete(authMiddleWare,adminMiddleware,adminController.deleteUser);


module.exports = adminRouter