const { clerkClient } = require("@clerk/express");

exports.authCheck = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    if (!userId) {
      return res.status(491).json({ message: "Unauthorized!!!" });
    }
    const user = await clerkClient.users.getUser(userId);
    req.user = user;    
    next();
  } catch (err) {
    next(err);
  }
};
