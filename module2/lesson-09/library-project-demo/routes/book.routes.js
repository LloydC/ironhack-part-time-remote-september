const router = require('express').Router();
const Book = require('../models/Book.model.js');
const { getAllBooksController, getCreateBookController} = require('../controllers/index')
 
// GET route to retrieve and display all the books
router.get('/', getAllBooksController);


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

router.get('/:bookId/edit', (req, res) => {
    const { bookId } = req.params;
   
    Book.findById(bookId)
      .then(bookToEdit => {
        // console.log('booksToEdit',bookToEdit);
        res.render('books/books-edit.hbs', { book: bookToEdit });
      })
      .catch(error => console.log(error));
  });

  router.post('/:bookId/edit', (req, res) => {
    // console.log('req body', req.body)
    const { bookId } = req.params;
    const {title, author, description, rating } = req.body;

    Book.findByIdAndUpdate(bookId, {title, author, description, rating}, {new: true})
        .then(updatedBook => res.redirect(`/books/${updatedBook._id}/edit`))
        .catch(err => console.log(err))
    ;
  });

  router.post('/:bookId/delete', (req, res) => {
    // console.log('req body', req.body)
    const { bookId } = req.params;


    Book.findByIdAndDelete(bookId)
        .then(() => res.redirect(`/books`))
        .catch(err => console.log(err))
    ;
  });
 
module.exports = router;