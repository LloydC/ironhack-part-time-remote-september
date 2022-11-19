const express = require('express');
const router = express.Router();

const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard');

router.get("/dogs", isLoggedIn, (req, res, next) => {
  const dogsList = ["James", "Wagner","Luda"]
    res.json(dogsList)
});

router.get("/dogsOwners", isLoggedOut, (req, res, next) => {
    const dogsOwnersList = ["Julian", "Windy","Lex"]
      res.json(dogsOwnersList)
});

module.exports = router;
