const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const { generateUsername } = require("unique-username-generator");
const jwt = require("jsonwebtoken");
const isStrongPassword = require("../midlewere/password.midlewere");

class AuthController {
    async register(req, res) {
        try {
            const data = await User.validate(req.body);

            const usernameExist = await User.findOne({ username: data.username });
            if (!usernameExist) {
                data.username = generateUsername()
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                return res.status(400).json({ succes: false, message: "Invalid email format" });
            }

            const emailExist = await User.findOne({ email: data.email });
            if (emailExist) {
                return res.status(400).json({ message: "Bu email orqali allaqachon ro'yxatdan o'tilgan!" });
            }

            const idx = Math.floor(Math.random() * 100) + 1
            const randomAvatar = `https://avatar.iran.liara.run/public/${idx}`
            data.profilePic = randomAvatar

            const issues = isStrongPassword(data.password)
            if(issues.length > 0){
                return res.status(400).json({ success: false, details: issues });
            }

            data.password = await bcrypt.hash(data.password, 10);
            const newUser = new User(data);

            await newUser.save();
            res.status(201).json({ success: true, data: newUser });
        } catch (error) {
            console.error("Error in register controller", error.message);
            res.status(500).json({ success: false, message: "Server xatosi" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "Email yoki parol noto'g'ri" });
            }

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.status(400).json({ message: "Email yoki parol noto'g'ri" });
            }

            const token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "7d" }
            );

            res.cookie("DevTaskHub", token, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production"
            });

            return res.status(200).json({ success: true, message: "Tizimga muvaffaqiyatli kirildi" });
        } catch (error) {
            console.error("Error in login controller", error.message);
            res.status(500).json({ success: false, message: "Server xatosi" });
        }
    }

    async logout(req, res) {
        try {
            res.clearCookie("DevTaskHub", {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production"
            });
            return res.status(200).json({ success: true, message: "Tizimdan muvaffaqiyatli chiqildi" });
        } catch (error) {
            console.error("Error in logout controller", error.message);
            res.status(500).json({ success: false, message: "Server xatosi" });
        }
    }
    
    async Me(req, res) {
        try {
            const user = await User.findById(req.user).select("-password");
            if (!user) {
                return res.status(404).json({ success: false, message: "Foydalanuvchi topilmadi" });
            }
            return res.status(200).json({ success: true, data: user });
        } catch (error) {
            console.error("Error in Me controller", error.message);
            res.status(500).json({ success: false, message: "Server xatosi" });
        }
    }
}

module.exports = new AuthController()