import { ArrowRight, Star, MapPin, Briefcase, Mic2, Flower2 } from 'lucide-react';
import imgTest from '../assets/images/imgTest.jpg';

export interface AgencyItem {
  id: string | number;
  name: string;
  rating: number;
  location: string;
  projectCount: number;
  category: {
    name: string;
    type: 'entertainment' | 'flower' | 'decor';
  };
  description: string;
  image: string;
  slug?: string;
}

export default function EventAgenciesSection() {
  const agencies: AgencyItem[] = [
    {
      id: 1,
      name: 'CÔNG TY CỔ PHẦN TECHSMART',
      rating: 10.0,
      location: 'Hà Nội',
      projectCount: 0,
      category: {
        name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN',
        type: 'entertainment',
      },
      description:
        'TECHSMART – CHUYÊN CUNG CẤP GIẢI PHÁP LASER & 3D MAPPING CHUYÊN NGHIỆP 🔥 ✨ Cung cấp và cho thuê: ✅ Laser (Lazer) hiệu ứng sân khấu ✅ Hệ thống Laser Show côn...',
      image: imgTest,
      slug: 'techsmart',
    },
    {
      id: 2,
      name: 'Nabigeta Viet Nam',
      rating: 10.0,
      location: 'Hà Nội',
      projectCount: 0,
      category: {
        name: 'HOA & DECOR',
        type: 'flower',
      },
      description:
        'Nabigeta Việt Nam – Thương hiệu uy tín được chứng thực bởi Tạp chí Sở hữu trí tuệ và Sáng tạo Với mục tiêu "TẤT CẢ các showroom, gian hàng triển lãm tại Việt Nam đều được thiết k...',
      image: imgTest,
      slug: 'nabigeta-viet-nam',
    },
  ];

  const renderCategoryIcon = (type: AgencyItem['category']['type']) => {
    switch (type) {
      case 'entertainment':
        return <Mic2 className="w-3 h-3 text-purple-600 shrink-0" />;
      case 'flower':
        return <Flower2 className="w-3 h-3 text-pink-500 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Đơn vị sự kiện chất lượng
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 mt-1">
              Năng lực triển khai đã được kiểm chứng qua hàng nghìn dự án lớn nhỏ.
            </p>
          </div>

          <a
            href="#tat-ca-don-vi-su-kien"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#FF3366] hover:text-[#F22459] transition-colors group self-start sm:self-auto"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Agencies Grid (2 columns on desktop, horizontal cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {agencies.map((agency) => (
            <div
              key={agency.id}
              className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
            >
              {/* Image Container (Left side on sm+, top on mobile) */}
              <div className="w-full sm:w-[42%] h-56 sm:h-auto min-h-[200px] relative overflow-hidden bg-neutral-100 shrink-0">
                <img
                  src={agency.image}
                  alt={agency.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Information Body (Right side) */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Agency Name */}
                  <h3
                    title={agency.name}
                    className="font-bold text-neutral-900 text-base sm:text-lg leading-snug line-clamp-2 min-h-[44px] mb-2 group-hover:text-[#FF3366] transition-colors"
                  >
                    {agency.name}
                  </h3>

                  {/* Meta Row: Rating, Location, Project Count */}
                  <div className="flex items-center flex-wrap gap-x-4 gap-y-1.5 text-xs mb-3">
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{agency.rating.toFixed(1)}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-neutral-600 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                      <span>{agency.location}</span>
                    </div>

                    {/* Project Count */}
                    <div className="flex items-center gap-1 text-neutral-600 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{agency.projectCount} dự án</span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase w-fit">
                      {renderCategoryIcon(agency.category.type)}
                      <span>{agency.category.name}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3 mb-5 min-h-[48px]">
                    {agency.description}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={`#agency-${agency.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FF3366] hover:bg-[#F22459] active:scale-[0.98] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(255,51,102,0.25)] hover:shadow-[0_6px_16px_rgba(255,51,102,0.35)] transition-all cursor-pointer"
                >
                  <span>XEM HỒ SƠ</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
