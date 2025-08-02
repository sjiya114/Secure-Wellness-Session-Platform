const jwt=require('jsonwebtoken');
const userModel=require('../models/user');
//middleware for checking if user is logged in or not
module.exports.IsLoggedIn=async(req,res,next)=>
{
    try {
       const token = req.headers.token;
        if(!token)
        {

            return res.json({success:false,message:"error while accessing token"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded || !decoded.id) 
        return res.json({success:false,message:"error while verifying token"});
        const user=await userModel.findOne({_id:decoded.id});
        req.user=user;
        next();
    } catch (error) {
        res.json({success:false,error:error.message});
    }
}
