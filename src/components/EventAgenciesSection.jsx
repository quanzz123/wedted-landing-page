import AgencyCard from './Card/AgencyCard';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getSupplierCompanies } from '../services/api';
export default function EventAgenciesSection() {

  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = () => {
    getSupplierCompanies({ type: 'EVENT_COMPANY', limit: 2, page: 1})
      .then((data) => {
        console.log('Dữ liệu API trả về:', data);
        setAgencies(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching suppliers:', err);
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
    <section className="bg-[#F1F3F5] py-12 sm:py-16">
      <div className="max-w-[1497px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Đơn vị sự kiện chất lượng
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 mt-1">
              Năng lực triển khai đã được kiểm chứng qua hàng nghìn dự án lớn nhỏ.
            </p>
          </div>

          <a
            href="#tat-ca-don-vi-su-kien"
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
        {/* Agencies Grid (2 columns on desktop, horizontal cards) */}
        {loading ? (
          <div className="py-20 text-center text-neutral-500">
              Đang tải dữ liệu...
            </div>
        ): (

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {agencies.length > 0 ? (
              agencies.map((agency) => (
                <AgencyCard key={agency.id} agency={agency} />
              ))
            ) : (
              <div className="col-span-full text-center text-neutral-500">
                Không có dữ liệu nhà cung cấp sự kiện.
              </div>
            )}
          </div>
        )}  
      </div>
    </section>
  );
}
