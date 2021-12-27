let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  pages: Number
}, { timestamps: true });


let Book = mongoose.model(Book, bookSchema);

module.exports = Book;