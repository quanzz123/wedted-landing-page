import hoaDecorIcon from '../../assets/images/hoa-decor.svg';

export default function CategoryCard({ category }) {
    

    return (
        <a
            href={`#category-${category.slug}`}
            className="group bg-white rounded-2xl border border-neutral-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-neutral-200 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col items-center justify-center text-center cursor-pointer"
        >
            {/* Soft pastel squircle icon container */}
            <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110`}
                style={{backgroundColor: category.bgColor || '#FDF2F8'}}
            >
                <img
                    src={category.icon || hoaDecorIcon}
                    alt={category.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    onError={(e) => {
                        e.target.src = hoaDecorIcon;
                    }}
                />
            </div>

            {/* Category Name */}
            <span className="font-bold text-neutral-800 text-sm sm:text-lg group-hover:text-[#FF3366] transition-colors leading-snug">
                {category.name}
            </span>
        </a>
    );
}
