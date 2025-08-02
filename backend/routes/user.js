const express=require('express');
const { register, login, authUser } = require('../controller/userController');
const { IsLoggedIn } = require('../middleware/isLoggedIn');
const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/auth",IsLoggedIn,authUser);
module.exports=router;