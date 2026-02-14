import Banner from "../../../../components/Banner.tsx";
import banner from "../../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../../components/Fancybox.tsx";

// Import des images du tour MLA 2017
import img2017_1 from "../../../../assets/images/J1/DSC_2257.jpg";
import img2017_2 from "../../../../assets/images/J1/DSC_2259.jpg";
import img2017_3 from "../../../../assets/images/J1/DSC_2261.jpg";
import img2017_4 from "../../../../assets/images/J1/DSC_2271.jpg";
import img2017_5 from "../../../../assets/images/J1/DSC_2273.jpg";
import img2017_6 from "../../../../assets/images/J1/DSC_2278.jpg";
import img2017_7 from "../../../../assets/images/J1/DSC_2279.jpg";
import img2017_8 from "../../../../assets/images/J1/DSC_2281.jpg";
import img2017_9 from "../../../../assets/images/J1/DSC_2285.jpg";
import img2017_10 from "../../../../assets/images/J1/DSC_2286.jpg";
import img2017_11 from "../../../../assets/images/J1/DSC_2287.jpg";
import img2017_12 from "../../../../assets/images/J1/DSC_2288.jpg";

interface TourImage {
    image: string;
    title: string;
}

function Page() {
    const tourImages: TourImage[] = [
        { image: img2017_1, title: "MLA Tour Rose 2017 - Naissance du projet" },
        { image: img2017_2, title: "MLA Tour Rose 2017 - Premiers pas" },
        { image: img2017_3, title: "MLA Tour Rose 2017 - Vision pionnière" },
        { image: img2017_4, title: "MLA Tour Rose 2017 - Équipe fondatrice" },
        { image: img2017_5, title: "MLA Tour Rose 2017 - Engagement initial" },
        { image: img2017_6, title: "MLA Tour Rose 2017 - Communauté témoin" },
        { image: img2017_7, title: "MLA Tour Rose 2017 - Innovation naissante" },
        { image: img2017_8, title: "MLA Tour Rose 2017 - Espoir collectif" },
        { image: img2017_9, title: "MLA Tour Rose 2017 - Détermination" },
        { image: img2017_10, title: "MLA Tour Rose 2017 - Première réussite" },
        { image: img2017_11, title: "MLA Tour Rose 2017 - Base solide" },
        { image: img2017_12, title: "MLA Tour Rose 2017 - Avenir prometteur" },
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="MLA Tour Rose 2017" description="Naissance d'une vision révolutionnaire" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs items={[
                    {title: "Activités", href: "/activites"},
                    {title: "MLA Tour Rose", href: "/activites/mla_tour"},
                    {title: "MLA Tour Rose 2017"}
                ]}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            MLA Tour Rose 2017 - L'Origine
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            L'année 2017 marque la naissance du MLA Tour Rose, un projet visionnaire qui allait 
                            révolutionner l'approche de la prévention du cancer du sein au Togo. 
                            Cette première édition, portée par un groupe d'étudiants en médecine passionnés et 
                            déterminés, a posé les fondations de ce qui deviendrait l'un des programmes de santé 
                            communautaire les plus impactants de la région.
                        </p>
                        <p>
                            Avec des moyens limités mais une vision claire, cette édition pilote a permis de 
                            tester notre concept, d'identifier les besoins réels des communautés et de développer 
                            une méthodologie d'intervention adaptée au contexte local. Les résultats encourageants 
                            et l'accueil chaleureux des populations ont confirmé la pertinence de notre approche 
                            et ont motivé l'équipe à persévérer et à élargir le programme.
                        </p>
                    </div>


                    {/* Photo Gallery */}
                    <div className="transition-all duration-300 ease-in-out">
                        {/* <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Galerie Photos - Edition Fondatrice 2017</h3> */}
                        <Fancybox
                            options={{
                                Carousel: { infinite: true },
                                Thumbs: { autoStart: true },
                                Toolbar: {
                                    display: {
                                        left: ["infobar"],
                                        middle: [
                                            "zoomIn",
                                            "zoomOut",
                                            "toggle1to1",
                                            "rotateCCW",
                                            "rotateCW",
                                            "flipX",
                                            "flipY",
                                        ],
                                        right: ["slideshow", "thumbs", "close"],
                                    },
                                },
                            }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-fadeIn">
                                {tourImages.map((item: TourImage, index: number) => (
                                    <div 
                                        key={`2017-${index}`} 
                                        className="bg-white overflow-hidden transition-all duration-200 transform"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <a
                                            href={item.image}
                                            data-fancybox="mla-tour-2017"
                                            data-caption={item.title}
                                            className="block relative group"
                                        >
                                            <img
                                                src={item.image}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                                <div className="text-white opacity-0 group-hover:opacity-90 transition-opacity duration-200 bg-transparent bg-opacity-30 rounded-full p-3">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-600 text-center">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fancybox>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center space-x-4 mt-12">
                        <a 
                            href="/activites/mla_tour" 
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
                        >
                            ← Retour aux Tours
                        </a>
                        <a 
                            href="/activites/mla_tour/2018" 
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                        >
                            Tour 2018 →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
