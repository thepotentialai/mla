import Banner from "../../components/Banner.tsx";
import banner from "../../assets/images/J1/DSC_2184.jpg";
import { Diamond } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs.tsx";

function Page() {

    return (
        <>
            <Banner backgroundImage={banner} title="" description="" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs title={"À propos de nous"} />
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20" id="mission">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-4xl text-gray-600 text-center md:text-left font-normal">
                            À propos de nous
                        </h2>
                        <div className="text-sm flex items-center gap-2 text-gray-600">
                            <button className="hover:text-gray-800">Imprimer</button>
                            <span className="text-gray-400">|</span>
                            <button className="hover:text-gray-800">Partager</button>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify" id="vision">
                        <h3 className="text-2xl font-semibold text-pink-600">Notre mission</h3>
                        <p>
                            Notre mission à la <strong>Medstudents Leaders Association</strong> est de prévenir et de lutter contre les maladies, en particulier les maladies non transmissibles, qui affectent les populations du Togo et d'ailleurs.
                        </p>
                        <p>
                            Nous sommes une organisation dirigée par de jeunes professionnels en sciences de la santé, tels que des médecins, des pharmaciens, des ingénieurs en biologie, des sages-femmes et des infirmiers, qui partagent une passion commune pour la promotion de la santé et le bien-être de nos communautés.
                        </p>
                        <p>
                            Nous sommes fiers de contribuer à cet objectif en mettant en place des initiatives de sensibilisation, des campagnes de prévention et des projets de recherche dans le but d'améliorer la santé des populations vulnérables. Notre organisation est à but non lucratif, ce qui signifie que toutes nos actions sont guidées par notre mission de servir la communauté et de faire une différence positive dans la vie des gens.
                        </p>

                        <h3 className="text-2xl font-semibold text-pink-600 pt-6" id="valeurs">Notre Vision</h3>
                        <p>
                            Nous croyons en la valeur de la prévention et nous travaillons activement de manière bénévole pour éduquer la population sur les facteurs de risque de maladies en général, et en particulier les maladies non transmissibles.
                        </p>
                        <p>
                            Nous organisons également des campagnes de dépistage pour aider à identifier les personnes atteintes de maladies à un stade précoce, ce qui permet une prise en charge rapide et efficace.
                        </p>
                        <p>
                            Notre objectif est d'éduquer la population sur la prévention des maladies et de changer les comportements pour réduire les risques de maladies. En fournissant des informations claires et accessibles, nous pouvons aider à prévenir les maladies et améliorer la santé des populations vulnérables.
                        </p>
                        <p>
                            En outre, nous offrons des services de dépistage pour aider à détecter les maladies à un stade précoce, ce qui peut conduire à une meilleure prise en charge et à une réduction de la morbidité et de la mortalité.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-xl shadow-md">
                        <div className={'bg-pink-600 h-2'}></div>
                        <h3 className="text-2xl font-bold text-center mb-2 p-4 italic">Nos Valeurs</h3>
                        <p className="text-center text-black font-semibold italic max-w-3xl mx-auto text-lg">Engagement envers la compassion</p>
                        <p className="text-center text-black font-semibold italic max-w-3xl mx-auto text-lg">Respect pour la dignité humaine</p>
                        <p className="text-center text-black font-semibold italic max-w-3xl mx-auto text-lg">Engagement envers l'équité</p>
                        <p className="text-center text-black font-semibold italic max-w-3xl mx-auto text-lg">Engagement envers la collaboration</p>
                        <p className="text-center text-black font-semibold italic max-w-3xl mx-auto text-lg">Transparence et responsabilité</p>
                        <div className={'bg-pink-600 h-1 mt-6'}></div>
                    </div>
                </div>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-20 py-16" id="approche">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <Diamond className="h-8 w-8 text-pink-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Approche</h3>
                        <p className="text-gray-600 mb-6">
                            Nous combinons expertise médicale et innovation pour développer des solutions de prévention adaptées aux réalités locales, avec un accent particulier sur l'éducation sanitaire accessible à tous.
                        </p>
                        <a href="/activites" className="text-pink-500 font-semibold hover:text-pink-600">
                            Découvrir nos programmes →
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden" id="rejoindre">
                    <div className="p-8">
                        <Diamond className="h-8 w-8 text-pink-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Rejoignez-nous</h3>
                        <p className="text-gray-600 mb-6">
                            Que vous soyez professionnel de santé, étudiant ou simplement passionné par la santé publique, il existe de nombreuses manières de contribuer à notre mission commune.
                        </p>
                        <a href="/partenaires" className="text-pink-500 font-semibold hover:text-pink-600">
                            S'impliquer →
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
