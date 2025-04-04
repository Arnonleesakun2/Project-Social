const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUNDINARY_CLOUD_NAME,
  api_key: process.env.CLOUNDINARY_API_KEY,
  api_secret: process.env.CLOUNDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});
exports.uploadimage = async (req, res, next) => {
  try {
    const { image } = req.body;
    const result = await cloudinary.uploader.upload(image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "social",
    });
    res.json({ message: "Upload File Successfully", result: result });
  } catch (err) {
    next(err.message);
  }
};
