const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    genre: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    members: { type: Array },
    albums: { type: Array },
    date: { type: Date, default: Date.now },
    likes: { type: Array },
    comments: { type: Array },
});

module.exports = mongoose.model("Post", postSchema);
