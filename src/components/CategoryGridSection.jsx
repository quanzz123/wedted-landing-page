import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import CategoryCard from './Card/CategoryCard';

export default function CategoryGridSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = () => {
    getCategories()
      .then((data) => {
        console.log('Dữ liệu API trả về:', data);
        setCategories(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
        const message = 'Lỗi kết nối tới Backend';
        setError(message);
        setLoading(false);
      });
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-[1497px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 tracking-tight mb-3">
            Danh mục ngành
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            Mọi mắt xích của ngành cưới và sự kiện đều được kết nối tại <br className="hidden sm:inline" />
            một nền tảng.
          </p>
        </div>
         {/* Thông báo lỗi  */}
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm">
            {error}
            <button
              type="button"
              onClick={handleRetry}
              className="ml-2 font-semibold text-amber-900 hover:underline cursor-pointer"
            >
              Tải lại
            </button>
          </div>
        )}
        {/* 12 Categories Grid (4 cols on desktop, 3 on tablet, 2 on mobile) */}
        {loading ? (
          <div className="py-20 text-center text-neutral-500">
              Đang tải dữ liệu...
            </div>
        ): (

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.length > 0 ? (
              categories.map((c) => (
                <CategoryCard key={c.id} category={c} />
              ))
            ) :(
              <div className="col-span-full text-center py-10 text-neutral-400 text-sm">
                Chưa có dữ liệu nhà cung cấp nào.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
