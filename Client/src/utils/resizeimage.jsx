import Resizer from "react-image-file-resizer";

export const resizeImage = (file) => {
  return new Promise((resolve, reject) => {
    const fileType = file.type.split("/")[1].toLowerCase();
    const validTypes = ["jpeg", "jpg", "png", "gif", "bmp"];

    if (!validTypes.includes(fileType)) {
      return reject(new Error("Invalid file type. Supported types: JPEG, JPG, PNG, GIF, BMP"));
    }

    Resizer.imageFileResizer(
      file,
      720,  // กำหนดความกว้าง
      720,  // กำหนดความสูง
      fileType, // ตั้งค่ารูปแบบไฟล์ที่ต้องการ (ตามประเภทของไฟล์)
      100,  // ความคมชัด
      0,    // ค่าเบลอ (0 = ไม่มี)
      (data) => resolve(data),  // ส่งคืนผลลัพธ์
      "base64", // ส่งข้อมูลเป็น base64
      (error) => reject(error)  // ส่งคืนข้อผิดพลาด
    );
  });
};
