import { ArrowRight, Star, MapPin, Briefcase, Tag } from 'lucide-react';
import imgTest from '../../assets/images/imgTest.jpg';

export default function AgencyCard({ agency }) {

    const categories = agency.categoryNames
        ? agency.categoryNames.split(',').map((cat) => cat.trim()).filter(Boolean)
        : [];

    const ratingValue = parseFloat(String(agency.rating ?? '10.0')) || 10.0;
    const location = agency.provinceName || 'Toàn quốc';
    return (

        <div

            className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
        >
            {/* Image Container (Left side on sm+, top on mobile) */}
            <div className="w-full sm:w-[42%] h-56 sm:h-auto min-h-[200px] relative overflow-hidden bg-neutral-100 shrink-0">
                {agency.coverImageUrl ? (
                    
                    <img
                        src={agency.coverImageUrl}
                        alt={agency.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                            e.target.src = imgTest;
                        }}
                    />
                ):(
                    <div className="flex flex-col items-center justify-center text-neutral-400 text-xs gap-1">
                        <Tag className="w-8 h-8 opacity-40" />
                        <span>Chưa có ảnh đại diện</span>
                    </div>     
                )}
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
                            <span>{ratingValue.toFixed(1)}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1 text-neutral-600 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                            <span>{location}</span>
                        </div>

                        {/* Project Count */}
                        <div className="flex items-center gap-1 text-neutral-600 font-medium">
                            <Briefcase className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{agency.projectCount} dự án</span>
                        </div>
                    </div>

                    {/* Category Tag */}
                    <div className="mb-3">
                        {categories.length > 0 ? (
                            categories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase w-fit max-w-full"
                                >
                                    {agency.categoryIcon ? (
                                        <img
                                            src={agency.categoryIcon}
                                            alt=""
                                            className="w-3 h-3 object-contain shrink-0"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <Tag className="w-3 h-3 text-rose-500 shrink-0" />
                                    )}
                                    <span className="truncate">{cat}</span>
                                </div>
                            ))
                        ) : (
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-100 text-neutral-500 text-[10px] sm:text-[11px] font-medium w-fit">
                                <span>Dịch vụ sự kiện & cưới</span>
                            </div>
                        )}
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

    )
}