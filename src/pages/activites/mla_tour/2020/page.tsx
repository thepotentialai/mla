import Banner from "../../../../components/Banner.tsx";
import banner from "../../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../../components/Fancybox.tsx";

// Import des images du tour MLA 2020
import img2020_1 from "../../../../assets/images/J1/DSC_2128.jpg";
import img2020_2 from "../../../../assets/images/J1/DSC_2130.jpg";
import img2020_3 from "../../../../assets/images/J1/DSC_2132.jpg";
import img2020_4 from "../../../../assets/images/J1/DSC_2133.jpg";
import img2020_5 from "../../../../assets/images/J1/DSC_2134.jpg";
import img2020_6 from "../../../../assets/images/J1/DSC_2135.jpg";
import img2020_7 from "../../../../assets/images/J1/DSC_2136.jpg";
import img2020_8 from "../../../../assets/images/J1/DSC_2138.jpg";
import img2020_9 from "../../../../assets/images/J1/DSC_2139.jpg";
import img2020_10 from "../../../../assets/images/J1/DSC_2141.jpg";
import img2020_11 from "../../../../assets/images/J1/DSC_2142.jpg";
import img2020_12 from "../../../../assets/images/J1/DSC_2144.jpg";

interface TourImage {
    image: string;
    title: string;
}

function Page() {
    const tourImages: TourImage[] = [
        { image: img2020_1, title: "MLA Tour Rose 2020 - Dépistage communautaire" },
        { image: img2020_2, title: "MLA Tour Rose 2020 - Consultation médicale" },
        { image: img2020_3, title: "MLA Tour Rose 2020 - Sensibilisation" },
        { image: img2020_4, title: "MLA Tour Rose 2020 - Équipe médicale" },
        { image: img2020_5, title: "MLA Tour Rose 2020 - Examens préventifs" },
        { image: img2020_6, title: "MLA Tour Rose 2020 - Communauté engagée" },
        { image: img2020_7, title: "MLA Tour Rose 2020 - Formation sanitaire" },
        { image: img2020_8, title: "MLA Tour Rose 2020 - Prise en charge" },
        { image: img2020_9, title: "MLA Tour Rose 2020 - Bénévoles actifs" },
        { image: img2020_10, title: "MLA Tour Rose 2020 - Impact local" },
        { image: img2020_11, title: "MLA Tour Rose 2020 - Services gratuits" },
        { image: img2020_12, title: "MLA Tour Rose 2020 - Mission accomplie" },
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="MLA Tour Rose 2020" description="Première édition de notre programme de dépistage communautaire" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs items={[
                    {title: "Activités", href: "/activites"},
                    {title: "MLA Tour Rose", href: "/activites/mla_tour"},
                    {title: "MLA Tour Rose 2020"}
                ]}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            MLA Tour Rose 2020 - Première Édition
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            En 2020, nous avons lancé la première édition du MLA Tour Rose, marquant le début de notre engagement 
                            communautaire dans la lutte contre les maladies non transmissibles. Cette année fondatrice a posé 
                            les bases de notre approche innovante de dépistage gratuit au cœur des communautés.
                        </p>
                        <p>
                            Malgré les défis liés à la pandémie de COVID-19, notre équipe de jeunes médecins et étudiants en 
                            médecine s'est mobilisée pour offrir des consultations préventives, des dépistages et des 
                            sensibilisations dans plusieurs localités. Cette première expérience nous a permis de comprendre 
                            les besoins réels des populations et d'affiner notre méthodologie d'intervention.
                        </p>
                    </div>


                    {/* Photo Gallery */}
                    <div className="transition-all duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Galerie Photos - Edition 2020</h3>
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
                                        key={`2020-${index}`} 
                                        className="bg-white overflow-hidden transition-all duration-200 transform"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <a
                                            href={item.image}
                                            data-fancybox="mla-tour-2020"
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
                            href="/activites/mla_tour/2019" 
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
                        >
                            ← Tour 2019
                        </a>
                        <a 
                            href="/activites/mla_tour" 
                            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-semibold"
                        >
                            Tous les Tours
                        </a>
                        <a 
                            href="/activites/mla_tour/2021" 
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                        >
                            Tour 2021 →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
