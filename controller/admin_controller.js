const express = require('express');
const queries = require('../queries');
const pool = require("../dbconfig")
const app = express();
const routes = require('../routes/admin_routes');
const bodyParser = require('body-parser');

const {
    genSaltSync,
    hashSync,
    compareSync
} = require("bcryptjs");
const jwt = require("jsonwebtoken");




const addlookup = (req, res) => {
    const {product_logo,header_text, banner_image, admin_email, payment_type} = req.body;


    pool.query(queries.addlookup, [product_logo, header_text, banner_image, admin_email, payment_type], (error, results) => {
        if (error) throw error;
        res.send("Admin lookup added Successfully");
    })



}

const adminSignin = (req, res) => {

    const {
        username,
        password
    } = req.body;


    if (username != 'admin' && password != 'admin') {
        res.send(" incorrect username or password");
    }




    // result = compareSync(body.password, rows.password);
    // jsontoken = sign({ result, rows }, process.env.SECRET, {
    //     expiresIn: "1h",
    //   });

    let resp = {
        username: username,
        password: password

    };
    let token = jwt.sign(resp, "secret", {
        expiresIn: 86400
    });
    res.send({
        auth: true,
        token: token
    });
    // res.send("admin signed in");
}



// const userUpdate=(req, res)=> {
//     const fname = req.body.firstName;
//     const lname = req.body.lastName;
//     const email = req.body.email;
//     const password = req.body.password;
//     const phone = req.body.phone_number;

//     var id = 0;
//     //Get ID of user which needs to be updated
//     db.query("SELECT user_id FROM \"User\" WHERE email="+"'"+email+"'"+";", (error, result) =>{
//         if(error)
//         {
//             res.send("Sign up first!");
//         }
//         else
//         {
//             id = result.rows.user_id; //Store that id in API 
//         }
//     })

//     db.query(queries.update, [ fname, lname, email, password, phone, id], (error, result) => { //Use that ID to update the user
//         if(error)
//         {
//             console.log(error);
//         }
//         else
//         {
//             res.send("Data updated Successfully");
//         }
//     });

// }

module.exports = {
    adminSignin,
    addlookup
};