require('dotenv').config();

const path = require('path');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

const { PORT, MONGODB_URI } = process.env;

app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))

mongoose.connect(MONGODB_URI).then(()=> console.log(`Successfully connected to library-project-demo`))

app.use('/books', require('./routes/book.routes'));

// 1. Create books in MongoDB -> Seeding our DB
// 2. Send a query to get all these books 
// 3. Display the books on the page

app.listen(PORT, () => console.log(`Library-project is running on port ${PORT}`))