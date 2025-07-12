const User = require("../models/user.model")
const nodemailer = require("nodemailer")
const bcrypt = require("bcrypt")
const isStrongPassword = require("../midlewere/password.midlewere")

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
            const user = await User.findById(req.user)
            if(!user){
                return res.status(400).json({ succes: false, message: "User not found"})
            }

            if(user._id != req.params.id){
                return res.status(401).json({ succes: false, message: "Unauthorizated"})
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
                from: 'Dev Tasks Hub',
                to: user.email,
                subject: "Parolni o'zgarrtirishni tasdiqlang!",
                html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                  <h2 style="color: #333333; text-align: center;">Assalomu alaykum, ${user.fullName || user.username}!</h2>
              
                  <p style="font-size: 16px; color: #555555;">
                    Siz <strong>DevTasksHub</strong> platformasiga kirish yoki parolni tiklash uchun so‘rov yubordingiz. Davom etish uchun quyidagi <strong>tasdiqlash kodini</strong> kiriting:
                  </p>
              
                  <div style="text-align: center; margin: 30px 0;">
                    <span style="display: inline-block; font-size: 32px; letter-spacing: 8px; color: #4CAF50; font-weight: bold; background: #f0f0f0; padding: 10px 20px; border-radius: 5px;">
                      ${verificationCode}
                    </span>
                  </div>
              
                  <p style="font-size: 16px; color: #555555; text-align: center;">
                    Iltimos, ushbu kodni hech kimga oshkor qilmang. Kodning amal qilish muddati 5 daqiqa.
                  </p>
              
                  <hr style="margin: 30px 0;">
              
                  <p style="font-size: 14px; color: #999999;">
                    Ushbu kod yordamida siz <strong>DevTasksHub</strong> platformasiga kirishni tasdiqlaysiz. Kodni quyidagi havola orqali kirib ishlatishingiz mumkin:
                  </p>
              
                  <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.FRONTEND_URL}" style="display: inline-block; text-decoration: none; background-color: #4CAF50; color: #fff; padding: 12px 20px; border-radius: 5px; font-size: 16px;">
                      DevTasksHub’ga o‘tish
                    </a>
                  </div>
              
                  <p style="font-size: 14px; color: #999999; text-align: center;">
                    Agar ushbu so‘rovni siz yubormagan bo‘lsangiz, ushbu xatni e'tiborsiz qoldiring.
                  </p>
                </div>
              </div>              
                `,
            };
            codes[user._id] = { time: Date.now(), code: verificationCode };
            console.log(codes[user._id])
            transporter.sendMail(mailOptions);

            return res.json({
                ok: true,
                message: `Hurmatli ${user.fullName}, sizga tasdiqlash kodi yuborildi. Iltimos, emailingizni tekshiring.`,
                data: user._id,
            });
        } catch (error) {
            console.log("Error in user controller 3", error.message);
            res.status(500).json({ succes: false })     
        }
    }

    async resetPassword(req, res) {
        try {
            const { userId, code, newPassword } = req.body;

            const issues = isStrongPassword(newPassword)
            if(issues.length > 0){
                return res.status(400).json({ succes: false, details: issues })
            }

            const saved = codes[userId];
            if (!saved || saved.code !== code) {
                return res.status(400).json({ success: false, message: "Noto‘g‘ri yoki eskirgan kod" });
            }
        
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ success: false, message: "Foydalanuvchi topilmadi" });
            }
        
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
            await user.save();
        
            delete codes[userId];
            res.json({ success: true, message: "Parol muvaffaqiyatli yangilandi" });
        } catch (error) {
            console.log("Error in reset password controller", error.message);
            res.status(500).json({ succes: false }) 
        }
    }

    async getUserStats(req, res) {
        try {
            const days = parseInt(req.query.days) || 30;
        
            const sinceDate = new Date();
            sinceDate.setDate(sinceDate.getDate() - days);
        
            const user = await User.findById(req.user)
                .populate({
                    path: "projects",
                    match: { createdAt: { $gte: sinceDate } },
                    select: "_id title description createdAt",
                    options: { sort: { createdAt: -1 } }
                });
        
            if (!user) {
                return res.status(404).json({ success: false, message: "Foydalanuvchi topilmadi" });
            }
        
            return res.json({
                success: true,
                data: user.projects
            });
        } catch (error) {
            console.log("Error in get User Stats controller", error.message);
            res.status(500).json({ succes: false })
        }
    }
    
}

module.exports = new UserController()