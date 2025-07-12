const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.DevTaskHub;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded._id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token", err });
  }
};

module.exports = authMiddleware;
