import Banner from "../../../components/Banner.tsx";
import banner from "../../../assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../../components/Breadcrumbs.tsx";
import Fancybox from "../../../components/Fancybox.tsx";
import { useState, useMemo } from "react";

// Import des images du tour MLA pour chaque année
// 2017
import img2017_1 from "../../../assets/images/J1/DSC_2257.jpg";
import img2017_2 from "../../../assets/images/J1/DSC_2259.jpg";
import img2017_3 from "../../../assets/images/J1/DSC_2261.jpg";
import img2017_4 from "../../../assets/images/J1/DSC_2271.jpg";
import img2017_5 from "../../../assets/images/J1/DSC_2273.jpg";
import img2017_6 from "../../../assets/images/J1/DSC_2278.jpg";

// 2018
import img2018_1 from "../../../assets/images/J1/DSC_2290.jpg";
import img2018_2 from "../../../assets/images/J1/DSC_2291.jpg";
import img2018_3 from "../../../assets/images/J1/DSC_2292.jpg";
import img2018_4 from "../../../assets/images/J1/DSC_2293.jpg";
import img2018_5 from "../../../assets/images/J1/DSC_2295.jpg";
import img2018_6 from "../../../assets/images/J1/DSC_2302.jpg";

// 2019
import img2019_1 from "../../../assets/images/J1/DSC_2313.jpg";
import img2019_2 from "../../../assets/images/J1/DSC_2315.jpg";
import img2019_3 from "../../../assets/images/J1/DSC_2316.jpg";
import img2019_4 from "../../../assets/images/J1/DSC_2317.jpg";
import img2019_5 from "../../../assets/images/J1/DSC_2322.jpg";
import img2019_6 from "../../../assets/images/J1/DSC_2325.jpg";

// 2020
import img2020_1 from "../../../assets/images/J1/DSC_2128.jpg";
import img2020_2 from "../../../assets/images/J1/DSC_2130.jpg";
import img2020_3 from "../../../assets/images/J1/DSC_2132.jpg";
import img2020_4 from "../../../assets/images/J1/DSC_2133.jpg";
import img2020_5 from "../../../assets/images/J1/DSC_2134.jpg";
import img2020_6 from "../../../assets/images/J1/DSC_2135.jpg";

// 2021
import img2021_1 from "../../../assets/images/J1/DSC_2136.jpg";
import img2021_2 from "../../../assets/images/J1/DSC_2138.jpg";
import img2021_3 from "../../../assets/images/J1/DSC_2139.jpg";
import img2021_4 from "../../../assets/images/J1/DSC_2141.jpg";
import img2021_5 from "../../../assets/images/J1/DSC_2142.jpg";
import img2021_6 from "../../../assets/images/J1/DSC_2144.jpg";

// 2022
import img2022_1 from "../../../assets/images/J1/DSC_2145.jpg";
import img2022_2 from "../../../assets/images/J1/DSC_2146.jpg";
import img2022_3 from "../../../assets/images/J1/DSC_2147.jpg";
import img2022_4 from "../../../assets/images/J1/DSC_2150.jpg";
import img2022_5 from "../../../assets/images/J1/DSC_2151.jpg";
import img2022_6 from "../../../assets/images/J1/DSC_2152.jpg";

// 2023
import img2023_1 from "../../../assets/images/J1/DSC_2153.jpg";
import img2023_2 from "../../../assets/images/J1/DSC_2155.jpg";
import img2023_3 from "../../../assets/images/J1/DSC_2157.jpg";
import img2023_4 from "../../../assets/images/J1/DSC_2163.jpg";
import img2023_5 from "../../../assets/images/J1/DSC_2164.jpg";
import img2023_6 from "../../../assets/images/J1/DSC_2167.jpg";

// 2024
import img2024_1 from "../../../assets/images/J1/DSC_2172.jpg";
import img2024_2 from "../../../assets/images/J1/DSC_2173.jpg";
import img2024_3 from "../../../assets/images/J1/DSC_2181.jpg";
import img2024_4 from "../../../assets/images/J1/DSC_2183.jpg";
import img2024_5 from "../../../assets/images/J1/DSC_2184.jpg";
import img2024_6 from "../../../assets/images/J1/DSC_2185.jpg";

interface TourImage {
  image: string;
  title: string;
}

interface ToursByYear {
  [year: number]: TourImage[];
}

function Page() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  const toursByYear: ToursByYear = useMemo(
    () => ({
      2017: [
        { image: img2017_1, title: "MLA Tour Rose 2017 - Naissance du projet" },
        { image: img2017_2, title: "MLA Tour Rose 2017 - Premiers pas" },
        { image: img2017_3, title: "MLA Tour Rose 2017 - Vision pionnière" },
        { image: img2017_4, title: "MLA Tour Rose 2017 - Équipe fondatrice" },
        { image: img2017_5, title: "MLA Tour Rose 2017 - Engagement initial" },
        { image: img2017_6, title: "MLA Tour Rose 2017 - Communauté témoin" },
      ],
      2018: [
        {
          image: img2018_1,
          title: "MLA Tour Rose 2018 - Consolidation des acquis",
        },
        {
          image: img2018_2,
          title: "MLA Tour Rose 2018 - Élargissement territorial",
        },
        { image: img2018_3, title: "MLA Tour Rose 2018 - Équipe renforcée" },
        { image: img2018_4, title: "MLA Tour Rose 2018 - Nouvelles méthodes" },
        { image: img2018_5, title: "MLA Tour Rose 2018 - Impact amplifié" },
        { image: img2018_6, title: "MLA Tour Rose 2018 - Partenariats locaux" },
      ],
      2019: [
        {
          image: img2019_1,
          title: "MLA Tour Rose 2019 - Maturité du programme",
        },
        {
          image: img2019_2,
          title: "MLA Tour Rose 2019 - Excellence opérationnelle",
        },
        { image: img2019_3, title: "MLA Tour Rose 2019 - Expertise reconnue" },
        { image: img2019_4, title: "MLA Tour Rose 2019 - Leadership affiché" },
        {
          image: img2019_5,
          title: "MLA Tour Rose 2019 - Impact social majeur",
        },
        { image: img2019_6, title: "MLA Tour Rose 2019 - Réseau étendu" },
      ],
      2020: [
        {
          image: img2020_1,
          title: "MLA Tour Rose 2020 - Dépistage communautaire",
        },
        {
          image: img2020_2,
          title: "MLA Tour Rose 2020 - Consultation médicale",
        },
        { image: img2020_3, title: "MLA Tour Rose 2020 - Sensibilisation" },
        { image: img2020_4, title: "MLA Tour Rose 2020 - Équipe médicale" },
        { image: img2020_5, title: "MLA Tour Rose 2020 - Examens préventifs" },
        { image: img2020_6, title: "MLA Tour Rose 2020 - Communauté engagée" },
      ],
      2021: [
        { image: img2021_1, title: "MLA Tour Rose 2021 - Dépistage COVID-19" },
        { image: img2021_2, title: "MLA Tour Rose 2021 - Mesures sanitaires" },
        { image: img2021_3, title: "MLA Tour Rose 2021 - Vaccination" },
        {
          image: img2021_4,
          title: "MLA Tour Rose 2021 - Support communautaire",
        },
        { image: img2021_5, title: "MLA Tour Rose 2021 - Prévention" },
        { image: img2021_6, title: "MLA Tour Rose 2021 - Solidarité" },
      ],
      2022: [
        { image: img2022_1, title: "MLA Tour Rose 2022 - Retour terrain" },
        { image: img2022_2, title: "MLA Tour Rose 2022 - Dépistage cancer" },
        { image: img2022_3, title: "MLA Tour Rose 2022 - Hypertension" },
        { image: img2022_4, title: "MLA Tour Rose 2022 - Diabète" },
        { image: img2022_5, title: "MLA Tour Rose 2022 - Bilan complet" },
        { image: img2022_6, title: "MLA Tour Rose 2022 - Accompagnement" },
      ],
      2023: [
        { image: img2023_1, title: "MLA Tour Rose 2023 - Innovation santé" },
        { image: img2023_2, title: "MLA Tour Rose 2023 - Télémédecine" },
        { image: img2023_3, title: "MLA Tour Rose 2023 - Formation" },
        { image: img2023_4, title: "MLA Tour Rose 2023 - Partenariats" },
        { image: img2023_5, title: "MLA Tour Rose 2023 - Expansion" },
        { image: img2023_6, title: "MLA Tour Rose 2023 - Impact mesurable" },
      ],
      2024: [
        { image: img2024_1, title: "MLA Tour Rose 2024 - Excellence continue" },
        { image: img2024_2, title: "MLA Tour Rose 2024 - Nouveaux programmes" },
        {
          image: img2024_3,
          title: "MLA Tour Rose 2024 - Technologies avancées",
        },
        { image: img2024_4, title: "MLA Tour Rose 2024 - Communautés rurales" },
        { image: img2024_5, title: "MLA Tour Rose 2024 - Jeunes volontaires" },
        { image: img2024_6, title: "MLA Tour Rose 2024 - Vision 2025" },
      ],
    }),
    []
  );

  const currentTourImages = useMemo(
    () => toursByYear[selectedYear] || [],
    [selectedYear, toursByYear]
  );

  const availableYears = useMemo(
    () =>
      Object.keys(toursByYear)
        .map(Number)
        .sort((a, b) => b - a),
    [toursByYear]
  );

  return (
    <>
      <Banner
        backgroundImage={banner}
        title="MLA Tour Rose"
        description="Dépistage et sensibilisation dans les communautés"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
        <Breadcrumbs items={[
            {title: "Activités", href: "/activites"},
            {title: "MLA Tour Rose"}
        ]} />
      </div>

      {/* Main Content */}
      <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl font-bold text-pink-600 text-center">
              MLA Tour Rose - Galerie Photos
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              Le MLA Tour Rose est notre programme phare de dépistage gratuit
              des maladies non transmissibles. Ces événements itinérants nous
              permettent d'aller à la rencontre des communautés pour offrir des
              services de santé préventive et de sensibilisation.
            </p>
            <p>
              À travers ces tours, nous proposons des consultations médicales
              gratuites, des dépistages du diabète, de l'hypertension
              artérielle, des cancers et d'autres pathologies. Découvrez en
              images les moments forts de nos interventions communautaires.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Explorez nos Tours par Année
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {availableYears.map((year) => (
                <div
                  key={year}
                  className="flex flex-col items-center space-y-2"
                >
                  <a
                    href={`/activites/mla_tour/${year}`}
                    className="text-sm text-pink-500 hover:text-pink-700 underline transition-colors duration-200"
                  >
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform ${
                        selectedYear === year
                          ? "bg-pink-600 text-white shadow-lg scale-105"
                          : "bg-white text-pink-600 border-2 border-pink-600 hover:bg-pink-50 hover:scale-102 cursor-pointer"
                      }`}
                    >
                      Tour {year}
                    </button>
                  </a>
                  {/* <a
                    href={`/activites/mla_tour/${year}`}
                    className="text-sm text-pink-500 hover:text-pink-700 underline transition-colors duration-200"
                  >
                    Page dédiée →
                  </a> */}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Year Info */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-pink-600 mb-2">
              MLA Tour Rose {selectedYear}
            </h4>
            <p className="text-gray-600">
              {currentTourImages.length} photos de nos interventions
            </p>
          </div>

          {/* Photo Carousel */}
          <div className="transition-all duration-300 ease-in-out">
            {currentTourImages.length > 0 && (
              <Fancybox
                key={selectedYear} // Force re-render when year changes
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
                  {currentTourImages.map((item: TourImage, index: number) => (
                    <div
                      key={`${selectedYear}-${index}`}
                      className="bg-white overflow-hidden transition-all duration-200 transform"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <a
                        href={item.image}
                        data-fancybox={`mla-tour-${selectedYear}`}
                        data-caption={item.title}
                        className="block relative group"
                      >
                        <img
                          src={item.image}
                          className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-105"
                          alt={item.title}
                          loading="lazy"
                        />
                        {/* Backdrop invisible par défaut */}
                        <div className="absolute inset-0 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <div className="text-white opacity-0 group-hover:opacity-90 transition-opacity duration-200 bg-transparent bg-opacity-30 rounded-full p-3">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 text-center">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Fancybox>
            )}
          </div>

          {/* Global Stats */}
          {/* <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-8 mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              8 Années d'Impact - Bilan Général (2017-2024)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8500+</div>
                <div className="text-pink-100">Personnes dépistées</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">168</div>
                <div className="text-pink-100">Communautés visitées</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">270</div>
                <div className="text-pink-100">Bénévoles mobilisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">97%</div>
                <div className="text-pink-100">Taux de satisfaction</div>
              </div>
            </div>
          </div> */}

          {/* Tours Overview */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {availableYears.map((year) => (
              <div
                key={year}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-pink-600">
                    Tour {year}
                  </h4>
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {toursByYear[year]?.length || 0} photos
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {year === 2017 && "Naissance d'une vision révolutionnaire"}
                  {year === 2018 && "Consolidation et croissance significative"}
                  {year === 2019 && "Maturité et excellence opérationnelle"}
                  {year === 2020 &&
                    "Première édition fondatrice malgré la pandémie"}
                  {year === 2021 &&
                    "Adaptation et résilience face aux défis sanitaires"}
                  {year === 2022 && "Expansion et innovation technologique"}
                  {year === 2023 && "Intégration des technologies numériques"}
                  {year === 2024 && "Excellence continue et vision d'avenir"}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedYear(year)}
                    className="flex-1 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-200 text-sm"
                  >
                    Voir les photos
                  </button>
                  <a
                    href={`/activites/mla_tour/${year}`}
                    className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-200 text-sm text-center"
                  >
                    Page dédiée
                  </a>
                </div>
              </div>
            ))}
          </div> */}

          {/* Call to Action */}
          <div className="bg-pink-50 rounded-lg p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              Participez à nos prochains tours
            </h3>
            <p className="text-gray-700 mb-6">
              Restez informés de nos prochaines interventions communautaires et
              rejoignez-nous dans notre mission de santé préventive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 font-semibold"
              >
                Nous contacter
              </a>
              <a
                href="/partenaires"
                className="inline-block bg-white text-pink-600 border-2 border-pink-600 px-8 py-3 rounded-lg hover:bg-pink-50 transition-colors duration-300 font-semibold"
              >
                Devenir partenaire
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
