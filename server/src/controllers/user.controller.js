const User = require("../models/user.model")

export const getAllUsers = async (req, res) => {
    try {
        const { limit } = req.query
        const users = await User.find({}).limit(limit).sort({ currentCoin: -1 })
        return res.json({ succes: false, data: users })
    } catch (error) {
        console.log("Error in user controller", error.message);
        res.status(500).json({ succes: false })
    }
}