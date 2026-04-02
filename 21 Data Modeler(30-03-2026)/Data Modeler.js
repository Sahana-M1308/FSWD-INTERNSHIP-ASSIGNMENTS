                                                                   Assignment-21(Design a MongoDB schema for a blogging platform)


User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Post.js

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,

    // Reference to user
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", postSchema);

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Comment.js

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: String,

    // Who commented
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // Which post
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema);