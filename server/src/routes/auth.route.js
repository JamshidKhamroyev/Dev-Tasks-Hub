const AuthController = require("../controllers/auth.controller")
const authMiddleware = require("../midlewere/auth.midlewere")

const router = require("express").Router()

router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
router.post("/logout", authMiddleware, AuthController.logout)
router.get("/me", authMiddleware, AuthController.Me)

module.exports = router