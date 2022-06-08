const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, required: true},
    imprint: {type: String, required: true},
    status: {type: String, enum:['Available', 'Loaned', 'Reserved'], default: 'Available'},
    due_date: {type: Date, default: Date.now}
});

// Virtual for bookInstance url
BookInstanceSchema
.virtual('url')
.get(() => {
    return '/catalog/bookinstance/' + this._id;
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);