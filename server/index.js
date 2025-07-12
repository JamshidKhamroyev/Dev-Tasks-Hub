const express = require("express")
const cors = require("cors")
const { rateLimit } = require('express-rate-limit')
require("dotenv").config()
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const { default: mongoose } = require("mongoose")

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
const authRoutes = require("./src/routes/auth.route")

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

const startApp = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL, { dbName: "DTH" }).then(() => console.log("Db connected succesfull")).catch((e) => console.log("dsf",e))
		app.listen(process.env.PORT, () => {
			console.log(`Server running on localhost:${process.env.PORT}`)
		})
	} catch (error) {
		console.log("Error in index.js", error.message);
	}
}

startApp()