const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./configs/database");
const { readdirSync } = require("fs");
const userRoutes = require("./routes/user"); // ✅ ตั้งชื่อตัวแปรให้ชัดเจน
const hdlError = require("./middleweres/hdlError");
require("dotenv/config");
const { clerkMiddleware } = require("@clerk/express");


//middlewere
app.use(express.json({ limit: "10mb" }));
app.use(clerkMiddleware())
app.use(cors());
app.use(morgan("dev"));
app.use(hdlError); // 📌 ให้ Express สามารถอ่านไฟล์ในโฟลเดอร์ `uploads/`

//routes
readdirSync("./routes").map((e) => {
  return app.use("/api", require(`./routes/${e}`));
});
app.get("/", (req, res) => {
  res.send("Social Server");
});
connectDB();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server Is Running ${PORT}`));
