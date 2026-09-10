import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoWedTed from '../assets/images/logoWedTed.webp';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Nhà cung cấp', href: '#nha-cung-cap' },
    { name: 'Đơn vị sự kiện', href: '#don-vi-su-kien' },
    { name: 'Dự án', href: '#du-an' },
    { name: 'Sản phẩm', href: '#san-pham' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        {/* Left Side: Logo & Desktop Navigation */}
        <div className="flex items-center gap-8 lg:gap-11">
          {/* Brand Logo */}
          <a href="/" className="flex items-center focus:outline-none" aria-label="WedTech Home">
            <img
              src={logoWedTed}
              alt="WedTech Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-neutral-700 hover:text-[#FF3366] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* WedTech Show Link with multi-color brand gradient */}
            <a
              href="#wedtech-show"
              className="text-[15px] font-bold tracking-tight bg-gradient-to-r from-[#FF7A00] via-[#FF2B6D] via-[#00B4D8] to-[#E83E8C] bg-clip-text text-transparent hover:opacity-85 transition-opacity duration-200"
            >
              WedTech Show
            </a>
          </nav>
        </div>

        {/* Right Side: Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Login Button (Desktop) */}
          <button
            type="button"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#FF3366] hover:bg-[#F22459] active:scale-[0.98] text-white font-medium text-sm sm:text-[15px] shadow-[0_6px_18px_rgba(255,51,102,0.35)] hover:shadow-[0_8px_22px_rgba(255,51,102,0.45)] transition-all duration-200 cursor-pointer"
          >
            Đăng nhập
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white/98 backdrop-blur-lg px-5 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-[15px] font-medium text-neutral-700 hover:text-[#FF3366] hover:bg-neutral-50 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#wedtech-show"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[15px] font-bold tracking-tight bg-gradient-to-r from-[#FF7A00] via-[#FF2B6D] via-[#00B4D8] to-[#E83E8C] bg-clip-text text-transparent hover:bg-neutral-50 transition-colors"
            >
              WedTech Show
            </a>
          </div>

          <div className="pt-2 border-t border-neutral-100">
            <button
              type="button"
              className="w-full py-2.5 px-4 rounded-xl bg-[#FF3366] hover:bg-[#F22459] text-white font-medium text-[15px] shadow-[0_6px_18px_rgba(255,51,102,0.35)] transition-all"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
