const express = require("express");

const router = express.Router();


router.get("/", (req,res) => {
    res.send("hello from theserver")
})

router.get("/register", (req,res) => {
    res.send("registred user page")
})

router.get("/login", (req,res) => {
    res.send("login user page")
})


module.exports = router;