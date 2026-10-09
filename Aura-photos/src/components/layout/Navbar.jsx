import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Início", href: "/#home" },
    { label: "Sobre", href: "/#about" },
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Serviços", href: "/#services" },
    { label: "Contato", href: "/#contact" },
];

const whatsappNumber = "5511999999999";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Olá! Gostaria de saber mais sobre os ensaios fotográficos da Aura."
    )}`;

    function closeMenu() {
        setMenuOpen(false);
    }

    function handleNavClick(href) {
        closeMenu();

        // Se já estiver na página inicial, navega diretamente para a seção.
        if (location.pathname === "/") {
            const sectionId = href.split("#")[1];

            if (sectionId) {
                requestAnimationFrame(() => {
                    document.getElementById(sectionId)?.scrollIntoView({
                        behavior: "smooth",
                    });
                });
            }
        }
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-[#292722]/90 text-[#F4F4F5] shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-300">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
                aria-label="Navegação principal"
            >
                {/* Logo */}
                <Link
                    to="/#home"
                    onClick={closeMenu}
                    className="group flex flex-col leading-none"
                    aria-label="Aura Fotografia - Início"
                >
                    <span className="font-['Cormorant_Garamond'] text-3xl font-semibold tracking-wide transition-colors group-hover:text-[#D4AF37] sm:text-4xl">
                        Aura<span className="text-[#D4AF37]">.</span>
                    </span>

                    <span className="mt-1 text-[9px] tracking-[0.3em] text-[#A1A1AA]">
                        F O T O G R A F I A
                    </span>
                </Link>

                {/* Links desktop */}
                <div className="hidden items-center gap-7 lg:flex xl:gap-9">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="group relative py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#A1A1AA] transition-colors hover:text-[#F4F4F5]"
                        >
                            {link.label}

                            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA desktop */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 border border-[#D4AF37]/70 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0F0F0F] lg:inline-flex"
                >
                    Agendar ensaio
                    <span aria-hidden="true">↗</span>
                </a>

                {/* Botão mobile */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-2xl transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] lg:hidden"
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
                </button>
            </nav>

            {/* Menu mobile */}
            <div
                id="mobile-navigation"
                className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${menuOpen
                        ? "max-h-96 opacity-100"
                        : "pointer-events-none max-h-0 border-transparent opacity-0"
                    }`}
                aria-hidden={!menuOpen}
            >
                <div className="flex flex-col px-5 pb-5 pt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            tabIndex={menuOpen ? 0 : -1}
                            onClick={() => handleNavClick(link.href)}
                            className="border-b border-white/10 py-4 text-sm uppercase tracking-widest text-[#A1A1AA] transition-colors hover:text-[#D4AF37]"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={menuOpen ? 0 : -1}
                        onClick={closeMenu}
                        className="mt-5 flex items-center justify-center gap-2 bg-[#D4AF37] px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#0F0F0F] transition-colors hover:bg-[#F4F4F5]"
                    >
                        Agendar ensaio
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </header>
    );
}