import logoWedTed from '../assets/images/logoWedTed.webp';

export default function Footer() {
  const footerSections = [
    {
      title: 'KHÁM PHÁ',
      links: [
        { label: 'Nhà cung cấp', href: '#nha-cung-cap' },
        { label: 'Đơn vị sự kiện', href: '#don-vi-su-kien' },
        { label: 'Dự án', href: '#du-an' },
        { label: 'Sản phẩm', href: '#san-pham' },
      ],
    },
    {
      title: 'DÀNH CHO ĐỐI TÁC',
      links: [
        { label: 'Cổng nhà cung cấp', href: '#cong-nha-cung-cap' },
        { label: 'Giải pháp doanh nghiệp', href: '#giai-phap-doanh-nghiep' },
        { label: 'Wedtech Agency', href: '#wedtech-agency' },
        { label: 'Chính sách hợp tác', href: '#chinh-sach-hop-tac' },
      ],
    },
    {
      title: 'HỖ TRỢ',
      links: [
        { label: 'Về chúng tôi', href: '#ve-chung-toi' },
        { label: 'Chính sách bảo mật', href: '#chinh-sach-bao-mat' },
        { label: 'Điều khoản dịch vụ', href: '#dieu-khoan-dich-vu' },
        { label: 'Liên hệ hỗ trợ', href: '#lien-he-ho-tro' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-neutral-100/80 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
      <div className="max-w-[1497px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          {/* Brand & Mission Column */}
          <div className="max-w-sm">
            <a href="/" className="inline-block focus:outline-hidden" aria-label="WedTech Home">
              <img
                src={logoWedTed}
                alt="WedTech Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
            </a>
            <p className="mt-4 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Nền tảng công nghệ hàng đầu kết nối nhà cung cấp dịch vụ cưới hỏi và khách hàng chuyên nghiệp.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs sm:text-sm font-bold text-[#EB1B68] tracking-wider uppercase mb-4 sm:mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-neutral-600 hover:text-[#EB1B68] transition-colors duration-200 block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
