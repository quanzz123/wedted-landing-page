import { ArrowRight } from 'lucide-react';
import FeatureProjectCard from './Card/FeatureProjectCard';
import { getProjects } from '../services/api';
import { useEffect, useState } from 'react';

export default function FeaturedProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = () => {
    getProjects()
      .then((data) => {
        console.log('Dữ liệu API trả về:', data);
        setProjects(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
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
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Dự án nổi bật
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 mt-1">
              Khám phá các dự án nổi bật từ mạng lưới đối tác tổ chức sự kiện uy tín
            </p>
          </div>

          <a
            href="#tat-ca-du-an"
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
        {/* Projects Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        {loading ? (
          <div className="py-20 text-center text-neutral-500">
            Đang tải dữ liệu...
          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.length > 0 ? (
              projects.map((projects) => (
                <FeatureProjectCard key={projects.id} project={projects} />
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
