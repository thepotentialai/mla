import Banner from "../../../../components/Banner.tsx";
import banner from "../../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../../components/Fancybox.tsx";

// Import des images du tour MLA 2022
import img2022_1 from "../../../../assets/images/J1/DSC_2172.jpg";
import img2022_2 from "../../../../assets/images/J1/DSC_2173.jpg";
import img2022_3 from "../../../../assets/images/J1/DSC_2181.jpg";
import img2022_4 from "../../../../assets/images/J1/DSC_2183.jpg";
import img2022_5 from "../../../../assets/images/J1/DSC_2184.jpg";
import img2022_6 from "../../../../assets/images/J1/DSC_2185.jpg";
import img2022_7 from "../../../../assets/images/J1/DSC_2187.jpg";
import img2022_8 from "../../../../assets/images/J1/DSC_2188.jpg";
import img2022_9 from "../../../../assets/images/J1/DSC_2190.jpg";
import img2022_10 from "../../../../assets/images/J1/DSC_2191.jpg";
import img2022_11 from "../../../../assets/images/J1/DSC_2192.jpg";
import img2022_12 from "../../../../assets/images/J1/DSC_2193.jpg";

interface TourImage {
    image: string;
    title: string;
}

function Page() {
    const tourImages: TourImage[] = [
        { image: img2022_1, title: "MLA Tour Rose 2022 - Retour terrain renforcé" },
        { image: img2022_2, title: "MLA Tour Rose 2022 - Dépistage cancer du sein" },
        { image: img2022_3, title: "MLA Tour Rose 2022 - Hypertension contrôlée" },
        { image: img2022_4, title: "MLA Tour Rose 2022 - Diabète dépisté" },
        { image: img2022_5, title: "MLA Tour Rose 2022 - Bilan complet gratuit" },
        { image: img2022_6, title: "MLA Tour Rose 2022 - Accompagnement personnalisé" },
        { image: img2022_7, title: "MLA Tour Rose 2022 - Équipe renforcée" },
        { image: img2022_8, title: "MLA Tour Rose 2022 - Technologies modernes" },
        { image: img2022_9, title: "MLA Tour Rose 2022 - Sensibilisation active" },
        { image: img2022_10, title: "MLA Tour Rose 2022 - Communautés rurales" },
        { image: img2022_11, title: "MLA Tour Rose 2022 - Impact mesurable" },
        { image: img2022_12, title: "MLA Tour Rose 2022 - Prévention efficace" },
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="MLA Tour Rose 2022" description="Expansion et innovation dans la prévention communautaire" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs items={[
                    {title: "Activités", href: "/activites"},
                    {title: "MLA Tour Rose", href: "/activites/mla_tour"},
                    {title: "MLA Tour Rose 2022"}
                ]}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            MLA Tour Rose 2022 - Expansion et Innovation
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            L'édition 2022 du MLA Tour Rose marque un tournant dans notre approche de la prévention 
                            communautaire. Fort de l'expérience acquise lors des éditions précédentes, nous avons 
                            élargi notre champ d'intervention et intégré des technologies innovantes pour améliorer 
                            la qualité de nos dépistages et le suivi de nos bénéficiaires.
                        </p>
                        <p>
                            Cette année a été caractérisée par l'introduction de nouveaux protocoles de dépistage, 
                            l'élargissement de notre équipe médicale et le renforcement de nos partenariats locaux. 
                            Nous avons particulièrement mis l'accent sur le dépistage du cancer du sein, de l'hypertension 
                            artérielle et du diabète, avec des résultats remarquables en termes de détection précoce.
                        </p>
                    </div>

                    {/* Photo Gallery */}
                    <div className="transition-all duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Galerie Photos - Edition 2022</h3>
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
                                        key={`2022-${index}`} 
                                        className="bg-white overflow-hidden transition-all duration-200 transform"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <a
                                            href={item.image}
                                            data-fancybox="mla-tour-2022"
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
                            href="/activites/mla_tour/2021" 
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
                        >
                            ← Tour 2021
                        </a>
                        <a 
                            href="/activites/mla_tour" 
                            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-semibold"
                        >
                            Tous les Tours
                        </a>
                        <a 
                            href="/activites/mla_tour/2023" 
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                        >
                            Tour 2023 →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
