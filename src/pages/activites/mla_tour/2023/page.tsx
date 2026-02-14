import Banner from "../../../../components/Banner.tsx";
import banner from "../../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../../components/Fancybox.tsx";

// Import des images du tour MLA 2023
import img2023_1 from "../../../../assets/images/J1/DSC_2197.jpg";
import img2023_2 from "../../../../assets/images/J1/DSC_2198.jpg";
import img2023_3 from "../../../../assets/images/J1/DSC_2200.jpg";
import img2023_4 from "../../../../assets/images/J1/DSC_2204.jpg";
import img2023_5 from "../../../../assets/images/J1/DSC_2208.jpg";
import img2023_6 from "../../../../assets/images/J1/DSC_2209.jpg";
import img2023_7 from "../../../../assets/images/J1/DSC_2213.jpg";
import img2023_8 from "../../../../assets/images/J1/DSC_2214.jpg";
import img2023_9 from "../../../../assets/images/J1/DSC_2216.jpg";
import img2023_10 from "../../../../assets/images/J1/DSC_2217.jpg";
import img2023_11 from "../../../../assets/images/J1/DSC_2221.jpg";
import img2023_12 from "../../../../assets/images/J1/DSC_2222.jpg";

interface TourImage {
    image: string;
    title: string;
}

function Page() {
    const tourImages: TourImage[] = [
        { image: img2023_1, title: "MLA Tour Rose 2023 - Innovation santé digitale" },
        { image: img2023_2, title: "MLA Tour Rose 2023 - Télémédecine intégrée" },
        { image: img2023_3, title: "MLA Tour Rose 2023 - Formation continue" },
        { image: img2023_4, title: "MLA Tour Rose 2023 - Partenariats stratégiques" },
        { image: img2023_5, title: "MLA Tour Rose 2023 - Expansion territoriale" },
        { image: img2023_6, title: "MLA Tour Rose 2023 - Impact mesurable" },
        { image: img2023_7, title: "MLA Tour Rose 2023 - Technologies de pointe" },
        { image: img2023_8, title: "MLA Tour Rose 2023 - Expertise renforcée" },
        { image: img2023_9, title: "MLA Tour Rose 2023 - Communautés connectées" },
        { image: img2023_10, title: "MLA Tour Rose 2023 - Prévention 3.0" },
        { image: img2023_11, title: "MLA Tour Rose 2023 - Excellence opérationnelle" },
        { image: img2023_12, title: "MLA Tour Rose 2023 - Vision d'avenir" },
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="MLA Tour Rose 2023" description="Innovation technologique au service de la prévention" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs items={[
                    {title: "Activités", href: "/activites"},
                    {title: "MLA Tour Rose", href: "/activites/mla_tour"},
                    {title: "MLA Tour Rose 2023"}
                ]}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            MLA Tour Rose 2023 - Innovation Technologique
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            L'édition 2023 du MLA Tour Rose représente un bond en avant dans l'intégration des 
                            technologies numériques au service de la santé communautaire. Cette année, nous avons 
                            lancé notre plateforme de télémédecine, développé des applications mobiles de suivi 
                            médical et mis en place un système de dossiers médicaux électroniques pour nos bénéficiaires.
                        </p>
                        <p>
                            Grâce à ces innovations, nous avons pu étendre notre portée géographique tout en maintenant 
                            la qualité de nos services. L'introduction de l'intelligence artificielle pour l'aide au 
                            diagnostic et la formation de nos équipes aux nouvelles technologies ont permis d'optimiser 
                            nos interventions et d'améliorer significativement le suivi de nos patients.
                        </p>
                    </div>

                    {/* Photo Gallery */}
                    <div className="transition-all duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Galerie Photos - Edition 2023</h3>
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
                                        key={`2023-${index}`} 
                                        className="bg-white overflow-hidden transition-all duration-200 transform"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <a
                                            href={item.image}
                                            data-fancybox="mla-tour-2023"
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
                            href="/activites/mla_tour/2022" 
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
                        >
                            ← Tour 2022
                        </a>
                        <a 
                            href="/activites/mla_tour" 
                            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-semibold"
                        >
                            Tous les Tours
                        </a>
                        <a 
                            href="/activites/mla_tour/2024" 
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                        >
                            Tour 2024 →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
