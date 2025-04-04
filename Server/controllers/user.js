const User = require("../models/User");

exports.myUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await User.find({
      clerkId: id,
    });
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ result: result });
  } catch (err) {
    next(err.message);
  }
};

exports.userDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findOne({ _id: id });
    if (!result) {
      res.json({ message: "User Not Found" });
    }
    res.json({ result: result });
  } catch (err) {
    next(err.message);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, lastname, image } = req.body;
    const clerkId = req.user.id;
    const checkUser = await User.findOne({ clerkId });
    if (checkUser) {
      // ✏️ ถ้ามี clerkId อยู่แล้ว → อัปเดตข้อมูล
      checkUser.name = name;
      checkUser.lastname = lastname;
      checkUser.imageId = image.public_id;
      checkUser.image = image.secure_url;
      await checkUser.save();
      return res.json({ msg: "Update User Successfully", result: checkUser });
    }
    const result = new User({
      name: name,
      lastname: lastname,
      clerkId: clerkId,
      imageId: image.public_id,
      image: image.secure_url,
    });
    await result.save();
    res.json({ msg: "Create User Successfully", result: result });
  } catch (err) {
    next(err.message);
  }
};
