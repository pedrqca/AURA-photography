export default function Hero() {
    return (
        <section
            id="home"
            className="relative isolate flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden bg-[#0F0F0F]"
        >
            {/* Imagem de fundo */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/aura-hero2.png')" }}
                aria-hidden="true"
            />

            {/* Escurece a imagem para melhorar a leitura */}
            <div
                className="absolute inset-0 -z-10 bg-black/25"
                aria-hidden="true"
            />

            {/* Conteúdo à frente */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-5xl flex-col items-center justify-end px-6 pb-16 text-center sm:pb-20">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#F4F4F5]">
                    Fotografia
                </p>

                <h1 className="font-['Cormorant_Garamond'] text-4xl font-medium leading-tight text-[#F4F4F5] sm:text-6xl">
                    Momentos reais.
                    <br />
                    <span className="italic text-[#D4AF37]">
                        Memórias eternas.
                    </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                    Histórias contadas através de imagens, com sensibilidade,
                    autenticidade e atenção a cada detalhe.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#portfolio"
                        className="border border-[#D4AF37] bg-[#D4AF37] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-[#0F0F0F] transition-colors hover:bg-transparent hover:text-[#D4AF37]"
                    >
                        Explorar portfólio
                    </a>

                    <a
                        href="#contact"
                        className="border border-white/50 bg-black/20 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    >
                        Agendar ensaio
                    </a>
                </div>
            </div>

            {/* Indicador de rolagem */}
            <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex">
                <span className="text-[9px] uppercase tracking-[0.25em]">
                    Role para descobrir
                </span>
                <span className="h-8 w-px bg-[#D4AF37]/70" />
            </div>
        </section>
    );
}