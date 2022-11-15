const Book = require('../models/Book.model');

module.exports = {
    getAllBooksController: (req, res) => {
        Book.find()
            .then(dbBooks => {
                res.render('books/books-list.hbs', { books: dbBooks })
            })
            .catch(err => console.log(err))
    },
    getCreateBookController: (req, res) => {
        res.render('books/books-create.hbs')
    }
}