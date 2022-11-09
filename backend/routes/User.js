const express = require("express")
const passport = require("passport")
const router = express.Router()
const {register, login} = require("../controllers/User")

router.post("/api/register", register)
router.post("/api/login", passport.authenticate("local",), login)

module.exports = router;