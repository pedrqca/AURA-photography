import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
    return (
        <Link
            to={`/portfolio/${category.id}`}
            data-category-card
            className="group relative block h-[380px] min-w-0 flex-none basis-[85%] overflow-hidden sm:basis-[48%] lg:basis-[31%]"
        >
            {/* Fotografia de capa */}
            <img
                src={category.image}
                alt={`Fotografia de ${category.title}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Camada escura para destacar o texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-colors duration-500 group-hover:from-black/90" />

            {/* Conteúdo do card */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    Aura Fotografia
                </p>

                <h3 className="font-['Cormorant_Garamond'] text-3xl font-medium text-[#F4F4F5] sm:text-4xl">
                    {category.title}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                    {category.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-300 group-hover:gap-4">
                    Explorar galeria
                    <span aria-hidden="true">→</span>
                </span>
            </div>

            {/* Borda decorativa */}
            <div className="pointer-events-none absolute inset-3 border border-white/0 transition-colors duration-500 group-hover:border-[#D4AF37]/60" />
        </Link>
    );
}