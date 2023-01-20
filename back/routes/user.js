const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

//Création nouvel utilisateur
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/getAllUsers", userCtrl.getAllUsers);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
