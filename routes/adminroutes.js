// const {
   
//     login,
//     SignUp,
//   } = require("../controller/userController");
//   const router = require("express").Router();
  
//   const { auth } = require("../middleware/auth");


//   router.post("/login", login);
// router.post("/sign-up", SignUp);

// module.exports = router;


const controller = require("../controller/admincontroller")

const {Adminauthentication}=require("../middleware/admin")

const express= require('express');
const jwt = require("jsonwebtoken");



const app = express();

//const router = express.Router();
app.post('/',[Adminauthentication.verifyadmin],controller.addlookup);
app.post('/signin',[Adminauthentication.verifyadmin],controller.adminSignin);
// app.put('/updateuser',[Authentication.verifytoken],controller.userUpdate);



module.exports = app;