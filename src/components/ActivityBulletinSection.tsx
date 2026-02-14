import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import ParticipantGuide from './ParticipantGuide';

interface BulletinData {
    month: string;
    year: string;
    type: 'current' | 'upcoming';
    description?: string;
    link?: string;
}

interface ActivityBulletinSectionProps {
    activeTab: string;
}

const ActivityBulletinSection = ({ activeTab }: ActivityBulletinSectionProps) => {
    const bulletinData: Record<string, BulletinData[]> = {
        'legal-resources': [
            {
                month: 'Août',
                year: '2025',
                type: 'current',
                description: 'Documentation légale et ressources juridiques actuelles',
                link: '#'
            },
            {
                month: 'Septembre',
                year: '2025',
                type: 'upcoming',
                description: 'Nouvelles directives et mises à jour légales',
                link: '#'
            }
        ],
        'visa-laws': [
            {
                month: 'Août',
                year: '2025',
                type: 'current',
                description: 'Dernières mises à jour des lois sur les visas américains',
                link: '#'
            },
            {
                month: 'Septembre',
                year: '2025',
                type: 'upcoming',
                description: 'Nouvelles politiques de visa en préparation',
                link: '#'
            }
        ],
        'judicial-assistance': [
            {
                month: 'Août',
                year: '2025',
                type: 'current',
                description: 'Informations d\'assistance judiciaire par pays',
                link: '#'
            },
            {
                month: 'Septembre',
                year: '2025',
                type: 'upcoming',
                description: 'Mises à jour des accords d\'assistance judiciaire',
                link: '#'
            }
        ]
    };

    const currentBulletins = bulletinData[activeTab]?.filter(b => b.type === 'current') || [];
    const upcomingBulletins = bulletinData[activeTab]?.filter(b => b.type === 'upcoming') || [];

    const BulletinCard = ({ bulletin, title }: { bulletin: BulletinData; title: string }) => (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="text-gray-600">Bulletin</p>
                </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-blue-600">{bulletin.month}</div>
                        <div className="text-2xl font-semibold text-blue-600">{bulletin.year}</div>
                    </div>
                </div>
            </div>
            
            {bulletin.description && (
                <p className="text-gray-700 mb-4">{bulletin.description}</p>
            )}
            
            {bulletin.link && (
                <a
                    href={bulletin.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                    Voir plus d'informations
                    <ExternalLink className="w-4 h-4 ml-2" />
                </a>
            )}
        </div>
    );

    const getTabTitle = () => {
        switch (activeTab) {
            case 'legal-resources':
                return 'Ressources Légales';
            case 'visa-laws':
                return 'Lois sur les Visas Américains';
            case 'judicial-assistance':
                return 'Assistance Judiciaire par Pays';
            default:
                return 'Bulletins d\'Activités';
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {getTabTitle()}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez nos dernières activités et initiatives dans le domaine {activeTab === 'legal-resources' ? 'des ressources légales' : activeTab === 'visa-laws' ? 'des lois sur les visas' : 'de l\'assistance judiciaire'}.
                </p>
            </div>

            {/* Main Content Layout */}
            <div className="grid lg:grid-cols-4 gap-8">
                {/* Bulletins Section */}
                <div className="lg:col-span-3">
                    {/* Bulletins Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Current Bulletin */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                            <Calendar className="w-6 h-6 text-green-600" />
                        </div>
                        Bulletin Actuel
                    </h2>
                    {currentBulletins.map((bulletin, index) => (
                        <BulletinCard 
                            key={index} 
                            bulletin={bulletin} 
                            title={`${bulletin.month} ${bulletin.year}`}
                        />
                    ))}
                </div>

                {/* Upcoming Bulletin */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        Bulletin à Venir
                    </h2>
                    {upcomingBulletins.map((bulletin, index) => (
                        <BulletinCard 
                            key={index} 
                            bulletin={bulletin} 
                            title={`${bulletin.month} ${bulletin.year}`}
                        />
                    ))}
                </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        NOTE: Dates de Publication et d'Archivage
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Les dates de publication finales et les dates de dépôt publiées dans les <em>Bulletins d'Activités</em> sur ce site sont listées au format JOUR-MOIS-ANNÉE (jj-mm-aa).
                    </p>
                    <p className="text-gray-700 mb-4">
                        MLA, en coordination avec nos partenaires, révise les procédures pour déterminer la disponibilité des activités pour les participants souhaitant s'inscrire aux programmes d'assistance médicale ou de formation. Le processus révisé s'alignera mieux avec les procédures que nos partenaires utilisent pour les ressortissants étrangers qui cherchent à bénéficier de nos services en tant que participants permanents en postulant pour les programmes MLA dans les consulats et ambassades à l'étranger.
                    </p>
                    <div className="flex items-start">
                        <span className="text-gray-700">
                            Voir plus d'informations sur les changements ici: 
                        </span>
                        <a 
                            href="#" 
                            className="ml-2 text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                            MLA Annonce des Procédures Révisées pour la Détermination de la Disponibilité des Activités
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                    </div>
                    </div>

                    {/* Archive Section */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Bulletins d'Activités de l'Année Fiscale 2025
                            </h3>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center">
                                <span className="mr-2">Développer</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-gray-600 mt-2">
                            Accédez aux bulletins archivés des activités précédentes et consultez l'historique complet de nos programmes.
                        </p>
                    </div>
                </div>

                {/* Sidebar with Participant Guide */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8">
                        <ParticipantGuide />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityBulletinSection;
