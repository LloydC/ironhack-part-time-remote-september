const express = require('express');
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/User.model")

/* GET Signup page */
router.get("/signup", (req, res, next) => {
    res.render("auth/signup")
});

/* POST Signup page */
router.post("/signup", async (req, res, next) => {

    const { username, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    User.create({ username, email, passwordHash })
    .then((newUser)=> res.redirect(`/auth/profile/${newUser.username}`))
    .catch(err => console.log(err))

});

/* GET Profile page */
router.get("/profile/:username", (req, res, next) => {
    const { username } = req.params;

    User.findOne({ username })
    .then(foundUser => res.render("auth/profile", {user: foundUser}))
    .catch(err => console.log(err))
});

module.exports = router;