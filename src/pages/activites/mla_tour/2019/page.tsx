import Banner from "../../../../components/Banner.tsx";
import banner from "../../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../../components/Fancybox.tsx";

// Import des images du tour MLA 2019
import img2019_1 from "../../../../assets/images/J1/DSC_2313.jpg";
import img2019_2 from "../../../../assets/images/J1/DSC_2315.jpg";
import img2019_3 from "../../../../assets/images/J1/DSC_2316.jpg";
import img2019_4 from "../../../../assets/images/J1/DSC_2317.jpg";
import img2019_5 from "../../../../assets/images/J1/DSC_2322.jpg";
import img2019_6 from "../../../../assets/images/J1/DSC_2325.jpg";
import img2019_7 from "../../../../assets/images/J1/DSC_2329.jpg";
import img2019_8 from "../../../../assets/images/J1/DSC_2330.jpg";
import img2019_9 from "../../../../assets/images/J1/DSC_2331.jpg";
import img2019_10 from "../../../../assets/images/J1/DSC_2332.jpg";
import img2019_11 from "../../../../assets/images/J1/DSC_2333.jpg";
import img2019_12 from "../../../../assets/images/J1/DSC_2334.jpg";

interface TourImage {
    image: string;
    title: string;
}

function Page() {
    const tourImages: TourImage[] = [
        { image: img2019_1, title: "MLA Tour Rose 2019 - Maturité du programme" },
        { image: img2019_2, title: "MLA Tour Rose 2019 - Excellence opérationnelle" },
        { image: img2019_3, title: "MLA Tour Rose 2019 - Expertise reconnue" },
        { image: img2019_4, title: "MLA Tour Rose 2019 - Leadership affiché" },
        { image: img2019_5, title: "MLA Tour Rose 2019 - Impact social majeur" },
        { image: img2019_6, title: "MLA Tour Rose 2019 - Réseau étendu" },
        { image: img2019_7, title: "MLA Tour Rose 2019 - Innovation constante" },
        { image: img2019_8, title: "MLA Tour Rose 2019 - Qualité premium" },
        { image: img2019_9, title: "MLA Tour Rose 2019 - Engagement durable" },
        { image: img2019_10, title: "MLA Tour Rose 2019 - Communauté fidèle" },
        { image: img2019_11, title: "MLA Tour Rose 2019 - Préparation avenir" },
        { image: img2019_12, title: "MLA Tour Rose 2019 - Fondations solides" },
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="MLA Tour Rose 2019" description="Maturité et excellence opérationnelle" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs items={[
                    {title: "Activités", href: "/activites"},
                    {title: "MLA Tour Rose", href: "/activites/mla_tour"},
                    {title: "MLA Tour Rose 2019"}
                ]}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            MLA Tour Rose 2019 - Maturité et Excellence
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            L'édition 2019 du MLA Tour Rose représente l'aboutissement d'un processus de maturation 
                            remarquable. Après trois années d'expérience et d'apprentissage continu, le programme 
                            a atteint un niveau d'excellence opérationnelle qui en fait une référence en matière 
                            de santé communautaire. Cette année charnière a préparé les bases solides qui permettront 
                            de faire face aux défis extraordinaires qui attendent le programme en 2020.
                        </p>
                        <p>
                            L'équipe MLA, désormais experte et reconnue, a développé une approche holistique et 
                            intégrée de la prévention. L'innovation, la qualité des services, l'engagement 
                            communautaire et la durabilité sont devenus les piliers incontournables de chaque 
                            intervention. Cette édition a également marqué le lancement de programmes spécialisés 
                            et l'établissement de partenariats stratégiques durables.
                        </p>
                    </div>

                    {/* Photo Gallery */}
                    <div className="transition-all duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Galerie Photos - Edition 2019</h3>
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
                                        key={`2019-${index}`} 
                                        className="bg-white overflow-hidden transition-all duration-200 transform"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <a
                                            href={item.image}
                                            data-fancybox="mla-tour-2019"
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

                    {/* Legacy Message */}
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">Héritage de 2019</h3>
                        <p className="text-lg mb-6">
                            "Cette année a posé les fondations solides qui nous ont permis de traverser les défis 
                            extraordinaires de 2020 et de continuer à grandir jusqu'en 2024."
                        </p>
                        <div className="flex justify-center">
                            <div className="text-6xl">🏗️</div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between mt-12">
                        <a 
                            href="/activites/mla_tour/2018" 
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
                        >
                            ← Tour 2018
                        </a>
                        <a 
                            href="/activites/mla_tour" 
                            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-semibold"
                        >
                            Tous les Tours
                        </a>
                        <a 
                            href="/activites/mla_tour/2020" 
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                        >
                            Tour 2020 →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
