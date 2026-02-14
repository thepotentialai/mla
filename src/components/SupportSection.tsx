import { Link } from 'react-router-dom';

const SupportSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Soutien & Ressources
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {/* Card 1: Vous n'êtes pas seul */}
                    <div className="bg-white p-8 shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                            Vous n'êtes pas seul.
                        </h3>

                        <div className="flex items-center justify-center">
                            <a href="https://wa.me/22892888822" className="text-lg flex items-center text-pink-600 font-medium hover:text-pink-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                (+228) 92888822
                            </a>
                        </div>

                        <div className="mb-6 flex items-center justify-center">
                            <a href="mailto:eboffice@mladoctors.org" className="text-lg flex items-center text-pink-600 font-medium hover:text-pink-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                eboffice@mladoctors.org
                            </a>
                        </div>

                        <p className="text-gray-700">
                            Notre <Link to="mailto:eboffice@mladoctors.org" className="text-pink-600 hover:underline">ligne d'assistance santé</Link> offre un soutien gratuit par des professionnels de santé formés, ainsi qu'une orientation vers des ressources locales. <span className="font-semibold">Lun-Ven 8h à 18h.</span>
                        </p>

                        <p className="text-gray-700 mt-4 font-semibold">
                            Assistance disponible en langue française et enlangues locales.
                        </p>
                    </div>

                    {/* Card 2: Nous sommes là pour vous */}
                    <div className="bg-white p-8 shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                            Nous sommes là pour vous.
                        </h3>

                        <div className="mb-6 flex items-center justify-center">
                            <Link to="/aide-financiere" className="text-lg flex items-center text-pink-600 font-medium hover:text-pink-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                </svg>
                                Programmes d'Aide et Initiatives Solidaires
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        <p className="text-gray-700">
                            Ne laissez pas les difficultés financières vous empêcher d'accéder aux soins dont vous avez besoin. Nos aides et services accessibles sont là pour vous soutenir.
                        </p>
                    </div>

                    {/* Card 3: Ressources Médicales */}
                    <div className="bg-white p-8 shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                            Ressources Médicales
                        </h3>

                        <div className="mb-6 flex items-center justify-center">
                            <Link to="/cancer-seins" className="text-lg flex items-center text-pink-600 font-medium hover:text-pink-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                </svg>
                                Informations & Documentation
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        <p className="text-gray-700">
                            Accédez aux dernières informations sur les facteurs de risque, le dépistage, le diagnostic et le traitement des principales maladies non transmissibles au Togo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;