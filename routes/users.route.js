const express = require('express');
const router = express.Router();




router.get("/", (req, res) => {

    res.send("I'm get request in edulancer Home Route");

})

router.get("/register", (req, res) => {

    res.send("Register");

})

router.get("/signin", (req, res) => {

    res.send("Sign in");

})


module.exports = router;