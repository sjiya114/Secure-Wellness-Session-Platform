const express=require('express');
const app=express();
require('dotenv').config();
const db=require('./config/mongoose');
const userSchema=require('./models/user');
const sessionSchema=require('./models/session');
const user=require('./routes/user');
const cors=require('cors');
const session=require('./routes/session');
const {connectCloudinary} = require('./config/cloudinary');
connectCloudinary();
app.use(cors());
app.use(express.json()); // for application/json only
app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded
app.use("/user",user);
app.use("/session",session);
app.get("/",(req,res)=>
{
    res.send("app is running");
})
const PORT=5000;
app.listen(PORT,()=>
{
    console.log(`app started running on http://localhost:${PORT}`);
})
