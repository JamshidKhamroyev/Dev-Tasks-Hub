const UserController = require("../controllers/user.controller")
const authMiddleware = require("../midlewere/auth.midlewere")

const router = require("express").Router()
router.use(authMiddleware)

router.get("/all-user", UserController.getAllUsers)
router.get("/one-user/:id", UserController.getOneUser)
router.put("/update/:user", UserController.updateUser)
router.put("/forgot-password/:id", UserController.forgotPassword)

module.exports = router