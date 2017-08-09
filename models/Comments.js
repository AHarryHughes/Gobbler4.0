const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    post: { type: Schema.Types.ObjectId, ref: 'Posts' },
    text: String
});

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;