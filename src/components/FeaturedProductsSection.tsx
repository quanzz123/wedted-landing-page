import { ArrowRight, Star, User, Flower2, Camera, Mic2, UtensilsCrossed } from 'lucide-react';
import imgTest from '../assets/images/imgTest.jpg';

export interface ProductCategory {
  name: string;
  type: 'flower' | 'media' | 'entertainment' | 'venue';
}

export interface FeaturedProduct {
  id: string | number;
  title: string;
  supplierName: string;
  rating: number;
  reviewCount: number;
  categories: ProductCategory[];
  price: string;
  moq: string;
  image: string;
}

export default function FeaturedProductsSection() {
  const products: FeaturedProduct[] = [
    {
      id: 1,
      title: 'Nhà hàng Tự Do - Khách sạn Viễn Đông',
      supplierName: 'Hotel Grand Saigon',
      rating: 10.0,
      reviewCount: 0,
      categories: [
        { name: 'HOA & DECOR', type: 'flower' },
        { name: 'MEDIA & STUDIO', type: 'media' },
        { name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN', type: 'entertainment' },
      ],
      price: 'Từ 5.000.000 VNĐ',
      moq: '1 GÓI',
      image: imgTest,
    },
    {
      id: 2,
      title: 'Bàn Mixer Âm Thanh - Bộ Trộn Tín Hiệu Cao Cấp Fill...',
      supplierName: 'Công ty TNHH CÔNG NGHỆ Â...',
      rating: 10.0,
      reviewCount: 0,
      categories: [
        { name: 'HOA & DECOR', type: 'flower' },
        { name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN', type: 'entertainment' },
      ],
      price: 'Liên hệ',
      moq: '1 BỘ',
      image: imgTest,
    },
    {
      id: 3,
      title: 'BST Cụm Hoa Bụi Trang Trí Chân Sân Khấu & Đường Dẫn',
      supplierName: 'CÔNG TY CỔ PHẦN DELAVU H...',
      rating: 10.0,
      reviewCount: 0,
      categories: [
        { name: 'HOA & DECOR', type: 'flower' },
        { name: 'TIỆC & ĐỊA ĐIỂM', type: 'venue' },
      ],
      price: 'Liên hệ',
      moq: '1 BỘ',
      image: imgTest,
    },
    {
      id: 4,
      title: 'E3 DKF-112',
      supplierName: 'CÔNG TY TNHH ĐẦU TƯ THƯƠ...',
      rating: 10.0,
      reviewCount: 0,
      categories: [
        { name: 'GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN', type: 'entertainment' },
      ],
      price: 'Từ 69.500.000 VNĐ',
      moq: '1 CÁI',
      image: imgTest,
    },
  ];

  const renderCategoryIcon = (type: ProductCategory['type']) => {
    switch (type) {
      case 'flower':
        return <Flower2 className="w-3 h-3 text-pink-500 shrink-0" />;
      case 'media':
        return <Camera className="w-3 h-3 text-sky-500 shrink-0" />;
      case 'entertainment':
        return <Mic2 className="w-3 h-3 text-purple-600 shrink-0" />;
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
              Sản phẩm và dịch vụ tiêu biểu
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 mt-1">
              Giải pháp trọn gói từ đối tác đã xác thực, tối ưu chi phí cho doanh nghiệp.
            </p>
          </div>

          <a
            href="#tat-ca-san-pham"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#FF3366] hover:text-[#F22459] transition-colors group self-start sm:self-auto"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Products Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
            >
              {/* Product Image Area */}
              <div className="relative h-48 sm:h-52 w-full bg-neutral-50 overflow-hidden flex items-center justify-center p-3 border-b border-neutral-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
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
                      <span className="truncate">{product.supplierName}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 font-semibold shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>
                        {product.rating.toFixed(1)} ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Category Badges */}
                  <div className="flex flex-col gap-1.5 mb-4 min-h-[52px]">
                    {product.categories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase w-fit max-w-full"
                      >
                        {renderCategoryIcon(cat.type)}
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
                        {product.price}
                      </span>
                    </div>
                    {product.moq && (
                      <span className="text-[10px] sm:text-[11px] text-neutral-500 font-medium uppercase">
                        MOQ: {product.moq}
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
          ))}
        </div>
      </div>
    </section>
  );
}
