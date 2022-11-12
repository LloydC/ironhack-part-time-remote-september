require('dotenv').config();

const path = require('path');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

const { PORT, MONGODB_URI } = process.env; //{PORT: 3004, MONGODB_URI:......}

app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))

mongoose.connect(MONGODB_URI).then(()=> console.log(`Successfully connected to library-project-demo`))

// app.use('/', (req,res) => res.send('Hello World'))
app.use('/books', require('./routes/book.routes'));

app.listen(PORT, () => console.log(`Library-project is running on port ${PORT}`))