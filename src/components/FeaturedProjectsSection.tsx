import { ArrowRight, Calendar, MapPin, Users, User, Mic2, Truck, Flower2, UtensilsCrossed } from 'lucide-react';
import imgTest from '../assets/images/imgTest.jpg';

export interface ProjectCategory {
  name: string;
  type: 'entertainment' | 'flower' | 'logistics' | 'venue';
}

export interface FeaturedProject {
  id: string | number;
  badge: string;
  title: string;
  companyName: string;
  date: string;
  location: string;
  guests: string;
  categories: ProjectCategory[];
  description: string;
  image: string;
}

export default function FeaturedProjectsSection() {
  const projects: FeaturedProject[] = [
    {
      id: 1,
      badge: 'VĂN HÓA - GIẢI TRÍ',
      title: 'Công trình Hang Ngọc Rồng',
      companyName: 'CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI ...',
      date: '09/12/2025',
      location: 'Quảng Ninh',
      guests: '2500 khách mời',
      categories: [
        { name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN', type: 'entertainment' },
        { name: 'HẬU CẦN & VẬN HÀNH', type: 'logistics' },
      ],
      description:
        'HANG NGỌC RỒNG – QUẢNG NINH Đồng bộ âm thanh E3 Audio Tọa lạc trong quần...',
      image: imgTest,
    },
    {
      id: 2,
      badge: 'VĂN HÓA - GIẢI TRÍ',
      title: 'VinhVerse Concert 2026',
      companyName: 'CÔNG TY TNHH THƯƠNG MẠI - TỔ CH...',
      date: '03/05/2026',
      location: 'Nghệ An',
      guests: '2500 khách mời',
      categories: [
        { name: 'HOA & DECOR', type: 'flower' },
        { name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN', type: 'entertainment' },
      ],
      description:
        'TKK đồng hành với vai trò nhà cung cấp chính thiết bị và vật liệu kỹ thuật cho...',
      image: imgTest,
    },
    {
      id: 3,
      badge: 'GALA DINNER',
      title: 'Đam mê & Hội tụ',
      companyName: 'CÔNG TY TNHH GREEN SOUND GROUP',
      date: '16/06/2026',
      location: 'Nghệ An',
      guests: '1000 khách mời',
      categories: [
        { name: 'HOA & DECOR', type: 'flower' },
        { name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN', type: 'entertainment' },
      ],
      description:
        'Không chỉ là một buổi setup thông thường, đây là nơi G.Sound cùng những người anh...',
      image: imgTest,
    },
    {
      id: 4,
      badge: 'TIỆC CƯỚI',
      title: 'Báu vật miền nhiệt đới',
      companyName: 'CÔNG TY CỔ PHẦN DELAVU HOLDING',
      date: '24/06/2025',
      location: 'Nghệ An',
      guests: '2500 khách mời',
      categories: [
        { name: 'HOA & DECOR', type: 'flower' },
        { name: 'TIỆC & ĐỊA ĐIỂM', type: 'venue' },
        { name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN', type: 'entertainment' },
      ],
      description:
        'Siêu đám cưới gây chấn động truyền thông tại Diễn Châu, Nghệ An với tổng mức đầu t...',
      image: imgTest,
    },
  ];

  const renderCategoryIcon = (type: ProjectCategory['type']) => {
    switch (type) {
      case 'entertainment':
        return <Mic2 className="w-3 h-3 text-purple-600 shrink-0" />;
      case 'flower':
        return <Flower2 className="w-3 h-3 text-pink-500 shrink-0" />;
      case 'logistics':
        return <Truck className="w-3 h-3 text-emerald-600 shrink-0" />;
      case 'venue':
        return <UtensilsCrossed className="w-3 h-3 text-amber-600 shrink-0" />;
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
              Dự án nổi bật
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 mt-1">
              Khám phá các dự án nổi bật từ mạng lưới đối tác tổ chức sự kiện uy tín
            </p>
          </div>

          <a
            href="#tat-ca-du-an"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#FF3366] hover:text-[#F22459] transition-colors group self-start sm:self-auto"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
            >
              {/* Top Banner with Badge */}
              <div className="relative h-44 sm:h-48 w-full bg-neutral-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Event Type Badge (Top-Left) */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#FF3366] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                  {project.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Project Title */}
                  <h3
                    title={project.title}
                    className="font-bold text-neutral-900 text-base sm:text-[17px] leading-snug line-clamp-1 min-h-[26px] mb-2 group-hover:text-[#FF3366] transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Company Name */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 tracking-tight mb-2.5">
                    <User className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">{project.companyName}</span>
                  </div>

                  {/* Date, Location, Guests Meta */}
                  <div className="space-y-1 text-xs text-neutral-600 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{project.guests}</span>
                    </div>
                  </div>

                  {/* Category Tags */}
                  <div className="flex flex-col gap-1.5 mb-3 min-h-[52px]">
                    {project.categories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase w-fit max-w-full"
                      >
                        {renderCategoryIcon(cat.type)}
                        <span className="truncate">{cat.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-5 min-h-[44px]">
                    {project.description}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={`#project-${project.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FF3366] hover:bg-[#F22459] active:scale-[0.98] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase flex items-center justify-center shadow-[0_4px_12px_rgba(255,51,102,0.25)] hover:shadow-[0_6px_16px_rgba(255,51,102,0.35)] transition-all cursor-pointer"
                >
                  XEM CHI TIẾT
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
