import Banner from "../../../../components/Banner.tsx";
import banner from "../../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../../components/Fancybox.tsx";

// Import des images du tour MLA 2021
import img2021_1 from "../../../../assets/images/J1/DSC_2145.jpg";
import img2021_2 from "../../../../assets/images/J1/DSC_2146.jpg";
import img2021_3 from "../../../../assets/images/J1/DSC_2147.jpg";
import img2021_4 from "../../../../assets/images/J1/DSC_2150.jpg";
import img2021_5 from "../../../../assets/images/J1/DSC_2151.jpg";
import img2021_6 from "../../../../assets/images/J1/DSC_2152.jpg";
import img2021_7 from "../../../../assets/images/J1/DSC_2153.jpg";
import img2021_8 from "../../../../assets/images/J1/DSC_2155.jpg";
import img2021_9 from "../../../../assets/images/J1/DSC_2157.jpg";
import img2021_10 from "../../../../assets/images/J1/DSC_2163.jpg";
import img2021_11 from "../../../../assets/images/J1/DSC_2164.jpg";
import img2021_12 from "../../../../assets/images/J1/DSC_2167.jpg";

interface TourImage {
    image: string;
    title: string;
}

function Page() {
    const tourImages: TourImage[] = [
        { image: img2021_1, title: "MLA Tour Rose 2021 - Dépistage COVID-19" },
        { image: img2021_2, title: "MLA Tour Rose 2021 - Mesures sanitaires" },
        { image: img2021_3, title: "MLA Tour Rose 2021 - Vaccination communautaire" },
        { image: img2021_4, title: "MLA Tour Rose 2021 - Support communautaire" },
        { image: img2021_5, title: "MLA Tour Rose 2021 - Prévention renforcée" },
        { image: img2021_6, title: "MLA Tour Rose 2021 - Solidarité en action" },
        { image: img2021_7, title: "MLA Tour Rose 2021 - Adaptation sanitaire" },
        { image: img2021_8, title: "MLA Tour Rose 2021 - Continuité des soins" },
        { image: img2021_9, title: "MLA Tour Rose 2021 - Innovation terrain" },
        { image: img2021_10, title: "MLA Tour Rose 2021 - Résilience communautaire" },
        { image: img2021_11, title: "MLA Tour Rose 2021 - Engagement maintenu" },
        { image: img2021_12, title: "MLA Tour Rose 2021 - Espoir partagé" },
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="MLA Tour Rose 2021" description="Adaptation et résilience face aux défis sanitaires" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs items={[
                    {title: "Activités", href: "/activites"},
                    {title: "MLA Tour Rose", href: "/activites/mla_tour"},
                    {title: "MLA Tour Rose 2021"}
                ]}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            MLA Tour Rose 2021 - Résilience et Adaptation
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            L'année 2021 a été marquée par notre capacité d'adaptation face à la pandémie de COVID-19. 
                            Le MLA Tour Rose 2021 a intégré de nouvelles mesures sanitaires tout en maintenant notre 
                            mission de dépistage et de prévention des maladies non transmissibles. Cette édition a démontré 
                            notre résilience et notre engagement indéfectible envers les communautés.
                        </p>
                        <p>
                            Nous avons mis en place des protocoles sanitaires stricts, des campagnes de vaccination, 
                            et des formations spécialisées pour notre équipe. Cette approche hybride nous a permis 
                            d'élargir notre impact tout en assurant la sécurité de tous les participants. L'innovation 
                            et la solidarité ont été au cœur de cette édition exceptionnelle.
                        </p>
                    </div>

                    {/* Photo Gallery */}
                    <div className="transition-all duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Galerie Photos - Edition 2021</h3>
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
                                        key={`2021-${index}`} 
                                        className="bg-white overflow-hidden transition-all duration-200 transform"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <a
                                            href={item.image}
                                            data-fancybox="mla-tour-2021"
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
                            href="/activites/mla_tour/2020" 
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
                        >
                            ← Tour 2020
                        </a>
                        <a 
                            href="/activites/mla_tour" 
                            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-semibold"
                        >
                            Tous les Tours
                        </a>
                        <a 
                            href="/activites/mla_tour/2022" 
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                        >
                            Tour 2022 →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
