let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commentSchema = new Schema({
  comment: String,
  author: String,
  bookId: { type: Schema.Types.ObjectId, ref: "Book" }
}, { timestamps: true });

let Comment = mongoose.model(Comment, commentSchema);

module.exports = Comment;