const userCtrl = require("../controllers/userCtrl");

const router = require("express").Router();

router.post("/login", userCtrl.login);
router.post("/signup", userCtrl.registration);

module.exports = router;
