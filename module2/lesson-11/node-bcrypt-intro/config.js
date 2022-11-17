module.exports = {
  saltRounds: 10,
  passwordOne: "DummyPassword",
  passwordTwo: "testPassword",
};


// ROund 1 Encryption --> uhe
// ROund 2 Encryption --> iuefeiuf
// ROund 3 Encryption --> iue53fe4335iuf

//  passwordOne: "DummyPassword" ---> iuhsfofisrhoifhoirhfoierhof

// bcrypt.hash(saltRounds, passwordOne) --> Salt + hashedString

// bcrypt.hash(5,"DummyPassword") --> pkmnjbnk + iuhsfofisrhoifhoirhfoierhof
// bcrypt.hash(10,"DummyPassword") --> iufsubibfsfibrfrbfbifrf + iuhsfofisrhoifhoirhfoierhof
// bcrypt.hash(16,"DummyPassword") --> n84849nfn3984fn3944398bf4bf3bf9 + iuhsfofisrhoifhoirhfoierhof