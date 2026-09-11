export default function CtaBanner() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Banner Card */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#EB1B68] via-[#6353A2] to-[#00A3DF] shadow-[0_20px_50px_rgba(0,163,223,0.15)] px-6 py-12 sm:px-12 sm:py-16 md:py-20 text-center">
          {/* Subtle background ambient overlay */}
          <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Title */}
            <h2 className="text-2xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-tight sm:leading-snug mb-4">
              Tìm đối tác phù hợp cho dự án
              <br />
              tiếp theo?
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
              Hãy để chúng tôi giúp bạn kết nối với những đối tác uy tín nhất dựa trên nhu cầu và
              <br className="hidden sm:inline" /> ngân sách của bạn.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full">
              {/* Primary White Button */}
              <a
                href="#tim-doi-tac"
                className="w-full sm:w-[235px] py-3.5 px-5 bg-white text-[#EC1B68] font-bold text-xs sm:text-sm rounded-2xl shadow-lg hover:bg-neutral-50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center flex flex-col items-center justify-center leading-snug cursor-pointer"
              >
                <span>Tìm kiếm nhà cung cấp /</span>
                <span>đơn vị sự kiện</span>
              </a>

              {/* Secondary Translucent Bordered Button */}
              <a
                href="#kham-pha"
                className="w-full sm:w-[235px] py-3.5 px-5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm rounded-2xl border border-white/60 backdrop-blur-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center flex flex-col items-center justify-center leading-snug shadow-sm cursor-pointer"
              >
                <span>Khám phá danh sách dự</span>
                <span>án / Sản phẩm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

