const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {pool} = require("../dbconfig");


router.post('/user/register', async (req,res) => {

    let errors = [];
    let {name, email, password, cpassword} = req.body;

    console.log(req.body);
    res.send(req.body);

    if ( ! name ||! email ||  !password || !cpassword){
        return res.status(422).send(" PLz fill data properly")
    }

    if (password.length < 6){
        res.send(" Password should be atleat 6 characters")
    }

    if(password != cpassword){
        res.json({"error" : "passwords do not match"})
    }

    if (errors.length > 0 ){
        res.send("error hai", {errors})
    }else{
        let hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);

   


    }

    
})

module.exports = router;