import hoaDecorIcon from '../assets/images/hoa-decor.svg';

export interface CategoryGridItem {
  id: string | number;
  name: string;
  bg: string;
  slug: string;
}

export default function CategoryGridSection() {
  const categories: CategoryGridItem[] = [
    {
      id: 1,
      name: 'Hoa & Decor',
      bg: 'bg-[#FDF2F8]', // hồng phấn
      slug: 'hoa-decor',
    },
    {
      id: 2,
      name: 'Vật tư & Vật liệu',
      bg: 'bg-[#F0F9FF]', // xanh dương nhạt
      slug: 'vat-tu-vat-lieu',
    },
    {
      id: 3,
      name: 'Nhà rạp & Kết cấu',
      bg: 'bg-[#FFFBEB]', // vàng kem
      slug: 'nha-rap-ket-cau',
    },
    {
      id: 4,
      name: 'Nội thất sự kiện',
      bg: 'bg-[#ECFDF5]', // xanh bạc hà
      slug: 'noi-that-su-kien',
    },
    {
      id: 5,
      name: 'LED & Trình chiếu',
      bg: 'bg-[#EEF2FF]', // xanh tím nhạt
      slug: 'led-trinh-chieu',
    },
    {
      id: 6,
      name: 'Âm thanh',
      bg: 'bg-[#FAF5FF]', // tím nhạt
      slug: 'am-thanh',
    },
    {
      id: 7,
      name: 'Ánh sáng & Hiệu ứng',
      bg: 'bg-[#FEFCE8]', // vàng nhạt
      slug: 'anh-sang-hieu-ung',
    },
    {
      id: 8,
      name: 'In ấn & Quảng cáo',
      bg: 'bg-[#FFF1F2]', // hồng đỏ nhạt
      slug: 'in-an-quang-cao',
    },
    {
      id: 9,
      name: 'Media & Studio',
      bg: 'bg-[#F1F5F9]', // xám sáng
      slug: 'media-studio',
    },
    {
      id: 10,
      name: 'Giải trí & Nhân sự biểu diễn',
      bg: 'bg-[#F3E8FF]', // tím lavender
      slug: 'giai-tri-nhan-su-bieu-dien',
    },
    {
      id: 11,
      name: 'Trang phục & Làm đẹp',
      bg: 'bg-[#FCE7F3]', // hồng pastel
      slug: 'trang-phuc-lam-dep',
    },
    {
      id: 12,
      name: 'Tiệc & Địa điểm',
      bg: 'bg-[#FFF7ED]', // cam đào nhạt
      slug: 'tiec-dia-diem',
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-3">
            Danh mục ngành
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            Mọi mắt xích của ngành cưới và sự kiện đều được kết nối tại <br className="hidden sm:inline" />
            một nền tảng.
          </p>
        </div>

        {/* 12 Categories Grid (4 cols on desktop, 3 on tablet, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((item) => (
            <a
              key={item.id}
              href={`#category-${item.slug}`}
              className="group bg-white rounded-2xl border border-neutral-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-neutral-200 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              {/* Soft pastel squircle icon container */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 ${item.bg}`}
              >
                <img
                  src={hoaDecorIcon}
                  alt={item.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              </div>

              {/* Category Name */}
              <span className="font-bold text-neutral-800 text-sm sm:text-base group-hover:text-[#FF3366] transition-colors leading-snug">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
