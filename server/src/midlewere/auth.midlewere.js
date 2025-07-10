const jwt = require("jsonwebtoken");

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.dev_tasks_hub;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded._id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
