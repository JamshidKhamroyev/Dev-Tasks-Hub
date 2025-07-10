const { model, Schema, default: mongoose } = require("mongoose")

const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true},
    profilePic: { type: String },
    projects: [
        { type: Schema.Types.ObjectId, ref: "Project" }
    ],
    onTimeProject: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    },
    level: {
        type: String,
        enum: ["Beginner", "Explorer", "Builder", "Master", "Legend"],
        default: "Beginner"
    },
    currentCoin: { type: Number, default: 0 },
    allCoin: { type: Number, default: 0 },
    rank: { type: Number }
}, { timestamps: true })

userSchema.pre("save", async function(next) {
    if (this.isNew && this.rank == null) {
      const lastUser = await this.constructor.findOne().sort({ rank: -1 }).select("rank").exec();
      this.rank = lastUser ? lastUser.rank + 1 : 1;
    }
    next();
});

module.exports = mongoose.models.User || model("User", userSchema)