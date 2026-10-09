import CategoryCarousel from "../components/portfolio/CategoryCarousel";
import portfolioCategories from "../data/portfolioCategories";

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="overflow-hidden bg-[#0F0F0F] px-5 py-20 text-[#F4F4F5] sm:px-8 sm:py-28"
        >
            <div className="mx-auto max-w-7xl">
                {/* Cabeçalho da seção */}
                <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                            Momentos que permanecem
                        </p>

                        <h2 className="font-['Cormorant_Garamond'] text-4xl font-medium sm:text-6xl">
                            Nosso portfólio
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-[#A1A1AA]">
                            Cada história é única. Explore nossos registros e descubra a
                            beleza presente em cada momento.
                        </p>
                    </div>

                    <span className="text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">
                        {String(portfolioCategories.length).padStart(2, "0")} categorias
                    </span>
                </div>

                {/* Carrossel */}
                <CategoryCarousel categories={portfolioCategories} />
            </div>
        </section>
    );
}