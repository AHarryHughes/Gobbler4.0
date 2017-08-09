const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./Posts');
const CommentSchema = require('./Comments');

const UserSchema = new Schema({
    prof_pic: String,
    username: String,
    password: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Posts' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
});


const Users = mongoose.model('Users', UserSchema);

module.exports = Users;