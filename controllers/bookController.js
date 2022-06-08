const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookInstance');
const async = require('async');

module.exports.index = (req, res) => {
    async.parallel({
        book_count: (callback) => {
            Book.countDocuments({}, callback);
        },
        bookInstance_count: (callback) => {
            BookInstance.countDocuments({}, callback);
        },
        author_count: (callback) => {
            Author.countDocuments({}, callback);
        },
        genre_count: (callback) => {
            Genre.countDocuments({}, callback);
        }
    }, (err, results) => {
        res.render('index', {title: 'Local Library Home',  error: err, data: results})
    });
}

// Display list of all books.
module.exports.book_list = (req, res) => {
    Book.find({}, 'title author')
    .sort({title: 1})
    .populate('author')
    .exec((err, list_books) => {
        if(err) {return next(err);}
        res.render('book_list', { title: 'Book List', book_list: list_books});
    });
}

// Display detail page for a specific book.
module.exports.book_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
}

// Display book create form on GET.
module.exports.book_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create GET');
}

// Handle book create on POST.
module.exports.book_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create POST');
}

// Display book delete form on GET.
module.exports.book_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete GET');
}

// Handle book delete on POST.
module.exports.book_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete POST');
}

// Display book update form on GET.
module.exports.book_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update GET');
}

// Handle book update on POST.
module.exports.book_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update POST');
}