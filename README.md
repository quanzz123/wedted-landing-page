# 💍 WedTech Landing Page - Nền Tảng B2B Ngành Cưới & Sự Kiện

Giao diện Landing Page hiện đại dành cho nền tảng B2B kết nối các Nhà cung cấp (Suppliers) và Đơn vị tổ chức sự kiện (Event Agencies) hàng đầu tại Việt Nam.

Dự án được xây dựng với **React 19**, **Vite**, **Tailwind CSS v4** và kết nối trực tiếp với hệ thống Backend API của WedTech.

---

## 🚀 Công nghệ sử dụng (Tech Stack)

* **Core Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (sử dụng `@tailwindcss/vite` engine tốc độ cao)
* **Icon Library:** [Lucide React](https://lucide.dev/)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **Linter:** [Oxlint](https://oxc.rs/) (Linter thế hệ mới siêu nhanh bằng Rust)

---

## ✨ Tính năng & Các Component chính

* **Header (`Header.jsx`):** Thanh điều hướng cố định (Sticky), thương hiệu WedTech, hiệu ứng gradient nổi bật cho *WedTech Show*, hỗ trợ Mobile Drawer trượt mượt mà.
* **Hero Section (`HeroSection.jsx`):** Tiêu đề truyền cảm hứng, thanh tìm kiếm thông minh, danh sách tag phổ biến và 4 thẻ thống kê nổi (2.500+ nhà cung cấp, 12.000+ sự kiện, 850 đơn vị, 34 tỉnh thành).
* **Nhà cung cấp đã xác thực (`VerifiedSuppliersSection.jsx` & `SupplierCard.jsx`):** Tích hợp gọi API `/companies?type=SUPPLIER`, hiển thị đánh giá sao, địa điểm, danh mục ngành và trạng thái thẩm định.
* **Đơn vị sự kiện (`EventAgenciesSection.jsx` & `AgencyCard.jsx`):** Trình bày các đơn vị tổ chức sự kiện chuyên nghiệp với bố cục thẻ ngang.
* **Dự án nổi bật (`FeaturedProjectsSection.jsx` & `FeatureProjectCard.jsx`):** Giới thiệu các công trình/dự án lớn với đầy đủ thông tin: thể loại sự kiện, ngày tổ chức, địa điểm và quy mô khách mời.
* **Sản phẩm & Dịch vụ tiêu biểu (`FeaturedProductsSection.jsx` & `FeatureProductCard.jsx`):** Tích hợp API `/products`, xử lý hiển thị giá tham khảo linh hoạt (*Liên hệ* hoặc định dạng tiền tệ VNĐ chuẩn), số lượng đặt tối thiểu (MOQ).
* **Danh mục ngành (`CategoryGridSection.jsx` & `CategoryCard.jsx`):** Hiển thị lưới danh mục ngành hàng linh hoạt từ API `/categories` với màu nền pastel (`bgColor`) và icon SVG đặc thù.
* **Banner Kêu gọi hành động (`CtaBanner.jsx`):** Card gradient rực rỡ (Hồng sen - Tím - Xanh cyan) với 2 nút CTA kép (Primary trắng tinh & Secondary kính mờ).
* **Đánh giá từ khách hàng (`ReviewsSection.jsx`):** Trạng thái Empty State trang nhã khi chưa có đánh giá và hỗ trợ mở rộng danh sách đánh giá theo props.
* **Footer (`Footer.jsx`):** Logo biểu trưng WedTech, thông điệp sứ mệnh và 3 cột liên kết điều hướng thông tin (Khám phá, Dành cho đối tác, Hỗ trợ).

---

## 📁 Cấu trúc thư mục (Project Structure)

```text
wedtech-landing-page/
├── public/                     # Tệp tĩnh công khai (favicon, v.v.)
├── src/
│   ├── assets/
│   │   └── images/             # Logo, icon SVG, ảnh minh họa
│   ├── components/
│   │   ├── Card/               # Các component thẻ tái sử dụng
│   │   │   ├── AgencyCard.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── FeatureProductCard.jsx
│   │   │   └── FeatureProjectCard.jsx
│   │   ├── CategoryGridSection.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── EventAgenciesSection.jsx
│   │   ├── FeaturedProductsSection.jsx
│   │   ├── FeaturedProjectsSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── SupplierCard.jsx
│   │   └── VerifiedSuppliersSection.jsx
│   ├── pages/
│   │   └── HomePage.jsx        # Trang chủ lắp ráp các section
│   ├── services/
│   │   └── api.js              # Cấu hình Axios & các hàm gọi API backend
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Import Tailwind CSS
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Cài đặt & Chạy ứng dụng

### 1. Cài đặt các thư viện phụ thuộc:
```bash
npm install
```

### 2. Khởi chạy máy chủ phát triển (Development):
```bash
npm run dev
```
> **Mẹo kiểm tra trên điện thoại thật:** Chạy `npm run dev -- --host` và truy cập qua địa chỉ IP mạng nội bộ hiển thị trên terminal.

### 3. Kiểm tra code (Linting):
```bash
npm run lint
```

### 4. Đóng gói cho môi trường Production (Build):
```bash
npm run build
```
Thư mục xuất bản tĩnh **`dist/`** sẽ được tạo sẵn sàng để triển khai.

---

## 🌐 Hướng dẫn Triển khai (Deployment)

* **Vercel (Khuyên dùng):** Kết nối repository GitHub với Vercel. Framework sẽ tự động nhận diện `Vite`, thiết lập build command `vite build` và thư mục đầu ra `dist`.
* **Netlify:** Kéo thả trực tiếp thư mục `dist` vào [app.netlify.com/drop](https://app.netlify.com/drop) hoặc liên kết repository Git.
* **VPS / Hosting riêng (Nginx / Apache / cPanel):** Tải toàn bộ nội dung trong thư mục `dist` lên thư mục gốc của trang web (`public_html` hoặc `/var/www/html`).

