const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/User.model")


const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard');

/* GET Signup page */
router.get("/signup", isLoggedOut, (req, res, next) => {
    console.log(req.session)
    res.render("auth/signup")
});

/* POST Signup page */
router.post("/signup", isLoggedOut, async (req, res, next) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
      return;
    }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }

    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    User.create({ username, email, passwordHash })
    .then((newUser)=> {
        // req.session.currentUser = newUser;
        // res.redirect(`/auth/profile`)
        res.redirect('/auth/login')
    })
    .catch(error => {
      // copy the following if-else statement
      if (error instanceof mongoose.Error.ValidationError) {
          res.status(500).render('auth/signup', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('auth/signup', {
           errorMessage: 'Username and email need to be unique. Either username or email is already used.'
        })
    }
      else {
        next(error);
      }
  })

});

/* GET Profile page */
router.get("/profile", isLoggedIn, (req, res, next) => {

    console.log(req.session);
    const { currentUser} = req.session
    
    if(currentUser){
        res.render("auth/profile", currentUser)
    }
    else {
        res.redirect('/auth/login')
    }
    
});

router.get("/login", isLoggedOut, (req, res) => {
    console.log(req.session)
    res.render("auth/login");
})

router.post("/login", isLoggedOut, (req, res) => {
    const { email, password } = req.body; // req.session {username:..., email:...}

    if (email === '' || password === '') {
        res.render('auth/login', {
          errorMessage: 'Please enter both, email and password to login.'
        });
        return;
    }

   // const findUser = email.includes('@') ? await User.findOne({ email }) : await User.findOne({username: email})
    
   User.findOne({ email })
   .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
      } else if (bcrypt.compareSync(password, user.passwordHash)) {
        // res.render('users/user-profile', { user });
        //******* SAVE THE USER IN THE SESSION ********//
        req.session.currentUser = user;
        res.redirect(`/auth/profile`);
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
})

router.post('/logout', isLoggedIn, (req, res) => {
    req.session.destroy(err => {
      if (err) console.log(err);
      res.redirect('/');
    });
  });

module.exports = router;