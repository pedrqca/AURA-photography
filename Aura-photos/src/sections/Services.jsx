
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import portfolioCategories from "../data/portfolioCategories";
import ServiceModal from "../components/portfolio/ServiceModal";

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const closeModal = useCallback(() => {
        setSelectedService(null);
    }, []);

    return (
        <>
            <section
                id="services"
                className="bg-[#1A1A1A] px-5 py-24 text-[#F4F4F5] sm:px-8 sm:py-32"
            >
                <div className="mx-auto max-w-7xl">
                    {/* Cabeçalho */}
                    <header className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
                        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                            Nossos serviços
                        </p>

                        <h2 className="font-['Cormorant_Garamond'] text-5xl font-medium sm:text-6xl lg:text-7xl">
                            Cada momento,
                            <span className="block italic text-[#D4AF37]">
                                um registro único.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#A1A1AA] sm:text-base sm:leading-8">
                            Descubra nossas experiências fotográficas e encontre
                            a maneira ideal de preservar seus momentos especiais.
                        </p>
                    </header>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {portfolioCategories.map((category, index) => (
                            <article
                                key={category.id}
                                className="group border border-white/10 bg-[#0F0F0F] transition-colors duration-300 hover:border-[#D4AF37]/50"
                            >
                                {/* Capa do serviço */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={`Fotografia de ${category.title}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                    <span className="absolute bottom-4 left-5 text-xs tracking-[0.25em] text-white/80">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Informações */}
                                <div className="p-6 sm:p-7">
                                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-medium">
                                        {category.title}
                                    </h3>

                                    <p className="mt-3 min-h-12 text-sm leading-6 text-[#A1A1AA]">
                                        {category.description}
                                    </p>

                                    <div className="mt-6 border-t border-white/10 pt-5">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedService(category)}
                                            aria-haspopup="dialog"
                                            className="group/button inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] transition-colors hover:text-[#F4F4F5]"
                                        >
                                            Ver detalhes
                                            <span
                                                aria-hidden="true"
                                                className="transition-transform duration-300 group-hover/button:translate-x-1"
                                            >
                                                →
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Chamada final */}
                    <div className="mt-16 border-t border-[#D4AF37]/20 pt-10 text-center sm:mt-20 sm:pt-14">
                        <p className="font-['Cormorant_Garamond'] text-3xl italic sm:text-4xl">
                            Tem uma história para contar?
                        </p>

                        <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">
                            Vamos descobrir juntos como transformá-la em lembrança.
                        </p>

                        <Link
                            to="/#contact"
                            className="mt-7 inline-flex items-center gap-3 border border-[#D4AF37]/70 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                        >
                            Fale conosco
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Modal do serviço selecionado */}
            <ServiceModal
                service={selectedService}
                onClose={closeModal}
            />
        </>
    );
}
