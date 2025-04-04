# 🌐 Project-Social

Project-Social เป็นโปรเจกต์โซเชียลมีเดียขนาดเล็กที่พัฒนาด้วย Stack สมัยใหม่ มีระบบยืนยันตัวตนผ่าน Clerk สามารถสร้างโพสต์ ลบโพสต์ กด Like ดูข้อมูลผู้ใช้ รวมถึงระบบลงทะเบียนและล็อกอินอย่างปลอดภัย ✨

## 🚀 Features

- ✅ ระบบสมัครสมาชิกและล็อกอิน (Auth) ด้วย [Clerk](https://clerk.dev)
- 📝 สร้างโพสต์ / ลบโพสต์
- ❤️ กด Like โพสต์ และแสดงจำนวนคนที่กด
- 👤 ดูข้อมูลผู้ใช้งานแต่ละคน
- 🔒 จัดการ session และสิทธิ์ผู้ใช้
- 📱 รองรับ Responsive Design ทั้ง Mobile / Desktop

## 🧰 Tech Stack

### Frontend
- ⚛️ **React**
- 🎨 **Tailwind CSS**
- 🧩 **shadcn/ui** (Component Library)
- 🔐 **Clerk** (Authentication)

### Backend
- 🖥️ **Node.js**
- 🚂 **Express.js**
- 💾 **MongoDB** (ฐานข้อมูลหลัก)
- 🔄 **Mongoose** (ODM สำหรับเชื่อม MongoDB)

## 📸 UI ตัวอย่าง

> สามารถเพิ่มภาพหน้าจอ UI ที่แสดงการใช้งานจริง เช่น หน้าโพสต์, หน้าโปรไฟล์, หน้า Login เป็นต้น

## ⚙️ การติดตั้งและรันโปรเจกต์

### 🖥️ ฝั่ง Backend

```bash
cd Server
npm install
npm run dev
