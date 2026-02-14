import banner from "../../assets/images/J1/DSC_2606.jpg";
import Banner from "../../components/Banner.tsx";
import { useState } from "react";

function Page() {
  const [showImportantInfo, setShowImportantInfo] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [infoSup, setInfoSup] = useState(false);
  return (
    <>
      <Banner backgroundImage={banner} title="" description="" />
      <div className="bg-white font-sans py-8 px-4 md:px-8 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold flex items-center text-pink-500 border-b border-gray-200 pb-3 mb-6">
                <span className="mr-2">
                  Programmes de Soutien et Initiatives Solidaires
                </span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Bien que les traitements médicaux constituent la principale
                  dépense, d'autres frais liés à la santé (comme les
                  consultations ou les dépistages) peuvent représenter un frein
                  à un diagnostic précoce. C'est pourquoi nous proposons des
                  initiatives gratuites ou à coût réduit : ces services
                  permettent un dépistage rapide, évitent les diagnostics
                  tardifs et favorisent une prise en charge efficace pour
                  améliorer les chances de guérison.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="bg-gray-100 p-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  Contactez-nous pour toute question
                </h3>
                <p className="mb-2">
                  <span className="font-bold">Email :</span>{" "}
                  <a
                    href="mailto:assistance@mla.tg"
                    className="text-pink-500 hover:underline"
                  >
                    eboffice@mladoctors.org
                  </a>
                </p>
                <p className="mb-2">
                  <span className="font-bold">Téléphone :</span> (+228) 92888822
                </p>
                <p className="mb-2">
                  <span className="font-bold">
                    Du lundi au vendredi de 8 h à 17 h GMT
                  </span>
                </p>
                <p className="italic">
                  Assistance disponible en langue française et en langues
                  locales
                </p>
                <p className="italic mt-4 text-sm text-gray-600">
                  Veuillez patienter jusqu'à 72 heures pour obtenir une réponse.
                  Afin d'éviter les doublons et de traiter efficacement toutes
                  les demandes, nous vous prions de ne pas répéter la même
                  requête avant d'avoir reçu un retour de notre part.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Aperçu des Initiatives
            </h3>

            <p className="mb-4">
              MLA organise des levées de fonds dédiées au cancer du sein pour
              financer des traitements. Nous proposons également des campagnes
              de dépistage gratuites pour le cancer du sein, le cancer du col de
              l'utérus, l'obésité, le diabète et l'hypertension artérielle. Pour
              les maladies rénales et prostatiques, des campagnes sont
              disponibles à coût réduit. Ces initiatives visent à rendre les
              soins préventifs accessibles à tous, particulièrement aux
              personnes en précarité.{" "}
            </p>

            {/* <p className="mb-6">
                            Les demandes sont traitées dans un délai de 4 à 6 semaines après soumission d'un dossier complet.
                        </p> */}

            <div className="mb-2">
              <div
                className="bg-gray-900 text-white p-4 flex justify-between items-center cursor-pointer"
                onClick={() => setShowImportantInfo(!showImportantInfo)}
              >
                <h4 className="font-bold">
                  Initiatives Solidaires et Services Accessibles
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    showImportantInfo ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <p className="my-4">
                MLA met l'accent sur des actions communautaires pour promouvoir
                la santé préventive et le soutien solidaire :
              </p>

              {showImportantInfo && (
                <div className="p-4 border border-gray-300">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-semibold">
                        Levées de fonds pour le cancer du sein
                      </span>{" "}
                      : Événements communautaires pour collecter des dons afin
                      de financer des traitements, des équipements et de la
                      sensibilisation.
                    </li>
                    <li>
                      <span className="font-semibold">Dépistages gratuits</span>{" "}
                      : Consultations et tests sans frais pour détecter
                      précocement le cancer du sein, le cancer du col de
                      l'utérus, l'obésité, le diabète et l'hypertension
                      artérielle. Ces campagnes aident à identifier les risques
                      et à orienter vers des soins adaptés, et peuvent mener à
                      une priorisation pour des aides ultérieures.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Services à coût réduit
                      </span>{" "}
                      : Bilans et suivis pour les maladies rénales et
                      prostatiques, proposés à tarif accessible pour faciliter
                      l'accès aux personnes vulnérables. Demandez un soutien via
                      notre portail si les coûts restent un frein.
                    </li>
                  </ul>
                </div>
              )}
              <p className="">
                Ces initiatives créent un réseau solidaire en encourageant la
                participation collective pour améliorer la santé publique. Pour
                plus d'informations, pour vous impliquer ou pour une demande
                personnalisée, contactez-nous (for this add hyperlink for send
                email) .
              </p>
            </div>

            <div className="mb-2">
              <div
                className="bg-pink-600 text-white p-4 flex justify-between items-center cursor-pointer"
                onClick={() => setShowDocuments(!showDocuments)}
              >
                <h4 className="font-bold">
                  Liste des Documents Requis pour Participer à notre Levée de
                  Fonds
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    showDocuments ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <p className="my-4">
                Si vous souhaitez soumettre une demande de soutien via une de
                nos levées de fonds (par exemple, pour financer un traitement
                contre le cancer du sein), veuillez préparer un dossier complet
                pour permettre une évaluation rapide et équitable. Les documents
                suivants sont requis et doivent être soumis via notre portail en
                ligne :
              </p>

              {showDocuments && (
                <div className="p-4 border border-gray-300 rounded-b-lg mt-1">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      {" "}
                      <span className="font-semibold">
                        Pièce d'identité valide :
                      </span>{" "}
                      Carte d'identité, passeport ou tout document officiel
                      prouvant votre identité.
                    </li>
                    <li>
                      {" "}
                      <span className="font-semibold">
                        Justificatif de domicile :
                      </span>{" "}
                      Facture récente (eau, électricité) ou attestation de
                      résidence pour confirmer votre adresse.
                    </li>
                    <li>
                      {" "}
                      <span className="font-semibold">
                        Ordonnance médicale récente :
                      </span>{" "}
                      Prescription ou rapport médical indiquant le diagnostic
                      (ex. : cancer du sein) et les traitements nécessaires.
                    </li>
                    <li>
                      {" "}
                      <span className="font-semibold">
                        Relevé d'identité bancaire :
                      </span>{" "}
                      RIB ou IBAN pour faciliter les virements sécurisés en cas
                      de sélection.
                    </li>
                    <li>
                      {" "}
                      <span className="font-semibold">
                        Justificatifs de revenus :
                      </span>{" "}
                      Bulletins de salaire, attestation de chômage ou tout
                      document prouvant votre situation financière (pour évaluer
                      la précarité).
                    </li>
                    <li>
                      <span className="font-semibold">
                        Dossier médical complet :
                      </span>{" "}
                      Rapports d'examens, résultats de dépistages (si
                      applicables) et tout élément médical pertinent pour
                      justifier l'urgence.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mb-2">
              <div
                className="bg-blue-600 text-white p-4 flex justify-between items-center cursor-pointer"
                onClick={() => setInfoSup(!infoSup)}
              >
                <h4 className="font-bold">Informations supplémentaires</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    infoSup ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {infoSup && (
                <div className="p-4 border border-gray-300 rounded-b-lg mt-1">
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-semibold">
                        Qualité des documents :
                      </span>{" "}
                      Tous les documents doivent être clairs, lisibles et datés
                      de moins de 3 mois.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Confidentialité et gratuité :
                      </span>{" "}
                      La soumission est gratuite et confidentielle ; nous
                      respectons la protection des données.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Processus d'évaluation :
                      </span>{" "}
                      Une fois soumis, votre dossier sera évalué par notre
                      comité en 2-4 semaines. Si sélectionné, une levée de fonds
                      dédiée sera lancée pour votre cas.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
