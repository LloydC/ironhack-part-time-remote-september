const router = require('express').Router();

const Book = require('../models/Book.model.js');
 
// GET route to retrieve and display all the books
router.get('/', (req, res) => {
    // const firstQuery = Book.findOne({title:'The Fault in Our Stars '});
    // const secondQuery = Book.findOne({title: 'Twilight'});

    // Promise.all([firstQuery, secondQuery])
    //     .then(result => {
    //         console.log('result', result)
    //         res.render('books/books-list.hbs', { books: result })
    //     })
    Book.find()
        .then(dbBooks => {
            res.render('books/books-list.hbs', { books: dbBooks })
        })
        .catch(err => console.log(err))
});


router.get('/search', (req, res) => {
        const { bookName } = req.query;

        Book.findOne({title: bookName})
            .then(foundBook => {
                res.render('books/books-details.hbs', {singleBook: foundBook})
            })
            .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
    res.render('books/books-create.hbs')
})

router.post('/create', (req, res) => {
    console.log(req.body)
    const {title, author, description, rating} = req.body;
    
    Book.create({title, description, author, rating})
        .then(() => res.redirect('/books'))
        .catch(err => console.log(err))
})

router.get('/:bookId', (req, res) => {
    const { bookId } = req.params;
    // Book.findOne({title: 'Harry Potter'})
    Book.findById(bookId)
        .then(bookFound => {
            console.log('bookFound', bookFound)
            res.render('books/books-details.hbs', {singleBook: bookFound})
        })
        .catch(err => console.log(err))
})
 
module.exports = router;