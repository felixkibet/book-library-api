const GET = require('../models/genre');

// Display list of all Genre.
module.exports.genre_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre list');
}

// Display detail page for a specific Genre.
module.exports.genre_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
}

// Display Genre create form on GET.
module.exports.genre_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create GET');
}

// Handle Genre create on POST.
module.exports.genre_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create POST');
}

// Display Genre delete form on GET.
module.exports.genre_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete GET');
}

// Handle Genre delete on POST.
module.exports.genre_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete POST');
}

// Display Genre update form on GET.
module.exports.genre_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update GET');
}

// Handle Genre update on POST.
module.exports.genre_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update POST');
}
