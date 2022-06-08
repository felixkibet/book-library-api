const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual book url
BookSchema.virtual("url").get(() => {
    return "/catalog/book" + this._id;
});

BookSchema.virtual("due_date_formatted").get(() => {
    return DateTime(this.due_date).toLocaleString(DateTime.MED);
})

module.exports = mongoose.model('Book', BookSchema);