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

    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    User.create({ username, email, passwordHash })
    .then((newUser)=> {
        // req.session.currentUser = newUser;
        // res.redirect(`/auth/profile`)
        res.redirect('/auth/login')
    })
    .catch(err => console.log(err))

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