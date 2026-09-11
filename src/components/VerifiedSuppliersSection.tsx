import { useEffect, useState } from 'react';
import { ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
import SupplierCard, { type CompanySupplier } from './SupplierCard';
import { getSupplierCompanies } from '../services/api';

export default function VerifiedSuppliersSection() {
  const [suppliers, setSuppliers] = useState<CompanySupplier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = () => {
    getSupplierCompanies()
      .then((data) => {
        // Hỗ trợ cả khi API trả về trực tiếp mảng hoặc object bọc { data: { data: [...] } }
        const companyList: CompanySupplier[] = Array.isArray(data)
          ? data
          : data?.data?.data || data?.data?.companies || data?.companies || [];

        setSuppliers(companyList);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error('Error fetching suppliers:', err);
        const message = err instanceof Error ? err.message : 'Lỗi kết nối tới Backend';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
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
          <div className="mb-6 flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{error}</span>
            </div>
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center gap-1 font-semibold text-amber-900 hover:underline ml-3 shrink-0 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Tải lại</span>
            </button>
          </div>
        )}

        {/* Trạng thái Loading: Hiển thị 4 Skeleton Cards */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl border border-neutral-200/70 p-4 sm:p-5 flex flex-col justify-between animate-pulse min-h-[420px]"
              >
                <div>
                  <div className="h-44 bg-neutral-100 rounded-xl mb-4" />
                  <div className="h-5 bg-neutral-200 rounded w-3/4 mb-3" />
                  <div className="h-3 bg-neutral-100 rounded w-1/2 mb-3" />
                  <div className="h-4 bg-neutral-100 rounded w-2/5 mb-3" />
                  <div className="h-12 bg-neutral-100 rounded w-full mb-4" />
                </div>
                <div className="h-10 bg-neutral-200 rounded-xl w-full" />
              </div>
            ))}
          </div>
        ) : (
          /* Danh sách Nhà cung cấp */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(suppliers) && suppliers.length > 0 ? (
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
