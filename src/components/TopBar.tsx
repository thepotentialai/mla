import {useState} from "react";
import {ChevronDown} from "lucide-react";

function TopBar() {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (index:any) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <div className="relative z-50">
            <div className="bg-black text-white py-2 px-4 md:px-28 flex flex-col md:flex-row justify-between items-center">
                {/* Contacts - toujours visibles */}
                <div className="flex flex-row items-center w-full md:w-auto justify-between">
                    <div className="flex items-center">
                        <a href="mailto:eboffice@mladoctors.org" className="flex items-center mr-6 text-xs sm:text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            eboffice@mladoctors.org
                        </a>
                        <a href="https://wa.me/22892888822" className="flex items-center text-xs sm:text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (+228) 92888822
                        </a>
                    </div>

                    {/* Icône recherche - visible seulement sur mobile */}
                    {/*<div className="md:hidden">*/}
                    {/*    <button className="p-1">*/}
                    {/*        <Search size={18} />*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>

                {/* Menu - caché sur mobile */}
                <div className="hidden md:flex items-center mt-2 md:mt-0">
                    <a href="/contact" className="mr-6 text-sm">Contactez nous</a>

                    {/* Premier menu déroulant */}
                    <div className="relative group mr-6">
                        <button
                            className="flex items-center text-sm"
                            onClick={() => toggleMenu('connexion')}
                        >
                            Se connecter | S'inscrire
                            <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeMenu === 'connexion' ? 'rotate-180' : ''}`} />
                        </button>
                        <div
                            className={`absolute left-0 mt-2 w-48 bg-white text-black shadow-lg transition-all duration-300 z-[60] ${activeMenu === 'connexion' ? 'block' : 'hidden'}`}
                            style={{ zIndex: 60 }}
                        >
                            <a href="#connexion" className="block px-4 py-2 hover:bg-gray-100  text-sm">Connexion</a>
                            <a href="#inscription" className="block px-4 py-2 hover:bg-gray-100  text-sm">Inscription</a>
                        </div>
                    </div>

                    {/* Deuxième menu déroulant */}
                    {/*<div className="relative group">*/}
                    {/*    <button*/}
                    {/*        className="flex items-center text-sm cursor-pointer"*/}
                    {/*        onClick={() => toggleMenu('community')}*/}
                    {/*    >*/}
                    {/*        Dans votre communauté*/}
                    {/*        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${activeMenu === 'community' ? 'rotate-180' : ''}`} />*/}
                    {/*    </button>*/}
                    {/*    <div*/}
                    {/*        className={`absolute left-0 mt-2 w-48 bg-white text-black  shadow-lg transition-all duration-300 z-[60] ${activeMenu === 'community' ? 'block' : 'hidden'}`}*/}
                    {/*        style={{ zIndex: 60 }}*/}
                    {/*    >*/}
                    {/*        <a href="#" className="block px-4 py-2 hover:bg-gray-100  text-sm">Option 1</a>*/}
                    {/*        <a href="#" className="block px-4 py-2 hover:bg-gray-100  text-sm">Option 2</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default TopBar;