// import { Calendar, FileText, Scale } from "lucide-react";

interface ActivityNavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ActivityNavigationTabs = ({
  activeTab,
  onTabChange,
}: ActivityNavigationTabsProps) => {
  const tabs = [
    {
      id: "MLA Tour Rose",
      title: "MLA Tour Rose",
      description: "Tour Rose 2017",
    },
    {
      id: "Campagne d'hypertension",
      title: "Campagne d'hypertension",
      description: "Consultations gratuites",
    },
    {
      id: "MLA Care",
      title: "MLA Care",
      description:
        "Accompagnement personnalisé des patients atteints de maladies chroniques",
    },
    {
      id: "Recherche Médicale",
      title: "Recherche Médicale",
      description: "Projets de recherche",
    },
    {
      id: "Drepa Tour",
      title: "Drepa Tour",
      description: "Tour Drepa 2017",
    },
    {
      id: "Espace Médical",
      title: "Espace Médical",
      description: "Espace Médical",
    },
  ];

  return (
    <div className="bg-gray-100 border-b border-gray-200 ms-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Vertical Navigation - Mobile as horizontal tabs */}
          <div className="px-8">
            <div className="flex overflow-x-auto md:overflow-x-visible">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`cursor-pointer flex items-center min-w-max md:min-w-0 md:w-full px-6 text-center border-b-2 md:border-b-0 md:border-l-4 transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-pink-600 md:border-pink-600 bg-white"
                      : "border-transparent hover:border-gray-300 md:hover:border-gray-300 hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <div className="text-sm md:text-base whitespace-nowrap md:whitespace-normal text-center hover:underline hover:text-pink-600">
                    {tab.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityNavigationTabs;
