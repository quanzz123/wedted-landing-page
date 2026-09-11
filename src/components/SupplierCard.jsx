import { Star, MapPin, CheckCircle2, ArrowRight, Tag,CircleStar } from 'lucide-react';

export default function SupplierCard({ supplier }) {
  
  const categories = supplier.categoryNames
    ? supplier.categoryNames.split(',').map((cat) => cat.trim()).filter(Boolean)
    : [];

  const ratingValue = parseFloat(String(supplier.rating ?? '10.0')) || 10.0;
  const reviewCount = supplier.reviewCount ?? 0;
  const location = supplier.provinceName || 'Toàn quốc';
  const isVerified = supplier.status === 'APPROVED' || !supplier.status;

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1">
      {/* Ảnh bìa / Logo nhà cung cấp */}
      <div className="relative h-44 sm:h-48 w-full bg-neutral-100 overflow-hidden flex items-center justify-center border-b border-neutral-100">
        {supplier.coverImageUrl ? (
          <img
            src={supplier.coverImageUrl}
            alt={supplier.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              
              e.target.src =
                'https://placehold.co/400x300/f8fafc/64748b?text=WedTech+Supplier';
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-neutral-400 text-xs gap-1">
            <Tag className="w-8 h-8 opacity-40" />
            <span>Chưa có ảnh đại diện</span>
          </div>
        )}

        {/* Huy hiệu Đã xác thực */}
        {isVerified && (
          <div className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-[#0070F3] text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded shadow-sm z-10">
            <CircleStar className="w-3 h-3" />
            <span>Đã xác thực</span>
          </div>
        )}
      </div>

      {/* Thông tin chi tiết */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Tên nhà cung cấp */}
          <h3
            title={supplier.name}
            className="font-bold text-neutral-900 text-base sm:text-[17px] leading-snug line-clamp-2 min-h-[46px] mb-2 group-hover:text-[#FF3366] transition-colors"
          >
            {supplier.name}
          </h3>

          {/* Đánh giá & Địa điểm */}
          <div className="flex items-center gap-3 text-xs mb-3">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>
                {ratingValue.toFixed(1)} ({reviewCount})
              </span>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
              <span className="truncate max-w-[120px]">{location}</span>
            </div>
          </div>

          {/* Danh mục ngành nghề */}
          <div className="flex flex-col gap-1.5 mb-3 min-h-[52px]">
            {categories.length > 0 ? (
              categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase w-fit max-w-full"
                >
                  {supplier.categoryIcon ? (
                    <img
                      src={supplier.categoryIcon}
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

          {/* Mô tả ngắn */}
          <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3 mb-5 min-h-[48px]">
            {supplier.description || 'Đơn vị cung cấp dịch vụ cưới và sự kiện chuyên nghiệp.'}
          </p>
        </div>

        {/* Nút Xem hồ sơ */}
        <a
          href={supplier.slug ? `https://wedtech.vn/supplier/${supplier.slug}` : '#'}
          target="_blank"
          rel="noreferrer"
          className="w-full py-2.5 px-4 rounded-xl bg-[#FF3366] hover:bg-[#F22459] active:scale-[0.98] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(255,51,102,0.25)] hover:shadow-[0_6px_16px_rgba(255,51,102,0.35)] transition-all cursor-pointer"
        >
          <span>XEM HỒ SƠ</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
