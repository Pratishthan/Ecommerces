const express = require('express');
const queries = require('../queries');
const db = require("../dbconfig")
const app = express();
const routes = require('../routes/user_routes');
const bodyParser = require('body-parser');

const {
    genSaltSync,
    hashSync,
    compareSync
} = require("bcryptjs");
const jwt = require("jsonwebtoken");




const userSignUp = (req, res) => {
    var dateTime = new Date();
    console.log("Entered Routes Callback");

    const salt = genSaltSync(2);
    const user_role='Normaluser';
    req.body.password = hashSync(req.body.password, salt);

    let fname = req.body.firstName;
    let lname = req.body.lastName;
    let gender = req.body.gender;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone_number;



    db.query(queries.signUp, [fname, lname, gender, email, password, phone, 'A', dateTime, dateTime,user_role], (error, result) => {
        if (error) {
            console.log(error);
        } else {


            res.send("Signed Up Successfully");
        }
    });

}

const userSignIn = (req, res) => {

    let {
        email,
        password
    } = req.body;


    if (!email || !password) {
        return res.status(422).send(" PLz fill data properly")
    }

    db.query(queries.signIn, [email, password], (error, result) => {
        if (!result.rows.length) {
            res.send("User not registered");
        } else {
            // result = compareSync(body.password, rows.password);
            // jsontoken = sign({ result, rows }, process.env.SECRET, {
            //     expiresIn: "1h",
            //   });

            let resp = {
                id: email,
                password: password

            };
            let token = jwt.sign(resp, "secret", {expiresIn: 86400});
              res.send({auth:true,token:token});
            res.send("User signed in");
        }
    });

}

const userUpdate = (req, res) => {
    let fname = req.body.firstName;
    let lname = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone_number;

    var id = 0;
    //Get ID of user which needs to be updated
    db.query("SELECT user_id FROM \"User\" WHERE email=" + "'" + email + "'" + ";", (error, result) => {
        if (error) {
            res.send("Sign up first!");
        } else {
            id = result.rows.user_id; //Store that id in API 
        }
    })

    db.query(queries.update, [fname, lname, email, password, phone, id], (error, result) => { //Use that ID to update the user
        if (error) {
            console.log(error);
        } else {
            res.send("Data updated Successfully");
        }
    });

}

module.exports = {
    userSignUp,
    userSignIn,
    userUpdate
};