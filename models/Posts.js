const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    pic: String,
    caption: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
    gobbles: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
});

const Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;