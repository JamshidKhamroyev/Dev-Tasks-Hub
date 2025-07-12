const User = require("../models/user.model")
const nodemailer = require("nodemailer")

let codes = {}
const verificationCode = Math.floor(100000 + Math.random() * 900000);
const TIME = 5 * 60 * 1000

class UserController {
    async getAllUsers(req, res) {
        try {
            const { limit } = req.query
            const users = await User.find({}).select("-password").limit(limit).sort({ currentCoin: -1 })
            return res.json({ succes: false, data: users })
        } catch (error) {
            console.log("Error in user controller 1", error.message);
            res.status(500).json({ succes: false })
        }
    }

    async getOneUser(req, res){
        try {
            const { id } = req.params

            const user = await User.findById(id).select("-password")
            if(!user){
                return res.status(400).json({ succes: false, message: "User not found"})
            }

            return res.json({ succes: true, data: user })
        } catch (error) {
            console.log("Error in user controller 2", error.message);
            res.status(500).json({ succes: false })
        }
    }

    async updateUser(req, res){
        try {
            const id = req.params.user
            const data = req.body
            if(data.currentCoin || data.allCoin || data.password || data.email || data.projects || data.level || data.rank || data.createdAt){
                return res.status(401).json({ succes: false, message: "It isn't change!"})
            }

            if(!data){
                return res.status(400).json({ succes: false, message: "Data not found"})
            }

            if(req.user !== id){
                return res.status(401).json({ succes: false, message: "Unauthorizated"})
            }

            const user = await User.findByIdAndUpdate(id, data, { new: true }).select("-password")
            if(!user){
                return res.status(400).json({ succes: false, message: "User not found"})
            }

            return res.status(400).json({ succes: true, message: "User updated succesfully", data: user})
        } catch (error) {
            console.log("Error in user controller 3", error.message);
            res.status(500).json({ succes: false })   
        }
    }

    async forgotPassword(req, res){
        try {
            const { _id } = req.user
            const user = await User.findById(_id)
            if(!user){
                return res.status(400).json({ succes: false, message: "User not found"})
            }

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_GMAIL,
                    pass: process.env.SMTP_APP_PASSWORD,
                },
            });
        
            const mailOptions = {
                from: 'QuizArena',
                to: "muborakasimzonova@gmail.com",
                subject: 'Admin tizimga kirishni tasdiqlang!',
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                        <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px;">
                            <h2 style="color: #333;">Assalomu alaykum, ${user.username}!</h2>
                            <p style="font-size: 16px; color: #555;">
                                Siz <strong>QuizArena</strong> tizimiga kirish uchun so‘rov yubordingiz. Kirishni tasdiqlash uchun quyidagi maxfiy koddan foydalaning:
                            </p>
                            
                            <div style="text-align: center; margin: 30px 20px;">
                                <span style="display: inline-block; font-size: 30px; letter-spacing: 10px; color: #4CAF50; font-weight: bold;">
                                    ${verificationCode}
                                </span>
                            </div>
        
                            <p style="font-size: 16px; color: #555; text-align: center;">
                                Iltimos, ushbu maxfiy kodni hech kimga bermang.
                            </p>
        
                            <hr style="margin: 30px 0;">
        
                            <p style="font-size: 14px; color: #999;">
                                Agar bu siz bo‘lmasangiz, iltimos, ushbu xatni e'tiborsiz qoldiring.
                            </p>
                        </div>
                    </div>
                `,
            };
            codes[user.email] = { time: Date.now(), code: verificationCode };
            console.log(codes[user.email]);
            transporter.sendMail(mailOptions);

            return res.json({
                ok: true,
                message: `Hurmatli ${user.username}, sizga tasdiqlash kodi yuborildi. Iltimos, emailingizni tekshiring.`,
                data: user._id,
            });
        } catch (error) {
            console.log("Error in user controller 3", error.message);
            res.status(500).json({ succes: false })     
        }
    }

    
}

module.exports = new UserController()