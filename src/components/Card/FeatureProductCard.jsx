import { ArrowRight, Star, User, Tag } from 'lucide-react';
import imgTest from '../../assets/images/imgTest.jpg';

export default function FeatureProductCard({ product }) {


    const price = product.price == null || product.price === '' || product.price === 0 || product.price === '0'
      ? 'Liên hệ'
      : `Từ ${Number(product.price).toLocaleString('vi-VN')} ${product.currency || 'VND'}`;

    const companyName = product?.company?.name || 'Công ty cung cấp sản phẩm';
    const ratingValue = parseFloat(String(product.rating ?? '10.0')) || 10.0;

    return (
        <div
            key={product.id}
            className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
        >
            {/* Product Image Area */}
            <div className="relative h-48 sm:h-52 w-full bg-neutral-50 overflow-hidden flex items-center justify-center  border-b border-neutral-100">
                {product.imageUrl ? (
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-covertransition-transform duration-500 group-hover:scale-105"
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
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                    {/* Product Title */}
                    <h3
                        title={product.title}
                        className="font-bold text-neutral-900 text-base sm:text-[17px] leading-snug line-clamp-2 min-h-[46px] mb-2 group-hover:text-[#FF3366] transition-colors"
                    >
                        {product.title}
                    </h3>

                    {/* Supplier & Rating */}
                    <div className="flex items-center justify-between text-xs mb-3 gap-2">
                        <div className="flex items-center gap-1.5 text-neutral-600 truncate">
                            <User className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span className="truncate">{companyName}</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500 font-semibold shrink-0">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>
                                {ratingValue.toFixed(1)} ({product.reviewCount ?? 0})
                            </span>
                        </div>
                    </div>

                    {/* Category Badges */}
                    <div className="flex flex-col gap-1.5 mb-4 min-h-[52px]">
                        {product.categories?.map((cat, idx) => (
                            <div
                                key={cat.id || idx}
                                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase w-fit max-w-full"
                            >
                                {cat.icon ? (
                                    <img
                                        src={cat.icon}
                                        alt="Category Icon"
                                        className="w-3 h-3 object-contain shrink-0"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <Tag className="w-3 h-3 text-rose-500 shrink-0" />
                                )}
                                <span className="truncate">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    {/* Pricing and MOQ */}
                    <div className="flex items-end justify-between pt-3 pb-4 border-t border-neutral-100">
                        <div>
                            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-0.5">
                                GIÁ THAM KHẢO
                            </span>
                            <span className="text-sm sm:text-[15px] font-bold text-neutral-900">
                                {price}
                            </span>
                        </div>
                        {product.moq && (
                            <span className="text-[10px] sm:text-[11px] text-neutral-500 font-medium uppercase">
                                MOQ: {product.moq} {product.unit || 'sản phẩm'}
                            </span>
                        )}
                    </div>

                    {/* CTA Button */}
                    <a
                        href={`#product-${product.id}`}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#FF3366] hover:bg-[#F22459] active:scale-[0.98] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(255,51,102,0.25)] hover:shadow-[0_6px_16px_rgba(255,51,102,0.35)] transition-all cursor-pointer"
                    >
                        <span>CHI TIẾT</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>

    )
}