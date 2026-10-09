
import { useEffect } from "react";
import { Link } from "react-router-dom";

const whatsappNumber = "5511999999999";

export default function ServiceModal({ service, onClose }) {
    useEffect(() => {
        if (!service) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [service, onClose]);

    if (!service) return null;

    const whatsappMessage = `Olá! Gostaria de saber mais sobre o serviço de ${service.title} da Aura Fotografia.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-6"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-modal-title"
                className="relative my-auto grid w-full max-w-4xl overflow-hidden border border-[#D4AF37]/30 bg-[#1A1A1A] text-[#F4F4F5] shadow-2xl md:grid-cols-2"
            >
                {/* Botão de fechar */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar detalhes do serviço"
                    className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/60 text-2xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                    ×
                </button>

                {/* Imagem */}
                <div className="relative h-56 md:h-full md:min-h-[580px]">
                    <img
                        src={service.image}
                        alt={`Fotografia de ${service.title}`}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r" />

                    <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                        Aura Fotografia
                    </p>
                </div>

                {/* Conteúdo */}
                <div className="px-6 py-8 sm:px-9 sm:py-10">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                        Conheça o serviço
                    </p>

                    <h2
                        id="service-modal-title"
                        className="font-['Cormorant_Garamond'] text-4xl font-medium sm:text-5xl"
                    >
                        {service.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#A1A1AA]">
                        {service.details}
                    </p>

                    <div className="my-7 h-px w-16 bg-[#D4AF37]/70" />

                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                        O que podemos oferecer
                    </h3>

                    <ul className="mt-4 space-y-3">
                        {service.offerings.map((offering) => (
                            <li
                                key={offering}
                                className="flex items-start gap-3 text-sm leading-6 text-[#D4D4D8]"
                            >
                                <span className="mt-0.5 text-[#D4AF37]" aria-hidden="true">
                                    ✓
                                </span>
                                <span>{offering}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3">
                        <Link
                            to={`/portfolio/${service.id}`}
                            onClick={onClose}
                            className="flex items-center justify-center gap-2 border border-[#D4AF37]/60 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                        >
                            Ver fotografias
                            <span aria-hidden="true">↗</span>
                        </Link>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border border-[#D4AF37]/60 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                        >
                            Solicitar orçamento
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    <p className="mt-5 text-center text-xs leading-5 text-[#71717A]">
                        Os detalhes da experiência podem ser definidos de acordo com
                        suas necessidades.
                    </p>
                </div>
            </section>
        </div>
    );
}
