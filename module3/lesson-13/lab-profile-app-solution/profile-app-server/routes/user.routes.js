const express = require("express");
const router = express.Router();

const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");


router.put("/users", isAuthenticated, (req, res, next) => {
    const { image } = req.body;
    const userId = req.payload._id;

    User.findByIdAndUpdate(userId, { image }, { new: true})
        .then( ({_id, username, campus, course, image}) => res.json({_id, username, campus, course, image}))
        .catch(err => console.error(err))
});

router.get("/users", isAuthenticated, (req, res, next) => {
    // If JWT token is valid the payload gets decoded by the
    // isAuthenticated middleware and is made available on `req.payload`
    console.log(`req.payload`, req.payload);
  
    // Send back the token payload object containing the user data
    res.status(200).json(req.payload);
});


module.exports = router;