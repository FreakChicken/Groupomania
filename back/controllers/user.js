const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    //Hash MDP
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                email: req.body.email,
                password: hash,
                imageUrl: req.body.imageUrl,
            });
            User.create(user)
                .then(() =>
                    res
                        .status(201)
                        .json({ message: "Utilisateur enregistré !" })
                )
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(500).json({ message: "cheh" }));
};

exports.login = (req, res, next) => {
    //Récupérer l'utilisateur via son email
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res
                    .status(403)
                    .json({ message: "Utilisateur non trouvé !" });
            }
            //verification du mot de passe
            bcrypt
                .compare(req.body.password, user.password)
                .then((valid) => {
                    //si MDP incorrect
                    if (!valid) {
                        return res
                            .status(403)
                            .json({ message: "Mot de passe incorrect !" });
                    }
                    //si MDP correct, retourner l'ID de l'utilisateur et son token
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.TOKEN_SECRET,
                            {
                                expiresIn: "48h",
                            }
                        ),
                    });
                })
                .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(() => {
            User.deleteOne({ _id: req.params.id })
                .then((user) => {
                    res.status(201).json({ message: "Utilisateur supprimé !" });
                })
                .catch((error) => res.status(400).json({ message: "lambda" }));
        })
        .catch((error) =>
            res
                .status(400)
                .json({ message: "Impossible de supprimer l'utilisateur" })
        );
};
