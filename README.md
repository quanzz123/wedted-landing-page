# 💍 WedTech Landing Page

Nền tảng B2B kết nối Nhà cung cấp dịch vụ cưới hỏi & Đơn vị tổ chức sự kiện tại Việt Nam.

🔗 **Live Demo:** [https://wedted-landing-page.vercel.app/](https://wedted-landing-page.vercel.app/)

---

## 🚀 Công nghệ sử dụng (Tech Stack)

* **Framework:** React 19 + Vite
* **Styling:** Tailwind CSS v4
* **HTTP Client:** Axios
* **Icons:** Lucide React

---

## 📡 Danh sách API đã tích hợp

**Base URL:** `https://api.wedtech.vn/api`

| Endpoint | Method | Mô tả & Tham số chính |
| :--- | :---: | :--- |
| `/companies` | `GET` | Danh sách Nhà cung cấp (`type=SUPPLIER`, `sortBy=rating`) |
| `/companies` | `GET` | Danh sách Đơn vị sự kiện (`type=EVENT_COMPANY`, `limit=2`) |
| `/projects` | `GET` | Dự án nổi bật (`isFeatured=true`, `distinctCompany=true`) |
| `/products` | `GET` | Sản phẩm & dịch vụ tiêu biểu (`isFeatured=true`, `sortBy=rating`) |
| `/categories` | `GET` | Danh mục ngành cưới & sự kiện (Icon SVG, mã màu động) |

---

## 🛠️ Hướng dẫn chạy Local

```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển (Development)
npm run dev

# 3. Đóng gói bản Production (Build)
npm run build
```


