import img_2 from '../assets/images/activites/activity-image-1.jpeg'
import img_1 from '../assets/images/activites/activity-image-2.jpeg' 
import img_3 from '../assets/images/J1/DSC_2408.jpg'

const FeatureSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-16">
                {/* Section title */}
                <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
                    Nos dernières activités
                </h2>

                {/* Articles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Article 1 */}
                    <div className="relative flex flex-col">
                        <div className="h-52 md:h-60 overflow-hidden">
                            <img
                                src={img_1}
                                alt="Sensibilisation dans une école"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-pink-600 text-white p-10 flex-grow relative">
                            <h3 className="text-xl font-bold mb-4">
                                Sensibilisation sur l’hypertension dans les lycées
                            </h3>
                            <p className="mb-8 text-lg">
                                Une campagne de dépistage et de sensibilisation a été organisée dans trois établissements scolaires à Lomé.
                            </p>
                            <div className="absolute -bottom-4 -left-0">
                                <a
                                    href="#"
                                    className="inline-block bg-black text-white py-2 px-6 font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="relative flex flex-col">
                        <div className="h-52 md:h-60 overflow-hidden">
                            <img
                                src={img_2}
                                alt="Dépistage communautaire"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-pink-600 text-white p-6 flex-grow relative">
                            <h3 className="text-xl font-bold mb-4">
                                Campagne de dépistage du diabète à Sokodé
                            </h3>
                            <p className="mb-8 text-lg">
                                Nos équipes ont effectué des dépistages gratuits pour plus de 200 personnes dans les zones rurales.
                            </p>
                            <div className="absolute -bottom-4 -left-0">
                                <a
                                    href="#"
                                    className="inline-block bg-black text-white py-2 px-6 font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Article 3 */}
                    <div className="relative flex flex-col">
                        <div className="h-52 md:h-60 overflow-hidden">
                            <img
                                src={img_3}
                                alt="Conférence sur la santé publique"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-pink-600 text-white p-6 flex-grow relative">
                            <h3 className="text-xl font-bold mb-4">
                                Conférence : Prévention des maladies non transmissibles
                            </h3>
                            <p className="mb-8 text-lg">
                                Une journée de conférence avec des experts médicaux pour parler des enjeux de santé publique.
                            </p>
                            <div className="absolute -bottom-4 -left-0">
                                <a
                                    href="#"
                                    className="inline-block bg-black text-white py-2 px-6 font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lien vers tous les articles */}
                <div className="text-center mt-12">
                    <a
                        href="/blog"
                        className="text-pink-600 text-lg font-medium hover:underline inline-flex items-center"
                    >
                        Voir toutes nos actualités
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
