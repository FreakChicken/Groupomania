const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    members: { type: Array },
    albums: { type: Array },
    date: { type: Date, default: Date.now },
    likes: { type: Array },
    comments: { type: Array },
});

module.exports = mongoose.model("Post", postSchema);
