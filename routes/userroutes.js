// const {
   
//     login,
//     SignUp,
//   } = require("../controller/userController");
//   const router = require("express").Router();
  
//   const { auth } = require("../middleware/auth");


//   router.post("/login", login);
// router.post("/sign-up", SignUp);

// module.exports = router;


const controller = require("../controller/usercontroller")

const {Authentication}=require("../middleware/auth.js")

const express= require('express');
const jwt = require("jsonwebtoken");



const app = express();

//const router = express.Router();
app.post('/signup',controller.userSignUp);
app.post('/signin',[Authentication.verifytoken],controller.userSignIn);
app.put('/updateuser',[Authentication.verifytoken],controller.userUpdate);



module.exports = app;