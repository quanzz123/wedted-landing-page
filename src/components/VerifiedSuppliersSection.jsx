import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SupplierCard from './SupplierCard';
import { getSupplierCompanies } from '../services/api';

export default function VerifiedSuppliersSection() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = () => {
    getSupplierCompanies({page: 1})
      .then((data) => {
        console.log('Dữ liệu API trả về:', data);
        setSuppliers(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching suppliers:', err);
        const message ='Lỗi kết nối tới Backend';
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
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Nhà cung cấp đã xác thực
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 mt-1">
              Đối tác chuyên nghiệp được Wedtech thẩm định năng lực.
            </p>
          </div>

          <a
            href="https://wedtech.vn/suppliers"
            target="_blank"
            rel="noreferrer"
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

        {/* Nếu đang là trạng thái load dữ liệu */}
        {loading ? (
            <div className="py-20 text-center text-neutral-500">
              Đang tải dữ liệu...
            </div>
        ) : (
          /* Danh sách Nhà cung cấp */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suppliers.length > 0 ? (
              suppliers.map((supplier) => (
                <SupplierCard key={supplier.id} supplier={supplier} />
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
