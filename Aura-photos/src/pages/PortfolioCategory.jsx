
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import portfolioCategories from "../data/portfolioCategories";
import portfolioImages from "../data/portfolioImages";

export default function PortfolioCategory() {
    const { category } = useParams();
    const [activePhotoIndex, setActivePhotoIndex] = useState(null);

    const selectedCategory = portfolioCategories.find(
        (item) => item.id === category,
    );

    const photos = selectedCategory
        ? portfolioImages[selectedCategory.galleryFolder] ?? []
        : [];

    const isGalleryOpen = activePhotoIndex !== null;
    const activePhoto = isGalleryOpen ? photos[activePhotoIndex] : null;

    const showPreviousPhoto = useCallback(() => {
        setActivePhotoIndex((current) =>
            current === 0 ? photos.length - 1 : current - 1,
        );
    }, [photos.length]);

    const showNextPhoto = useCallback(() => {
        setActivePhotoIndex((current) =>
            current === photos.length - 1 ? 0 : current + 1,
        );
    }, [photos.length]);

    const closeGallery = useCallback(() => {
        setActivePhotoIndex(null);
    }, []);

    useEffect(() => {
        if (!isGalleryOpen) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") closeGallery();
            if (event.key === "ArrowLeft") showPreviousPhoto();
            if (event.key === "ArrowRight") showNextPhoto();
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        closeGallery,
        isGalleryOpen,
        photos.length,
        showNextPhoto,
        showPreviousPhoto,
    ]);

    if (!selectedCategory) {
        return (
            <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0F0F0F] px-6 text-center text-[#F4F4F5]">
                <h1 className="font-['Cormorant_Garamond'] text-5xl">
                    Categoria não encontrada
                </h1>

                <p className="mt-4 text-[#A1A1AA]">
                    Não encontramos essa categoria no portfólio.
                </p>

                <Link
                    to="/"
                    className="mt-8 border border-[#D4AF37] px-6 py-3 text-sm uppercase tracking-widest text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                >
                    Voltar ao início
                </Link>
            </section>
        );
    }

    return (
        <>
            <section className="min-h-screen bg-[#0F0F0F] px-5 py-20 text-[#F4F4F5] sm:px-8 sm:py-28">
                <div className="mx-auto max-w-7xl">
                    <Link
                        to="/#portfolio"
                        className="mb-10 inline-flex items-center gap-2 text-sm text-[#D4AF37] transition hover:text-white"
                    >
                        <span aria-hidden="true">←</span>
                        Voltar ao portfólio
                    </Link>

                    <header className="mb-12">
                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                            Aura Fotografia · Portfólio
                        </p>

                        <h1 className="font-['Cormorant_Garamond'] text-5xl font-medium sm:text-7xl">
                            {selectedCategory.title}
                        </h1>

                        <p className="mt-4 max-w-xl leading-7 text-[#A1A1AA]">
                            {selectedCategory.description}
                        </p>
                    </header>

                    {photos.length > 0 ? (
                        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                            {photos.map((photo, index) => (
                                <button
                                    key={photo.src}
                                    type="button"
                                    onClick={() => setActivePhotoIndex(index)}
                                    aria-label={`Abrir fotografia ${index + 1}`}
                                    className="group mb-5 block w-full break-inside-avoid cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                                >
                                    <img
                                        src={photo.src}
                                        alt={`${selectedCategory.title} — fotografia ${index + 1}`}
                                        loading="lazy"
                                        className="block h-auto w-full transition duration-500 group-hover:scale-[1.02] group-hover:opacity-90"
                                    />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                            <img
                                src={selectedCategory.image}
                                alt={selectedCategory.title}
                                className="h-[420px] w-full object-cover sm:h-[560px]"
                            />

                            <div className="py-8 md:px-8">
                                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                                    Uma história em cada imagem
                                </p>

                                <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl sm:text-5xl">
                                    Cada momento merece ser lembrado.
                                </h2>

                                <p className="mt-5 leading-7 text-[#A1A1AA]">
                                    Estamos preparando esta galeria com registros especiais.
                                    Em breve, você poderá explorar mais fotografias desta
                                    categoria.
                                </p>

                                <Link
                                    to="/#contact"
                                    className="mt-8 inline-block border border-[#D4AF37] px-6 py-3 text-sm uppercase tracking-widest text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                                >
                                    Entre em contato
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {isGalleryOpen && activePhoto && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Galeria de ${selectedCategory.title}`}
                    onClick={closeGallery}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]/95 p-4 backdrop-blur-sm sm:p-8"
                >
                    <button
                        type="button"
                        onClick={closeGallery}
                        aria-label="Fechar galeria"
                        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-3xl text-[#F4F4F5] transition hover:text-[#D4AF37] sm:right-8 sm:top-8"
                    >
                        &times;
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPreviousPhoto();
                        }}
                        aria-label="Fotografia anterior"
                        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl text-[#F4F4F5] transition hover:text-[#D4AF37] sm:left-6 sm:h-14 sm:w-14"
                    >
                        &#8249;
                    </button>

                    <div
                        className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            key={activePhoto.src}
                            src={activePhoto.src}
                            alt={`${selectedCategory.title} — fotografia ${activePhotoIndex + 1}`}
                            className="max-h-[78vh] max-w-[calc(100%-3rem)] object-contain sm:max-w-[calc(100%-7rem)]"
                        />

                        <p className="text-xs tracking-[0.2em] text-[#A1A1AA]">
                            {String(activePhotoIndex + 1).padStart(2, "0")}
                            {" / "}
                            {String(photos.length).padStart(2, "0")}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNextPhoto();
                        }}
                        aria-label="Próxima fotografia"
                        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl text-[#F4F4F5] transition hover:text-[#D4AF37] sm:right-6 sm:h-14 sm:w-14"
                    >
                        &#8250;
                    </button>
                </div>
            )}
        </>
    );
}
