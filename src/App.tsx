import { useState } from 'react'
import { Sparkles, Heart, Zap, ShieldCheck, ArrowRight } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              WedTech
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Tính năng</a>
            <a href="#about" className="hover:text-white transition-colors">Giải pháp</a>
            <a href="#pricing" className="hover:text-white transition-colors">Bảng giá</a>
          </nav>

          <button className="text-sm font-semibold bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg transition-all shadow-md shadow-rose-500/25 hover:shadow-rose-500/40">
            Bắt đầu ngay
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            React + Vite + Tailwind CSS v4 đã sẵn sàng
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Nền tảng công nghệ cưới <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Hiện đại & Đột phá
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
            Dự án của bạn đã được khởi tạo thành công với cấu hình tối ưu nhất. Sẵn sàng để xây dựng landing page ấn tượng cho đám cưới số.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-sm transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Click thử: {count}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              Tài liệu Tailwind
            </a>
          </div>

          {/* Feature Grid */}
          <div id="features" className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mt-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white mb-2">Vite Siêu Tốc</h3>
              <p className="text-sm text-slate-400">Khởi động ngay lập tức, cập nhật HMR trong tích tắc.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white mb-2">Tailwind CSS v4</h3>
              <p className="text-sm text-slate-400">Cấu hình gọn gàng không cần file config phức tạp, hỗ trợ tiện ích mới.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white mb-2">TypeScript Chuẩn</h3>
              <p className="text-sm text-slate-400">Code an toàn, phát hiện lỗi sớm và gợi ý code thông minh.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} WedTech. Khởi tạo thành công với React & Tailwind CSS.
      </footer>
    </div>
  )
}

export default App

