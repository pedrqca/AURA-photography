import {
    AtSign,
    Camera,
    MessageCircle,
    ArrowUpRight,
    Play,
} from "lucide-react";

const socialLinks = [
    {
        name: "Instagram",
        username: "@aurademonstration",
        href: "https://www.instagram.com/aurademonstration/",
        icon: Camera,
    },
    {
        name: "YouTube",
        username: "Aura Fotografia",
        href: "https://www.youtube.com/@aurademonstration",
        icon: Play,
    },
    {
        name: "Twitter / X",
        username: "@aurademonstration",
        href: "https://x.com/aurademonstration",
        icon: AtSign,
    },
];

const whatsappNumber = "5511999999999";
const currentYear = new Date().getFullYear();

export default function Contact() {
    const whatsappMessage = encodeURIComponent(
        "Olá! Conheci o site da Aura Fotografia e gostaria de saber mais sobre os ensaios fotográficos.",
    );

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

return (
    <section
        id="contact"
        className="bg-[#0F0F0F] px-5 py-24 text-[#F4F4F5] sm:px-8 sm:py-32"
    >
        <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                {/* Apresentação e contato */}
                <div>
                    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                        Vamos conversar
                    </p>

                    <h2 className="max-w-xl font-['Cormorant_Garamond'] text-5xl font-medium leading-tight sm:text-6xl lg:text-7xl">
                        Sua história merece ser{" "}
                        <span className="italic text-[#D4AF37]">
                            eternizada.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-[#A1A1AA]">
                        Tem um momento especial chegando? Vamos conversar
                        sobre como transformar suas memórias em fotografias
                        inesquecíveis.
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 inline-flex items-center gap-3 bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-[#0F0F0F] transition-colors duration-300 hover:bg-[#F4F4F5]"
                    >
                        <MessageCircle size={19} />
                        Conversar pelo WhatsApp
                        <ArrowUpRight size={17} />
                    </a>

                    <p className="mt-4 text-xs text-[#71717A]">
                        Será um prazer conhecer sua ideia.
                    </p>
                </div>

                {/* Redes sociais */}
                <div className="flex flex-col justify-center">
                    <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                        Acompanhe meu trabalho
                    </p>

                    <div className="divide-y divide-[#292929] border-y border-[#292929]">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between gap-4 py-6 transition-colors duration-300 hover:text-[#D4AF37]"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#39352A] text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F]">
                                            <Icon size={21} />
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-medium">
                                                {social.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-[#A1A1AA]">
                                                {social.username}
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={19}
                                        className="shrink-0 text-[#71717A] transition-colors duration-300 group-hover:text-[#D4AF37]"
                                    />
                                </a>
                            );
                        })}

                        {/* WhatsApp */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 py-6 transition-colors duration-300 hover:text-[#D4AF37]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#39352A] text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F]">
                                    <MessageCircle size={21} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium">
                                        WhatsApp
                                    </h3>

                                    <p className="mt-1 text-sm text-[#A1A1AA]">
                                        Vamos conversar
                                    </p>
                                </div>
                            </div>

                            <ArrowUpRight
                                size={19}
                                className="shrink-0 text-[#71717A] transition-colors duration-300 group-hover:text-[#D4AF37]"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Rodapé */}
            <div className="mt-20 border-t border-[#292929] pt-6">
                <p className="text-center text-xs tracking-wide text-[#71717A]">
                    © {currentYear} Aura Fotografia. Todos os
                    direitos reservados.
                </p>
            </div>
        </div>
    </section>
);
}