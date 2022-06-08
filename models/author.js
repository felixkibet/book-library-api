const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, maxLength: 100 },
    last_name: { type: String, maxLength: 100 },
    date_of_birth: Date,
    date_of_death: Date,
});

// Virtual for authors full name
AuthorSchema.virtual("name").get(() => {
    var fullname = "";
    if (this.first_name && this.last_name) {
        fullname = this.first_name + ", " + this.last_name;
    }
    if (!this.first_name || !this.last_name) {
        fullname = "";
    }
    return fullname;
});

// Virtual for authors lifespan
AuthorSchema.virtual("lifespan").get(() => {
    var lifetime_string = "";
    if (this.date_of_birth) {
        lifetime_string = this.date_of_birth.getYear().toString();
    }
    var lifetime_string = " - ";
    if (this.date_of_death) {
        lifetime_string = this.date_of_death.getYear().toString();
    }
    return lifetime_string;
});

// Virtual for authors url
AuthorSchema.virtual("url").get(() => {
    return "/catalog/author/" + this._id;
});

module.exports = mongoose.model("Author", AuthorSchema);
