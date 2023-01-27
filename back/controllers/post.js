const Post = require("../models/Post");

exports.createPost = (req, res, next) => {
    // const postObject = JSON.parse(req.body.post);
    const post = new Post({
        userId: req.body.userId,
        name: req.body.name,
        genre: req.body.genre,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        members: req.body.members,
        albums: req.body.albums,
        date: req.body.date,
        likes: req.body.likes,
        comments: req.body.comments,
    });
    Post.create(post)
        .then(() => {
            res.status(201).json({ message: "Post enregistré" });
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((error) => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((error) => res.status(400).json({ error }));
};

exports.updatePost = (req, res, next) => {
    Post.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Post modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(() => {
            Post.deleteOne({ _id: req.params.id })
                .then((post) => {
                    res.status(201).json({ message: "Post supprimé !" });
                })
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) =>
            res.status(400).json({ message: "Impossible de supprimer le post" })
        );
};
