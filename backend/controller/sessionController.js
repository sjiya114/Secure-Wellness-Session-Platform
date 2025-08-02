const sessionSchema = require('../models/session');
const {v2}=require('cloudinary');
module.exports.getAllSessions = async (req, res) => {
    try {
        const sessions = await sessionSchema.find({});
        res.json({ success: true, sessions: sessions });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
}
module.exports.getMySession = async (req, res) => {
    try {
        const sessions = await sessionSchema.find({ user_id: req.user._id });
        res.json({ success: true, sessions: sessions });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
}
module.exports.getUserSession = async (req, res) => {
    try {
        const { id } = req.params;
        const sessions = await sessionSchema.find({ user_id: id });
        res.json({ success: true, sessions: sessions });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
}
module.exports.createSession =async(req, res) => {
    try {
        const {title, description, tags, duration, location, time, date, seats, booked, price,
            requirements, status } = req.body;
               console.log("step1");
        const image=req.file;
        const userId=req.user._id;
        console.log(userId);
        console.log(title+" "+description+" "+duration+" "+time+" "+date+" "+seats+" "+price);
        // if(userId)
        // {
        //       return res.json({ success: false,message:"user_id is required field" });
        // }
        if(!title || !description || !duration || !time || !date || !seats || !price)
        {
           return res.json({ success: false,message:"input fields are missing" }); 
        }
        let upload;
        if(image)
        {
          upload=(await v2.uploader.upload(req.file.path)).secure_url;
        }
        await Promise.all(upload);
        const newsession=new sessionSchema({
            user_id:req.user._id, title, description, tags, duration, location, time, date, seats, booked, price,
            requirements, status,profile:upload
        });
        await newsession.save();
        const message=status==="draft"?"Auto saved suucessfully":"session created successfully";
        res.json({success:true,message:message,sessionId:newsession._id});
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
}
module.exports.publishSession=async(req,res)=>
{
    try {
       const {sessionId}=req.body;
       const session=await sessionSchema.findOne({_id:sessionId});
       session.status="published";
       await session.save();
       res.json({success:true,message:"session published successfully"});  
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
}
module.exports.updateSession=async(req,res)=>
{
try {
        const {sessionId, title, description, tags, duration, location, time, date, seats, booked, price,
            requirements, status } = req.body;
        const {image}=req.file;
        if(!req.user._id)
        {
              return res.json({ success: false,message:"user_id is required field" });
        }
        if(!req.user._id || !title || !description|| !tags || !duration || !location || !time || !date || !seats || !booked || !price ||
            !requirements || !status )
        {
           return res.json({ success: false,message:"input fields are missing" }); 
        }
        const session=await sessionSchema.findOneAndUpdate({_id:sessionId},{user_id:req.user._id, title, description, tags, duration, location, time, date, seats, booked, price,
            requirements, status},{new:true});
        let upload;
        if(image)
        {
          upload=(await v2.uploader.upload(req.file.path)).secure_url;
        }
        await Promise.all(upload);
        session.profile=upload;
        await session.save();
        res.json({success:true,message:"session updated successfully"}); 
} catch (error) {
    res.json({ success: false, error: error.message }); 
}
}
module.exports.autoSave=async(req,res)=>
{
   try {
            const {sessionId, title, description, tags, duration, location, time, date, seats, price,
            requirements, status } = req.body;
        const {image}=req.file;
        if(!req.user._id)
        {
              return res.json({ success: false,message:"user_id is required field" });
        }
        if(!req.user._id || !title || !description|| !tags || !duration || !location || !time || !date || !seats || !price ||
            !requirements || !status )
        {
           return res.json({ success: false,message:"input fields are missing" }); 
        }
        const session=await sessionSchema.findOneAndUpdate({_id:sessionId},{user_id:req.user._id, title, description, tags, duration, location, time, date, seats, price,
            requirements, status},{new:true});
        let upload;
        if(image)
        {
          upload=(await v2.uploader.upload(req.file.path)).secure_url;
        }
        await Promise.all(upload);
        session.profile=upload;
        await session.save();
        res.json({success:true,message:"draft saved successfully",sessionId:sessionId}); 
} catch (error) {
    res.json({ success: false, error: error.message }); 
} 
}
