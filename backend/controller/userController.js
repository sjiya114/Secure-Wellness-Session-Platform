const jwt=require('jsonwebtoken');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const userModel=require('../models/user');
// import {v2 as cloudinary} from 'cloudinary';
const {v2} =require('cloudinary');
const generateToken=async function(email,id)
{
   return jwt.sign({email,id},process.env.JWT_SECRET);
}

//API for user registration
module.exports.register=async(req,res)=>
{
    try {
        console.log(req.body);
       const {name,email,password}=req.body; 
         console.log(name);
       if(!validator.isEmail(email))
        return res.json({success:false,message:"please enter a valid email"});
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt); 
       const user=new userModel({
        name:name,
        email:email,
        password:hashedPassword
       });
       await user.save();
        const token=generateToken(email,user._id);
       res.json({success:true,message:"user created successfully",user:user,token:token});
    } catch (error) {
        res.json({success:false,error:error.message});
    } 
}
//API for user login
module.exports.login=async(req,res)=>
{
       console.log(req.body);
      try {
            const {email,password}=req.body;  
            if(!validator.isEmail(email))
                 return res.json({success:false,message:"please enter a valid email"});
            const decodeduser=await userModel.findOne({email:email});
            if(!decodeduser)
                {
                    return res.json({success:false,message:"matching user or password not found"}); 
                } 
            const match=await bcrypt.compare(password,decodeduser.password);
            if(!match)
                 return res.json({success:false,message:"matching user or password not found"}); 
            const token=await generateToken(email,decodeduser._id);
            
            res.json({success:true,message:"logged in successfully",user:decodeduser,token:token});
        } catch (error) {
            res.json({success:false,error:error.message});
        }
}
module.exports.authUser=(req,res)=>
{
try {
 res.json({success:true,user:req.user});
} catch (error) {
    return res.json({success:false,message:error.message});
}
}