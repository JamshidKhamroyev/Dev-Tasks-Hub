const express = require("express")
const cors = require("cors")
const { rateLimit } = require('express-rate-limit')
require("dotenv").config()
const helmet = require("helmet")
const cookieParser = require("cookie-parser")



const app = express()
// Limiter
const limiter = rateLimit({
	windowMs: 3 * 60 * 1000,
	limit: 100, 
	standardHeaders: 'draft-8', 
	legacyHeaders: false, 
})
app.use(helmet())
app.use(limiter)
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Routes
const userRoutes = require("./src/routes/user.route")

app.use("/api/user", userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on localhost:${process.env.PORT}`)
})