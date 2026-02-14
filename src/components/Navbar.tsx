import { Heart, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logos/logo.png';
import { activitiesSections } from '../config/activities';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);
    const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<number | null>(null);

    // Navigation data
    // const navItems = [
    //     {
    //         title: "A propos de MLA",
    //         subItems: [
    //             { title: "À propos de nous", link: "/cancer-seins" },
    //             { title: "Faits et statistiques", link: "#statistiques" },
    //             { title: "Signes et symptômes", link: "#symptomes" },
    //             { title: "Facteurs de risque", link: "#facteurs-risque" },
    //             { title: "Dépistage et détection", link: "#depistage" },
    //             { title: "Diagnostic", link: "#diagnostic" },
    //             { title: "Traitement", link: "#traitement" },
    //             { title: "CCIS (Carcinome canalaire in situ)", link: "#ccis" },
    //             { title: "Cancer du sein métastatique", link: "#metastatique" },
    //             { title: "Sujets liés à la survie", link: "#survie" },
    //             { title: "Quoi de neuf dans le cancer du sein", link: "#actualites" },
    //             { title: "Équité en santé", link: "#equite-sante" }
    //         ],
    //         link: '/a-propos'
    //     },
    //     {
    //         title: "Activités",
    //         subItems: [],
    //         link: '/realisations'
    //     },
    //     {
    //         title: "Comment nous aider ?",
    //         subItems: [
    //             {
    //                 title: "Façons de donner",
    //                 items: [
    //                     "Faire un don maintenant",
    //                     "Don employeur correspondant",
    //                     "Don planifié",
    //                     "Don individuel",
    //                     "Don commémoratif",
    //                     "Autres façons de donner"
    //                 ],
    //                 link: "#"
    //             },
    //             {
    //                 title: "Partenariats",
    //                 items: [
    //                     "Devenir partenaire",
    //                     "Rencontrer nos partenaires"
    //                 ],
    //                 link: "#"
    //             },
    //             {
    //                 title: "Collecte de fonds",
    //                 items: [
    //                     "Course ou marche",
    //                     "Marche de 3 jours",
    //                     "Collecte DIY",
    //                     "Jouer avec un but"
    //                 ],
    //                 link: "#"
    //             },
    //             {
    //                 title: "Plaidoyer",
    //                 items: [
    //                     "S'impliquer",
    //                     "Passer à l'action",
    //                     "Devenir un défenseur de la science"
    //                 ],
    //                 link: "#"
    //             }
    //         ],
    //         link: '#'
    //     }
    // ];
    const navItems = [
        {
            title: "A propos de MLA",
            subItems: [
                { title: "MedStudents Leaders Association"},
                { title: "Missions", link: "/a-propos#mission" },
                { title: "Visions", link: "/a-propos#vision" },
                { title: "Valeurs", link: "/a-propos#valeurs" },
                { title: "Equipes", link: "/a-propos#equipe" },
                { title: "Nos Innovations", link: "#innovations" },
                { title: "Faits et Statistiques", link: "#faits-statistiques" },
                { title: "Nos Temoignages", link: "#temoignages" },
                { title: "Nos Héros", link: "#nos-heros" },
                { title: "Partenaires", link: "/partenaires" },
                { title: "Sujets liés à la survie", link: "#survie" },
                // { title: "Quoi de neuf dans le cancer du sein", link: "#actualites" },
                // { title: "Équité en santé", link: "#equite-sante" }
            ],
            link: '/a-propos'
        },
        // {
        //     title: "Activités",
        //     subItems: [],
        //     link: '/realisations'
        // },
        {
            title: "Activités",
            subItems: activitiesSections,
            link: '/activites'
        },
        {
            title: "Comment nous aider ?",
            subItems: [
                {
                    title: "Façons de donner",
                    items: [
                        "Faire un don maintenant",
                        "Don employeur correspondant",
                        "Don planifié",
                        "Don individuel",
                        "Don commémoratif",
                        "Autres façons de donner"
                    ],
                    link: "#"
                },
                {
                    title: "Partenariats",
                    items: [
                        "Devenir partenaire",
                        "Rencontrer nos partenaires"
                    ],
                    link: "#"
                },
                {
                    title: "Collecte de fonds",
                    items: [
                        "Course ou marche",
                        "Marche de 3 jours",
                        "Collecte DIY",
                        "Jouer avec un but"
                    ],
                    link: "#"
                },
                {
                    title: "Plaidoyer",
                    items: [
                        "S'impliquer",
                        "Passer à l'action",
                        "Devenir un défenseur de la science"
                    ],
                    link: "#"
                }
            ],
            link: '#'
        }
    ];

    const toggleMobileSubmenu = (index: number) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
    };

    const toggleDesktopSubmenu = (index: number) => {
        setActiveDesktopSubmenu(activeDesktopSubmenu === index ? null : index);
    };

    const renderDesktopSubmenu = (subItems: any) => {
        return (
            <div className="py-6 px-8 absolute left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-gray-100 shadow-lg z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <div className="grid grid-cols-2 gap-y-8">
                    {subItems.map((section: any, index: number) => (
                        <div key={index} className="space-y-4">
                            <Link to={section.link || "#"} className="flex items-center space-x-1 group cursor-pointer">
                                <h2 className="text-xl font-semibold text-gray-800 hover:text-[#EA3A8A] transition-colors">
                                    {section.title}
                                </h2>
                                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#EA3A8A] transition-colors" />
                            </Link>
                            <ul className="space-y-3">
                                {section.items.map((item: any, itemIndex: number) => (
                                    <li key={itemIndex}>
                                        <Link
                                            to={typeof item === 'string' ? "#" : item.link}
                                            className="text-lg text-gray-700 hover:text-[#EA3A8A] transition-colors block"
                                        >
                                            {typeof item === 'string' ? item : item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderMobileSubmenu = (subItems: any) => {
        return (
            <div className="pl-4 space-y-1 mt-1">
                {subItems.map((section: any, index: number) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-base font-semibold text-gray-800 mb-2">
                            {section.title}
                        </h3>
                        <ul className="space-y-2 pl-2">
                            {section.items.map((item: any, itemIndex: number) => (
                                <li key={itemIndex}>
                                    <Link
                                        to={typeof item === 'string' ? "#" : item.link}
                                        className="block py-1 text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        {typeof item === 'string' ? item : item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            {/* Main Navigation Bar (White) */}
                <nav className="sticky top-0 bg-white px-4 lg:px-28 shadow-md z-30">
                    <div className="w-full py-2">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            {/* Logo et menu mobile */}
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <div className="flex items-center">
                                    <div className="text-xl lg:text-2xl font-bold">
                                        <Link to='/'>
                                            <img
                                                src={logo}
                                                width={100}
                                                height={100}
                                                alt="Logo"
                                                className="cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                {/* Bouton menu mobile */}
                                <div className="md:hidden flex items-center gap-4">
                                    <div className="flex items-center flex-col">
                                        <button className="bg-pink-600 font-bold mb-1 lg:mb-2 text-white px-3 py-2 lg:px-4 lg:py-3 hover:bg-pink-700 transition-all duration-300 cursor-pointer text-xl lg:text-base">
                                            FAIRE UN DON
                                        </button>
                                        <button className="text-pink-600 font-bold flex items-center gap-1 hover:text-pink-600 cursor-pointer text-lg lg:text-sm">
                                            <Heart size={14} className="lg:size-[16px]" />
                                            <span>DON MENSUEL</span>
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                        className="p-2"
                                    >
                                        {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
                                    </button>
                                </div>
                            </div>

                            {/* Navigation desktop centrée */}
                            <div className="hidden md:flex space-x-4 lg:space-x-8">
                                {navItems.map((item, index) => (
                                    <div key={index} className="relative group">
                                        <Link
                                            to={item.link}
                                            className="text-base lg:text-lg hover:underline cursor-pointer flex items-center text-gray-800 font-semibold group-hover:text-pink-500 px-2 py-1 lg:px-3 lg:py-2"
                                            onMouseEnter={() => item.subItems.length > 0 && toggleDesktopSubmenu(index)}
                                        >
                                            {item.title}
                                            {item.subItems.length > 0 && (
                                                <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                                            )}
                                        </Link>
                                        {item.subItems.length > 0 && (item.title === "Comment nous aider ?" || item.title === "Activités") ? (
                                            renderDesktopSubmenu(item.subItems)
                                        ) : item.subItems.length > 0 && (
                                            <div className="py-3 absolute left-1/2 transform -translate-x-1/2 mt-6 w-56 lg:w-80 bg-gray-100 shadow-lg z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={subItem.link || '#'}
                                                        className={`flex items-center justify-between px-4 lg:px-10 py-1 text-gray-700 text-sm lg:text-lg hover:underline hover:text-pink-500 ${subItem.title === "MedStudents Leaders Association" ? 'font-bold' : ''}`}
                                                    >
                                                        <span>{subItem.title}</span>
                                                        {subItem.title === "MedStudents Leaders Association" && <ChevronRight className="ml-2" size={16} />}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Boutons desktop (droite) */}
                            <div className="hidden md:flex items-center gap-2 lg:gap-4">
                                {/*<button className="p-2 hover:bg-gray-100 rounded-full">*/}
                                {/*    <Search className="cursor-pointer" size={20} />*/}
                                {/*</button>*/}
                                <div className="flex items-center flex-col">
                                    <button className="bg-pink-600 font-bold mb-1 lg:mb-2 text-white px-3 py-2 lg:px-4 lg:py-3 hover:bg-pink-700 transition-all duration-300 cursor-pointer text-xl lg:text-xl">
                                        FAIRE UN DON
                                    </button>
                                    <button className="text-pink-600 font-bold flex items-center gap-1 hover:text-pink-600 cursor-pointer text-lg lg:text-lg">
                                        <Heart size={14} className="lg:size-[16px]" />
                                        <span>DON MENSUEL</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Menu mobile */}
                        {mobileMenuOpen && (
                            <div className="md:hidden bg-white mt-2">
                                <div className="pt-2 pb-6 space-y-3">
                                    {navItems.map((item, index) => (
                                        <div key={index} className="border-b border-gray-100 pb-1">
                                            <button
                                                className="flex items-center justify-between w-full py-3 text-gray-700 font-medium text-base"
                                                onClick={() => toggleMobileSubmenu(index)}
                                            >
                                                {item.title}
                                                {item.subItems.length > 0 && (
                                                    <ChevronDown className={`h-5 w-5 transition-transform ${activeMobileSubmenu === index ? 'rotate-180' : ''}`} />
                                                )}
                                            </button>
                                            {activeMobileSubmenu === index && item.subItems.length > 0 && (
                                                (item.title === "Comment nous aider ?" || item.title === "Activités") ? (
                                                    renderMobileSubmenu(item.subItems)
                                                ) : (
                                                    <div className="pl-4 space-y-1 mt-1">
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.link || '#'}
                                                                className={`block py-2 text-gray-600 hover:text-blue-600 text-sm ${subItem.title === "MedStudents Leaders Association" ? 'font-bold' : ''}`}
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    ))}
                                    <div className="flex flex-col space-y-3 pt-2">
                                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full text-base">
                                            FAIRE UN DON
                                        </button>
                                        <button className="text-blue-600 flex items-center justify-center gap-2 hover:text-blue-700 text-sm">
                                            <Heart size={16} />
                                            DON MENSUEL
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
        </>
    );
}

export default Navbar;