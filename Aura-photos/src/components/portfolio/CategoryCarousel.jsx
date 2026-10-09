import { useRef } from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryCarousel({ categories }) {
    const carouselRef = useRef(null);

    function scrollCarousel(direction) {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const card = carousel.querySelector("[data-category-card]");

        if (!card) return;

        const styles = window.getComputedStyle(carousel);
        const gap = parseFloat(styles.columnGap) || 0;
        const distance = card.getBoundingClientRect().width + gap;

        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const currentScroll = carousel.scrollLeft;
        const tolerance = 5;

        if (direction === 1) {
            if (currentScroll >= maxScroll - tolerance) {
                carousel.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                carousel.scrollBy({ left: distance, behavior: "smooth" });
            }
        }

        if (direction === -1) {
            if (currentScroll <= tolerance) {
                carousel.scrollTo({
                    left: maxScroll,
                    behavior: "smooth",
                });
            } else {
                carousel.scrollBy({ left: -distance, behavior: "smooth" });
            }
        }
    }

    return (
        <div className="relative">
            {/* Lista horizontal de cards */}
            <div
                ref={carouselRef}
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>

            {/* Seta esquerda */}
            <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label="Ver categorias anteriores"
                className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#1A1A1A]/95 text-2xl text-[#D4AF37] shadow-lg transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] sm:-left-5"
            >
                <span aria-hidden="true">‹</span>
            </button>

            {/* Seta direita */}
            <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label="Ver próximas categorias"
                className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#1A1A1A]/95 text-2xl text-[#D4AF37] shadow-lg transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] sm:-right-5"
            >
                <span aria-hidden="true">›</span>
            </button>
        </div>
    );
}