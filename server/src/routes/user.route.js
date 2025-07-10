const { getAllUsers } = require("../controllers/user.controller")
const { authMiddleware } = require("../midlewere/auth.midlewere")

const router = require("express").Router()
router.use(authMiddleware)

router.get("/get-all-user", getAllUsers)

module.exports = router