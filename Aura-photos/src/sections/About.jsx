
export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#1A1A1A] px-5 py-24 text-[#F4F4F5] sm:px-8 sm:py-32"
        >
            {/* Detalhe decorativo de fundo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-3xl"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
                {/* Texto de apresentação */}
                <div>
                    <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                        Sobre a Aura
                    </p>

                    <h2 className="max-w-xl font-['Cormorant_Garamond'] text-5xl font-medium leading-[1.08] sm:text-6xl lg:text-7xl">
                        Mais do que fotos,
                        <span className="mt-1 block italic text-[#D4AF37]">
                            memórias que permanecem.
                        </span>
                    </h2>

                    <div className="my-8 h-px w-20 bg-[#D4AF37]/70" />

                    <div className="max-w-xl space-y-5 text-sm leading-7 text-[#A1A1AA] sm:text-base sm:leading-8">
                        <p>
                            A Aura Fotografia é um projeto que nasce da ideia de que
                            os momentos mais especiais merecem ser lembrados muito
                            além do instante em que acontecem.
                        </p>

                        <p>
                            Acreditamos na beleza dos gestos espontâneos, nos
                            detalhes que passam despercebidos e nas emoções que
                            tornam cada história única.
                        </p>

                        <p>
                            Nosso olhar busca transformar momentos em imagens
                            cheias de significado — registros para revisitar,
                            sentir e compartilhar ao longo do tempo.
                        </p>
                    </div>

                    <a
                        href="#portfolio"
                        className="group mt-9 inline-flex items-center gap-3 border border-[#D4AF37]/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                    >
                        Conheça nosso portfólio
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </a>
                </div>

                {/* Composição visual */}
                <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
                    {/* Moldura decorativa */}
                    <div
                        aria-hidden="true"
                        className="absolute -right-3 -top-3 h-full w-full border border-[#D4AF37]/60 sm:-right-5 sm:-top-5"
                    />

                    <div className="relative aspect-[4/5] overflow-hidden bg-[#292722]">
                        <img
                            src="/about/about-image.jpg"
                            alt="Imagem conceitual da identidade visual da Aura Fotografia"
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                                Aura Fotografia
                            </p>

                            <p className="mt-2 font-['Cormorant_Garamond'] text-3xl italic text-white sm:text-4xl">
                                Histórias em cada detalhe.
                            </p>
                        </div>
                    </div>

                    {/* Identificação lateral */}
                    <p className="mt-5 text-right text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
                        Sensibilidade · Essência · Memória
                    </p>
                </div>
            </div>
        </section>
    );
}
