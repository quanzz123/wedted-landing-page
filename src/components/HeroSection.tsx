import React, { useState } from 'react';
import { Search, Users, Star, CalendarCheck, MapPin } from 'lucide-react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularTags = [
    'Hoa & Decor',
    'Vật tư & Vật liệu',
    'Nhà rạp & Kết cấu',
    'Nội thất sự kiện',
    'LED & Trình chiếu',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Search Bar, Popular Tags */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-900 leading-[1.25] tracking-tight mb-5">
              Nền tảng B2B{' '}
              <span className="bg-gradient-to-r from-[#FF2B6D] via-[#9333EA] to-[#00AEEF] bg-clip-text text-transparent font-extrabold">
                ĐÁNG TIN CẬY
              </span>{' '}
              dành cho <br className="hidden sm:inline" />
              doanh nghiệp{' '}
              <span className="bg-gradient-to-r from-[#FF7A00] via-[#FF2B6D] via-[#7C3AED] to-[#00AEEF] bg-clip-text text-transparent font-extrabold">
                NGÀNH CƯỚI &amp; SỰ KIỆN
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mb-8">
              Tìm kiếm, so sánh và đặt lịch với hơn 2.500 nhà cung cấp dịch vụ
              ngành cưới và sự kiện đã chứng minh được năng lực
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="w-full max-w-xl bg-white border border-neutral-200/90 rounded-full p-1.5 sm:p-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-between mb-6 focus-within:border-neutral-300 focus-within:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="flex items-center flex-1 min-w-0 pl-3 sm:pl-4 pr-2">
                <Search className="w-5 h-5 text-[#FF3366] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Bạn đang tìm kiếm gì?"
                  className="w-full bg-transparent px-3 py-1.5 text-sm sm:text-base text-neutral-800 placeholder-neutral-400 outline-none"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#FF3366] hover:bg-[#F22459] active:scale-[0.98] text-white font-medium text-sm sm:text-base shadow-[0_4px_14px_rgba(255,51,102,0.35)] hover:shadow-[0_6px_20px_rgba(255,51,102,0.45)] transition-all cursor-pointer"
              >
                Tìm kiếm
              </button>
            </form>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs sm:text-[13px] font-semibold text-neutral-700 mr-1">
                Phổ biến:
              </span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className="px-3.5 py-1.5 rounded-full text-xs text-neutral-600 bg-neutral-50/80 border border-neutral-200/80 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-300 transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Floating Staggered Stat Cards */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
            {/* Ambient subtle glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/30 via-sky-50/30 to-amber-100/20 blur-3xl -z-10 rounded-full" />

            <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-sm sm:max-w-md">
              {/* Column 1: Card 1 & Card 3 */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {/* Card 1: 2.500+ Nhà cung cấp đã xác thực */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0F3] text-[#FF3366] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-[#FF3366] tracking-tight">
                      2.500+
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Nhà cung cấp <br />
                    đã xác thực
                  </p>
                </div>

                {/* Card 3: 12.000+ Sự kiện thành công */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#00AEEF] flex items-center justify-center shrink-0">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-[#00AEEF] tracking-tight">
                      12.000+
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Sự kiện thành <br />
                    công
                  </p>
                </div>
              </div>

              {/* Column 2: Card 2 & Card 4 (Staggered offset) */}
              <div className="flex flex-col gap-4 sm:gap-5 pt-6 sm:pt-8">
                {/* Card 2: 850 Đơn vị đã xác thực */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FEF3C7] text-[#F59E0B] flex items-center justify-center shrink-0">
                      <Star className="w-4 h-4 fill-[#F59E0B]" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-[#F59E0B] tracking-tight">
                      850
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Đơn vị đã xác <br />
                    thực
                  </p>
                </div>

                {/* Card 4: 34 Tỉnh thành toàn quốc */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FFE4E6] text-[#F43F5E] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-[#F43F5E] tracking-tight">
                      34
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Tỉnh thành <br />
                    toàn quốc
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
