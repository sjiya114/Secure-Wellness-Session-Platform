const express=require('express');
const multer=require('multer');
const storage=multer.diskStorage({
filename:(req,file,callback)=>
{
return callback(null,file.originalname);
}
});
const upload=multer({storage});
const { IsLoggedIn } = require('../middleware/isLoggedIn');
const { getAllSessions, getMySession, getUserSession,publishSession, createSession, autoSave } = require('../controller/sessionController');
const router=express.Router();
router.get("/sessions",getAllSessions);
router.get("/my-sessions",IsLoggedIn,getMySession);
router.get("/my-sessions/:id",IsLoggedIn,getUserSession);
router.post("/my-sessions/save-draft",upload.single("image"),IsLoggedIn,createSession);
router.post("/my-sessions/publish",IsLoggedIn,publishSession);
router.post("/autosave",upload.single("image"),IsLoggedIn,autoSave);
module.exports=router;