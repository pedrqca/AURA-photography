const imageModules = import.meta.glob(
    "../portfolio/**/*.{jpg,jpeg,png,webp,avif}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const portfolioImages = Object.entries(imageModules).reduce(
    (gallery, [path, imageUrl]) => {
        const match = path.match(/\/portfolio\/([^/]+)\/([^/]+)$/);

        if (!match) return gallery;

        const [, folder, name] = match;

        if (!gallery[folder]) {
            gallery[folder] = [];
        }

        gallery[folder].push({
            src: imageUrl,
            name,
        });

        return gallery;
    },
    {}
);

Object.values(portfolioImages).forEach((images) => {
    images.sort((a, b) => a.name.localeCompare(b.name));
});

export default portfolioImages;
