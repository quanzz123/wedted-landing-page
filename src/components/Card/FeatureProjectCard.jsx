import { Tag, Calendar, MapPin, Users, User } from 'lucide-react';
import imgTest from '../../assets/images/imgTest.jpg';

export default function FeatureProjectCard({ project }) {

    const categories = project?.categoryNames
        ? project.categoryNames.split(',').map((cat) => cat.trim()).filter(Boolean)
        : [];
    const eventDate = new Date(project.eventDate).toLocaleDateString('vi-VN');
    const province = project?.province?.name || 'Toàn quốc';
    const eventType = project?.eventType?.name || 'Sự kiện';
    const companyName = project?.company?.name || 'Công ty tổ chức sự kiện';
    return (

        <div
            key={project.id}
            className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
        >
            {/* Top Banner with Badge */}
            <div className="relative h-44 sm:h-48 w-full bg-neutral-100 overflow-hidden">
                {project.coverImageUrl ? (

                    <img
                        src={project.coverImageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                            e.target.src = imgTest;
                        }}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-neutral-400 text-xs gap-1">
                        <Tag className="w-8 h-8 opacity-40" />
                        <span>Chưa có ảnh đại diện</span>
                    </div>
                )}

                {/* Event Type Badge (Top-Left) */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#FF3366] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                    {eventType}
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
                        <span className="truncate">{companyName}</span>
                    </div>

                    {/* Date, Location, Guests Meta */}
                    <div className="space-y-1 text-xs text-neutral-600 mb-3">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                                <span>{eventDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                                <span>{province}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{project.guestCount}</span>
                        </div>
                    </div>

                    {/* Category Tags */}
                    <div className="flex flex-col gap-1.5 mb-3 min-h-[52px]">
                        {categories.length > 0 ? (
                            categories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase w-fit max-w-full"
                                >
                                    {project.categoryIcon ? (
                                        <img
                                            src={project.categoryIcon}
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

    )
} 