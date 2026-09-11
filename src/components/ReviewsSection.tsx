export interface ReviewItem {
  id: string | number;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  rating: number;
  content: string;
  date?: string;
  companyName?: string;
}

interface ReviewsSectionProps {
  reviews?: ReviewItem[];
}

export default function ReviewsSection({ reviews = [] }: ReviewsSectionProps) {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Đánh giá từ khách hàng &amp; đối tác
          </h2>
        </div>

        {/* Reviews Container / Empty State */}
        {reviews.length === 0 ? (
          <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-neutral-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] px-6 py-16 sm:py-20 md:py-24 text-center flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px]">
            <h3 className="text-sm sm:text-base font-bold text-neutral-800 mb-2">
              Chưa có đánh giá nào
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Hệ thống chưa nhận được đánh giá nào từ khách hàng &amp; đối tác.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 text-amber-400 mb-3 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < item.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  &ldquo;{item.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {item.authorAvatar ? (
                    <img
                      src={item.authorAvatar}
                      alt={item.authorName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-bold text-xs">
                      {item.authorName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-sm text-neutral-900 leading-tight">
                      {item.authorName}
                    </h4>
                    {item.authorRole && (
                      <span className="text-xs text-neutral-400 block mt-0.5">
                        {item.authorRole}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

