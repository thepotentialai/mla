import {ChevronDown, ChevronUp, ExternalLink} from 'lucide-react';
import Banner from "../../../components/Banner.tsx";
import Breadcrumbs from "../../../components/Breadcrumbs.tsx";
import {useState} from "react";
import banner from '../../../assets/images/activites/cancer_banner.jpeg'

function Page() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (item: string) => {
        setOpenItems(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    const items = [
        'Signs & Symptoms',
        'Facts & Statistics',
        'Risk Factors',
        'Screening & Early Detection',
        'Diagnosis',
        'Treatment',
        'DCIS',
        'Metastatic Breast Cancer',
        'Survivorship Topics'
    ] as const;

    const itemContents: Record<string, string> = {
        'Signs & Symptoms': 'Contenu détaillé sur les signes et symptômes...',
        'Facts & Statistics': 'Données statistiques importantes...',
        // Ajoutez le contenu pour chaque élément ici
    };
    return (
        <>
            <Banner backgroundImage={banner} title="" description="" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs title={'Breast Cancer Information'}/>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8 px-4 md:px-16">
                <div className="flex justify-end space-x-4 text-gray-600 text-sm mb-8">
                    <a href="#" className="hover:text-pink-500">Glossary</a>
                    <span>|</span>
                    <a href="#" className="hover:text-pink-500">Print</a>
                    <span>|</span>
                    <a href="#" className="hover:text-pink-500">Share</a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-2">
                            <div className={''}>
                                <p className="text-xl font-bold text-pink-500 mb-4 border-b border-gray-300">Breast Cancer Information</p>
                                {/*<ChevronDown className="h-4 w-4 text-gray-400" />*/}
                            </div>
                            {items.map((item) => (
                                <div key={item} className="border-b border-gray-300">
                                    <div
                                        className="flex items-center justify-between px-6 cursor-pointer "
                                        onClick={() => toggleItem(item)}
                                    >
                                        <span className="text-pink-500 font-semibold text-sm">{item}</span>
                                        {openItems[item] ? (
                                            <ChevronUp className="h-6 w-6 text-black" />
                                        ) : (
                                            <ChevronDown className="h-6 w-6 text-black" />
                                        )}
                                    </div>

                                    {openItems[item] && (
                                        <div className="px-10 py-3 text-gray-700 text-sm">
                                            {itemContents[item] || `Contenu à ajouter pour ${item}`}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <h1 className="text-4xl text-black opacity-70  mb-6">About Breast Cancer</h1>
                        <p className="text-lg text-gray-700 mb-12">
                            No matter who you are or where you live, breast cancer may touch your life. The About Breast Cancer section of this website has the latest evidence-based information on breast cancer risk factors, screening, diagnosis, treatment, metastatic breast cancer, survivorship and more.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Card 1 */}
                            <div className="space-y-4">
                                <img
                                    src="/src/assets/images/J1/DSC_2425.jpg"
                                    alt="Doctor and patient discussion"
                                    className="w-full h-48 object-cover"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Facts and Statistics</h3>
                                <p className="text-gray-600">Learn the basics of breast cancer, including warning signs, statistics and information for women and men with breast cancer.</p>
                                <a href="#" className="text-pink-500 hover:text-pink-600 flex items-center">
                                    Learn More <ExternalLink className="h-4 w-4 ml-1" />
                                </a>
                            </div>

                            {/* Card 2 */}
                            <div className="space-y-4">
                                <img
                                    src="/src/assets/images/J1/DSC_2357.jpg"
                                    alt="Group exercise"
                                    className="w-full h-48 object-cover"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Breast Cancer Risk Factors</h3>
                                <p className="text-gray-600">Learn about breast cancer risk factors, genetic counseling and testing, options for people at higher risk and healthy lifestyle choices.</p>
                                <a href="#" className="text-pink-500 hover:text-pink-600 flex items-center">
                                    Learn More <ExternalLink className="h-4 w-4 ml-1" />
                                </a>
                            </div>

                            {/* Card 3 */}
                            <div className="space-y-4">
                                <img
                                    src="/src/assets/images/J1/DSC_2470.jpg"
                                    alt="Medical consultation"
                                    className="w-full h-48 object-cover"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Screening and Early Detection</h3>
                                <p className="text-gray-600">Learn about breast cancer screening tests, when to get screened and what to do if you find a lump or change in your breast.</p>
                                <a href="#" className="text-pink-500 hover:text-pink-600 flex items-center">
                                    Learn More <ExternalLink className="h-4 w-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;