import { Store, Calendar, Home, Folder, Package } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-100 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] md:hidden"
    >
      <div className="max-w-md mx-auto px-2 flex items-center justify-between h-15 relative">
        {/* NCC */}
        <a
          href="#nha-cung-cap"
          className="flex flex-col items-center justify-center py-1 flex-1 text-neutral-500 hover:text-neutral-700 active:scale-95 transition-colors duration-200 focus:outline-hidden"
        >
          <Store className="w-5 h-5 stroke-[1.9]" />
          <span className="text-[11px] font-medium mt-1 tracking-tight">NCC</span>
        </a>

        {/* ĐVSK */}
        <a
          href="#don-vi-su-kien"
          className="flex flex-col items-center justify-center py-1 flex-1 text-neutral-500 hover:text-neutral-700 active:scale-95 transition-colors duration-200 focus:outline-hidden"
        >
          <Calendar className="w-5 h-5 stroke-[1.9]" />
          <span className="text-[11px] font-medium mt-1 tracking-tight">ĐVSK</span>
        </a>

        {/* Trang chủ (Nút tròn nhô cao ở giữa) */}
        <a
          href="#"
          className="relative -top-3 flex flex-col items-center justify-center flex-1 focus:outline-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-white shadow-[0_-3px_12px_rgba(0,0,0,0.08)] border border-neutral-100 flex items-center justify-center text-[#FF2B6D] transition-transform duration-200 active:scale-90">
            <Home className="w-6 h-6 stroke-[2.3]" />
          </div>
          <span className="text-[11px] mt-0.5 tracking-tight font-bold text-[#FF2B6D]">
            Trang chủ
          </span>
        </a>

        {/* Dự án */}
        <a
          href="#du-an"
          className="flex flex-col items-center justify-center py-1 flex-1 text-neutral-500 hover:text-neutral-700 active:scale-95 transition-colors duration-200 focus:outline-hidden"
        >
          <Folder className="w-5 h-5 stroke-[1.9]" />
          <span className="text-[11px] font-medium mt-1 tracking-tight">Dự án</span>
        </a>

        {/* Sản phẩm */}
        <a
          href="#san-pham"
          className="flex flex-col items-center justify-center py-1 flex-1 text-neutral-500 hover:text-neutral-700 active:scale-95 transition-colors duration-200 focus:outline-hidden"
        >
          <Package className="w-5 h-5 stroke-[1.9]" />
          <span className="text-[11px] font-medium mt-1 tracking-tight">Sản phẩm</span>
        </a>
      </div>
    </nav>
  );
}


