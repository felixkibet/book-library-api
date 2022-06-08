const Author = ('../models/author');

// Display list of all Authors.
module.exports.author_list = (req, res) => {
    res.send("NOT IMPLEMENTED: All authors");
}

// Display detail page for a specific Author.
module.exports.author_detail = (req, res) => {
    res.send("NOT IMPLEMENTED: Author's details" + req.params.id);
}

// Display Author create form on GET.
module.exports.author_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Author create GET");
}

// Handle Author create on POST.
module.exports.author_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Author create POST");
}

// Display Author delete form on GET.
module.exports.author_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
}

// Handle Author delete on POST.
module.exports.author_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
}

// Display Author update form on GET.
module.exports.author_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Author update GET");
}

// Handle Author update on POST.
module.exports.author_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Author update POST");
}