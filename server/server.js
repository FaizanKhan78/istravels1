require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const router = require('./router/auth-router');
const adminrouter = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require( './middleware/error-middleware' );
//! Middleware.
const corsOption = {
    origin:"http://localhost:5173",
    methods:"GET,POST,DELETE,PATCH,PUT",
    credentials:true,
}

app.use(cors(corsOption));
app.use(express.json())
app.use('/api/auth',router);
app.use('/admin',adminrouter);

app.use(errorMiddleware);

const PORT = 9000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running a localhost ${PORT}`)
    })
})