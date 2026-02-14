import { Users, Download, ExternalLink } from 'lucide-react';

const ParticipantGuide = () => {
    return (
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <div className="bg-blue-400 p-3 rounded-lg mr-4">
                    <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">UN GUIDE POUR LES</h3>
                    <h3 className="text-xl font-bold">NOUVEAUX PARTICIPANTS</h3>
                </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
                Découvrez tout ce que vous devez savoir pour rejoindre nos programmes MLA 
                et bénéficier de nos services d'assistance médicale.
            </p>
            
            <div className="space-y-3">
                <a 
                    href="#guide-download" 
                    className="flex items-center justify-between bg-blue-500 hover:bg-blue-400 p-3 rounded transition-colors duration-200"
                >
                    <span className="font-medium">Télécharger le Guide</span>
                    <Download className="w-5 h-5" />
                </a>
                
                <a 
                    href="#more-info" 
                    className="flex items-center justify-between bg-blue-500 hover:bg-blue-400 p-3 rounded transition-colors duration-200"
                >
                    <span className="font-medium">Plus d'informations</span>
                    <ExternalLink className="w-5 h-5" />
                </a>
            </div>
            
            <div className="mt-6 pt-4 border-t border-blue-400">
                <p className="text-xs text-blue-200">
                    Guide mis à jour - Janvier 2025
                </p>
            </div>
        </div>
    );
};

export default ParticipantGuide;
