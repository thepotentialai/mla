import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs.tsx";
import { activitiesSections } from "../../config/activities";
// import Fancybox from "../../components/Fancybox.tsx";
// import activity1 from "../../assets/images/activites/WhatsApp Image 2025-04-04 at 5.40.19 AM.jpeg";
// ...

function Page() {
  // Même liste que le sous-menu Activités de la navbar (source: config/activities)
  const mlaActivities = activitiesSections.map((section) => ({
    id: section.title,
    title: section.title,
    description: "",
    hasSubPages: section.title === "MLA Tour Rose",
    url: section.link,
  }));

  const [activeActivity, setActiveActivity] = useState(mlaActivities[0]?.id ?? "MLA Tour Rose");

//   const activities = [
//     { image: activity1 },
//     { image: activity2 },
//     { image: activity3 },
//     { image: activity4 },
//     { image: activity5 },
//     { image: activity6 },
//   ];

  const currentActivity = mlaActivities.find(activity => activity.id === activeActivity);

  const getActivityContent = () => {
    switch(activeActivity) {
      case "MLA Tour Rose":
        return {
          title: "MLA Tour Rose - Dépistage du Cancer du Sein",
          content: (
            <div>
              <p className="mb-4">
                Le MLA Tour Rose est notre programme phare de dépistage communautaire du cancer du sein. 
                Depuis 2017, nous parcourons les communautés pour offrir des dépistages gratuits et 
                sensibiliser sur l'importance de la détection précoce.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-pink-800 mb-2">Résultats Impressionnants</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 8 années consécutives d'activités (2017-2024)</li>
                  <li>• Plus de 8 500 personnes dépistées</li>
                  <li>• 168 communautés visitées</li>
                  <li>• Taux de détection précoce: 85%</li>
                </ul>
              </div>
            </div>
          )
        };
      case "Campagne d'hypertension":
        return {
          title: "Campagne de Lutte contre l'Hypertension",
          content: (
            <div>
              <p className="mb-4">
                Notre campagne contre l'hypertension artérielle vise à sensibiliser la population 
                sur cette "maladie silencieuse" et à offrir des consultations gratuites dans les 
                communautés les plus vulnérables.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-blue-800 mb-2">Impact Communautaire</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plus de 3 200 personnes dépistées</li>
                  <li>• 45% de nouveaux cas détectés</li>
                  <li>• Suivi personnalisé pour 600+ patients</li>
                  <li>• Éducation thérapeutique continue</li>
                </ul>
              </div>
            </div>
          )
        };
      case "Recherche Médical":
        return {
          title: "Recherche Médicale",
          content: (
            <div>
              <p className="mb-4">
                Nos projets de recherche visent à faire avancer les connaissances en santé communautaire 
                et à améliorer les pratiques de dépistage et d'accompagnement des patients.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-purple-800 mb-2">Projets de recherche</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Études épidémiologiques</li>
                  <li>• Innovations technologiques</li>
                  <li>• Publications scientifiques</li>
                </ul>
              </div>
            </div>
          )
        };
      case "Espace Médical":
        return {
          title: "Espace Médical",
          content: (
            <div>
              <p className="mb-4">
                L'Espace Médical MLA favorise les collaborations institutionnelles et les échanges 
                entre professionnels de santé pour renforcer l'offre de soins dans les communautés.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-teal-800 mb-2">Collaborations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Partenaires internationaux</li>
                  <li>• Organisations locales</li>
                  <li>• Secteur privé</li>
                </ul>
              </div>
            </div>
          )
        };
      case "MLA Care":
        return {
          title: "MLA Care - Accompagnement Personnalisé",
          content: (
            <div>
              <p className="mb-4">
                MLA Care est notre programme d'accompagnement personnalisé pour les patients 
                atteints de maladies chroniques. Nous offrons un suivi complet incluant 
                support psychologique, aide financière et éducation thérapeutique.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-green-800 mb-2">Services Offerts</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Suivi psychologique individuel</li>
                  <li>• Aide financière pour les traitements</li>
                  <li>• Éducation thérapeutique</li>
                  <li>• Groupes de soutien</li>
                </ul>
              </div>
            </div>
          )
        };
      case "Drepa Tour":
        return {
          title: "Drepa Tour - Sensibilisation Drépanocytose",
          content: (
            <div>
              <p className="mb-4">
                Le Drepa Tour vise à sensibiliser sur la drépanocytose et à renforcer les 
                collaborations institutionnelles pour une meilleure prise en charge des patients.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-amber-800 mb-2">Actions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sensibilisation communautaire</li>
                  <li>• Collaborations institutionnelles</li>
                  <li>• Dépistage et suivi</li>
                </ul>
              </div>
            </div>
          )
        };
      default:
        return {
          title: currentActivity?.title || "Activité",
          content: (
            <div>
              <p className="mb-4">{currentActivity?.description || `Découvrez notre activité ${currentActivity?.title ?? ""}.`}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 mb-2">En savoir plus</h4>
                <p className="text-gray-700">
                  Consultez le menu Activités dans la barre de navigation pour accéder aux détails et sous-pages.
                </p>
              </div>
            </div>
          )
        };
    }
  };

  const activityContent = getActivityContent();

  return (
    <>
      <div className="px-4 py-8 relative h-[140px] overflow-hidden flex flex-col items-center justify-center bg-pink-800">
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-thin mt-4 text-gray-50">
            Medstudents Leaders Association
          </h1>
          <p className="text-xl mt-2 text-white font-semibold">
            Découvrez nos programmes et initiatives
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white py-2 px-4 md:px-8 lg:px-20">
        <Breadcrumbs title={"Nos Activités"} />
      </div>

      {/* Layout à 3 colonnes */}
      <div className="bg-white font-sans py-8 px-4 md:px-8 lg:px-10">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Colonne gauche - Activités MLA */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg px-10 py-4 sticky top-8">
                {/* <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Activités MLA
                </h3> */}
                <div className="divide-y divide-gray-200 border-t border-gray-200">
                  {mlaActivities.map((activity) => (
                    <div key={activity.id} className="py-2">
                      <button
                        onClick={() => setActiveActivity(activity.id)}
                        className={`w-full text-left py-2 px-4 cursor-pointer transition-colors duration-200 font-bold text-gray-900 ${
                          activeActivity === activity.id
                            ? "bg-gray-200"
                            : "bg-white hover:bg-gray-50"
                        }`}
                      >
                        {activity.title}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne centrale - Contenu */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Titre et description de l'activité */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {activityContent.title}
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    {activityContent.content}
                  </div>
                  
                  {/* Lien vers la page détaillée si disponible */}
                  {currentActivity?.hasSubPages && (
                    <div className="mt-6">
                      <a
                        href={currentActivity.url}
                        className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
                      >
                        Voir tous les détails
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Galerie d'images */}
                {/* <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Galerie Photos
                  </h3>
                  <Fancybox options={{ Carousel: { infinite: true } }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {activities.map((activity, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                          <a href={activity.image} data-fancybox="gallery">
                            <img
                              src={activity.image}
                              className="w-full h-48 object-cover"
                              alt={`${activeActivity} - Image ${index + 1}`}
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  </Fancybox>
                </div> */}
              </div>
            </div>

            {/* Colonne droite - Sous-menu des activités */}
            {/* <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Nos Domaines d'Action
                </h3>
                <div className="space-y-6">
                  {activitiesWithSubMenu.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-pink-600 mb-3 text-sm">
                        {category.category}
                      </h4>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-start">
                            <span className="text-gray-700 text-xs font-medium leading-tight">
                              {item.name}
                            </span>
                            <span className="text-pink-600 text-xs font-bold ml-2 whitespace-nowrap">
                              {item.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-300 text-sm font-semibold">
                    Rejoindre nos Actions
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;