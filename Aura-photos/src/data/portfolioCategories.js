
import portfolioImages from "./portfolioImages";

const getCategoryImage = (folder, name) =>
    portfolioImages[folder]?.find((image) => image.name === name)?.src;

const portfolioCategories = [
    {
        id: "casamentos",
        galleryFolder: "casamento",
        title: "Casamentos",
        description: "Histórias de amor contadas em cada detalhe.",
        image: getCategoryImage("casamento", "casamento.jpg"),
        photos: [],
        details:
            "Um registro sensível e autêntico de um dos dias mais marcantes da vida. A proposta é preservar emoções, encontros e pequenos detalhes que tornam cada celebração única.",
        offerings: [
            "Registro da cerimônia e dos momentos especiais",
            "Fotografias espontâneas do casal e dos convidados",
            "Possibilidade de ensaio pré-wedding",
            "Opções de álbum e fotografias impressas",
        ],
    },
    {
        id: "aniversarios",
        galleryFolder: "aniversario",
        title: "Aniversários",
        description: "Celebrações que merecem ser eternizadas.",
        image: getCategoryImage("aniversario", "aniversario.jpg"),
        photos: [],
        details:
            "Uma coleção de lembranças da celebração, dos sorrisos e das pessoas que fazem parte desse dia. Cada registro busca preservar a energia e a personalidade do evento.",
        offerings: [
            "Registro dos principais momentos da festa",
            "Fotografias de decoração e detalhes",
            "Retratos do aniversariante e dos convidados",
            "Seleção de imagens para guardar e compartilhar",
        ],
    },
    {
        id: "cha-de-bebe",
        galleryFolder: "cha-de-bebe",
        title: "Chás de bebê",
        description: "A emoção de esperar por uma nova vida.",
        image: getCategoryImage("cha-de-bebe", "cha-de-bebe.jpg"),
        photos: [],
        details:
            "Um registro delicado da expectativa, do carinho e dos encontros que antecedem a chegada de uma nova vida, valorizando tanto os detalhes quanto as emoções.",
        offerings: [
            "Fotografias da decoração e dos preparativos",
            "Registro das brincadeiras e homenagens",
            "Retratos da família e dos convidados",
            "Momentos espontâneos e afetivos",
        ],
    },
    {
        id: "ensaios",
        galleryFolder: "ensaio-fotografico",
        title: "Ensaios fotográficos",
        description: "Sua essência, sua história, seu momento.",
        image: getCategoryImage(
            "ensaio-fotografico",
            "ensaio-fotografico.jpg",
        ),
        photos: [],
        details:
            "Uma experiência fotográfica pensada para valorizar a personalidade de cada pessoa. A proposta é criar imagens naturais, respeitando o estilo, as preferências e a história de quem está diante da câmera.",
        offerings: [
            "Planejamento do conceito e da proposta do ensaio",
            "Orientação durante as fotografias",
            "Sugestões de poses e cenários",
            "Seleção de imagens para edição",
        ],
    },
    {
        id: "familias",
        galleryFolder: "familias",
        title: "Famílias",
        description: "Laços e memórias para a vida inteira.",
        image: getCategoryImage("familias", "familias.jpg"),
        photos: [],
        details:
            "Fotografias que celebram os vínculos, as particularidades e a espontaneidade de cada família. Um momento para estar junto e transformar essa conexão em lembranças duradouras.",
        offerings: [
            "Retratos individuais e em grupo",
            "Fotografias espontâneas e dirigidas",
            "Possibilidade de ensaios ao ar livre",
            "Registros de diferentes gerações",
        ],
    },
];

export default portfolioCategories;
