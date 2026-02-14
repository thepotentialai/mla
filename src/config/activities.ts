/**
 * Configuration partagée des activités MLA.
 * Utilisée par la Navbar (sous-menu Activités) et la page /activites.
 */

export type ActivitySubItem =
  | { title: string; link: string }
  | string;

export interface ActivitySection {
  title: string;
  items: ActivitySubItem[];
  link: string;
}

export const activitiesSections: ActivitySection[] = [
  {
    title: "MLA Tour Rose",
    items: [
      { title: "Tour Rose 2017", link: "/activites/mla_tour/2017" },
      { title: "Tour Rose 2018", link: "/activites/mla_tour/2018" },
      { title: "Tour Rose 2019", link: "/activites/mla_tour/2019" },
      { title: "Tour Rose 2020", link: "/activites/mla_tour/2020" },
      { title: "Tour Rose 2021", link: "/activites/mla_tour/2021" },
      { title: "Tour Rose 2022", link: "/activites/mla_tour/2022" },
      { title: "Tour Rose 2023", link: "/activites/mla_tour/2023" },
      { title: "Tour Rose 2024", link: "/activites/mla_tour/2024" },
    ],
    link: "/activites/mla_tour",
  },
  {
    title: "Campagne d'hypertension",
    items: ["Consultations gratuites"],
    link: "/activites#campagne-hypertension",
  },
  {
    title: "Recherche Médical",
    items: ["Projets de recherche"],
    link: "/activites#recherche-medicale",
  },
  {
    title: "MLA Care",
    items: ["Collaborations institutionnelles"],
    link: "/activites#mla-care",
  },
  {
    title: "Drepa Tour",
    items: ["Collaborations institutionnelles"],
    link: "/activites#drepa-tour",
  },
  {
    title: "Espace Médical",
    items: ["Collaborations institutionnelles"],
    link: "/activites#espace-medical",
  },
];
