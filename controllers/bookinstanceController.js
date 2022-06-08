const BookInstance = require('../models/bookInstance');

// Display list of all BookInstances.
module.exports.bookinstance_list = (req, res) => {
    BookInstance.find({})
    .populate('book')
    .exec((err, results) => {
        if(err) {return next(err);}
        res.render('bookinstance_list', {title: 'Book instalce list', data: results, error: err});
    });
}

// Display detail page for a specific BookInstance.
module.exports.bookinstance_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
}

// Display BookInstance create form on GET.
module.exports.bookinstance_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
}

// Handle BookInstance create on POST.
module.exports.bookinstance_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
}

// Display BookInstance delete form on GET.
module.exports.bookinstance_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
}

// Handle BookInstance delete on POST.
module.exports.bookinstance_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
}

// Display BookInstance update form on GET.
module.exports.bookinstance_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
}

// Handle bookinstance update on POST.
module.exports.bookinstance_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
}
