import Banner from "../../../../components/Banner.tsx";
import banner from "../../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../../components/Fancybox.tsx";

// Import des images du tour MLA 2018
import img2018_1 from "../../../../assets/images/J1/DSC_2290.jpg";
import img2018_2 from "../../../../assets/images/J1/DSC_2291.jpg";
import img2018_3 from "../../../../assets/images/J1/DSC_2292.jpg";
import img2018_4 from "../../../../assets/images/J1/DSC_2293.jpg";
import img2018_5 from "../../../../assets/images/J1/DSC_2295.jpg";
import img2018_6 from "../../../../assets/images/J1/DSC_2302.jpg";
import img2018_7 from "../../../../assets/images/J1/DSC_2303.jpg";
import img2018_8 from "../../../../assets/images/J1/DSC_2305.jpg";
import img2018_9 from "../../../../assets/images/J1/DSC_2307.jpg";
import img2018_10 from "../../../../assets/images/J1/DSC_2309.jpg";
import img2018_11 from "../../../../assets/images/J1/DSC_2311.jpg";
import img2018_12 from "../../../../assets/images/J1/DSC_2312.jpg";

interface TourImage {
    image: string;
    title: string;
}

function Page() {
    const tourImages: TourImage[] = [
        { image: img2018_1, title: "MLA Tour Rose 2018 - Consolidation des acquis" },
        { image: img2018_2, title: "MLA Tour Rose 2018 - Élargissement territorial" },
        { image: img2018_3, title: "MLA Tour Rose 2018 - Équipe renforcée" },
        { image: img2018_4, title: "MLA Tour Rose 2018 - Nouvelles méthodes" },
        { image: img2018_5, title: "MLA Tour Rose 2018 - Impact amplifié" },
        { image: img2018_6, title: "MLA Tour Rose 2018 - Partenariats locaux" },
        { image: img2018_7, title: "MLA Tour Rose 2018 - Formation continue" },
        { image: img2018_8, title: "MLA Tour Rose 2018 - Sensibilisation active" },
        { image: img2018_9, title: "MLA Tour Rose 2018 - Dépistage systématique" },
        { image: img2018_10, title: "MLA Tour Rose 2018 - Suivi personnalisé" },
        { image: img2018_11, title: "MLA Tour Rose 2018 - Communauté engagée" },
        { image: img2018_12, title: "MLA Tour Rose 2018 - Résultats encourageants" },
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="MLA Tour Rose 2018" description="Consolidation et élargissement de notre impact" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs items={[
                    {title: "Activités", href: "/activites"},
                    {title: "MLA Tour Rose", href: "/activites/mla_tour"},
                    {title: "MLA Tour Rose 2018"}
                ]}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            MLA Tour Rose 2018 - Consolidation et Croissance
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            L'édition 2018 du MLA Tour Rose a marqué une phase de consolidation et d'élargissement 
                            significatif de notre programme. Fort des enseignements tirés de l'expérience pilote 
                            de 2017, nous avons pu affiner notre approche, professionnaliser nos interventions 
                            et étendre notre couverture géographique vers de nouvelles communautés.
                        </p>
                        <p>
                            Cette année a été caractérisée par le renforcement de notre équipe avec l'arrivée 
                            de nouveaux bénévoles qualifiés, l'amélioration de nos protocoles de dépistage et 
                            l'établissement de partenariats durables avec les structures sanitaires locales. 
                            Le programme a gagné en crédibilité et en reconnaissance, attirant l'attention 
                            des autorités sanitaires et des organisations partenaires.
                        </p>
                    </div>
                    

                    {/* Photo Gallery */}
                    <div className="transition-all duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Galerie Photos - Edition 2018</h3>
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
                                        key={`2018-${index}`} 
                                        className="bg-white overflow-hidden transition-all duration-200 transform"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <a
                                            href={item.image}
                                            data-fancybox="mla-tour-2018"
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
                    <div className="flex justify-between mt-12">
                        <a 
                            href="/activites/mla_tour/2017" 
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
                        >
                            ← Tour 2017
                        </a>
                        <a 
                            href="/activites/mla_tour" 
                            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-semibold"
                        >
                            Tous les Tours
                        </a>
                        <a 
                            href="/activites/mla_tour/2019" 
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                        >
                            Tour 2019 →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
