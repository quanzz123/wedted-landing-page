import { ArrowRight } from 'lucide-react';
import FeatureProductCard from './Card/FeatureProductCard';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

export default function FeaturedProductsSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const loadData = () => {
      getProducts()
        .then((data) => {
          console.log('Dữ liệu API trả về:', data);
          setProducts(data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching products:', err);
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
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1497px] mx-auto px-4 sm:px-6 lg:px-8">
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
        {/* Products Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        {loading ? (
            <div className="py-20 text-center text-neutral-500">
            Đang tải dữ liệu...
          </div>
        ): (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <FeatureProductCard key={product.id} product={product} />
              ))
            ) : (
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
