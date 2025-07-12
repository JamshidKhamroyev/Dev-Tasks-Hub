const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    technologies: {
        type: [String],
        enum: ["html", "css", "tailwind css", "javascript", "react", "nodejs", "bootstrap", "next js", "typescript"],
        default: []
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: { type: String, default: "pending",  enum: ["pending", "in-progress", "completed", "cancelled"]},
    gitHubUrl: { type: String, trim: true, required: true },
    demoLink: { type: String, trim: true, required: true },
    ball: { type: Number, default: 0 },
    checkedAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
