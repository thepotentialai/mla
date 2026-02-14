import Afrikelles from '../../assets/logos/partners/Afrikelles.jpg'
import CL from '../../assets/logos/partners/Commune-des-Lacs-1-1-1.webp'
import oil from '../../assets/logos/partners/T-oil.png'
import Dore from '../../assets/logos/partners/Dore Logo.jpg'
import jbless from '../../assets/logos/partners/jbless corporation logo 1.png'
import Jojophotography from '../../assets/logos/partners/Jojophotography white B.png'
import FRII from '../../assets/logos/partners/L-frii.webp'
import MLA from '../../assets/logos/partners/Logo MLA.png'
import monene from '../../assets/logos/partners/logo monene-01.jpg'
import WGH from '../../assets/logos/partners/Logo WGH TOGO.png'
import kekely from '../../assets/logos/partners/Logo-kekely.png'
import Eden from '../../assets/logos/partners/Logo-Optics-Eden-light.png'
import precyeux from '../../assets/logos/partners/logo-precyeux.svg'
// import Sécurité from '../../assets/logos/partners/M. Sécurité et de la protection civile.png'
import MEPTSA from '../../assets/logos/partners/MEPTSA_.png'
import SOSDrTV from '../../assets/logos/partners/SOS Dr TV_.png'
import Zener from '../../assets/logos/partners/Zener.png'
import PartnerForm from "../../components/PartnerForm.tsx";


const partners = [
    {
        name: 'Afrikelles',
        image: Afrikelles
    },
    {
        name: 'Commune des Lacs',
        image: CL
    },
    {
        name: 'Dore',
        image: Dore
    },
    {
        name: 'Jbless',
        image: jbless
    },
    {
        name: 'Jojophotography',
        image: Jojophotography
    },
    {
        name: 'L-FRII',
        image: FRII
    },
    {
        name: 'MLA',
        image: MLA
    },
    {
        name: 'Monene',
        image: monene
    },
    {
        name: 'WGH',
        image: WGH
    },
    {
        name: 'Kekely',
        image: kekely
    },
    {
        name: 'Eden',
        image: Eden
    },
    {
       name: 'oil Logo',
       image: oil
    },
    {
        name: 'Precyeux',
        image: precyeux
    },
    {
        name: 'SOS Dr TV',
        image: SOSDrTV
    },
    {
        name: 'Zener',
        image: Zener
    },
    {
        name: 'MEPTSA',
        image: MEPTSA
    },
    // {
    //     name: 'Sécurité et de la protection civile',
    //     image: Sécurité
    // }
]
function Page() {
    return (
        <>
            <div
                className={`px-4 py-8 relative h-[80px] overflow-hidden flex flex-col items-center justify-center bg-pink-500`}
            >

                <div className="text-center">
                    <h1 className="text-2xl font-medium text-gray-50">Rejoignez notre communauté de partenaires.</h1>
                </div>
            </div>

            <div
                className={`px-4 py-8 flex items-center justify-center `}
            >

                <div className="text-center w-7xl lg:px-40">
                    <h1 className="text-2xl font-semibold text-black opacity-70">DECOUVREZ NOS PARTENAIRES

                    </h1>
                    <p className={'mt-4 text-lg text-black opacity-50'}>Cette communauté de leaders corporatifs audacieux partage notre vision de créer un monde sans cancer du sein. Ensemble, nous alimentons des recherches de rupture, brisons les barrières d'inégalité à la qualité du soin, fournissons un soutien direct aux patients et nous défendons les droits des patients. Grâce à leur soutien, nous faisons une différence significative dans la vie de la communauté du cancer du sein chaque jour.</p>
                    <a href="#partner-form">
                        <button className="bg-pink-500 mt-4 font-bold mb-1 lg:mb-2 text-white px-3 py-2 lg:px-4 lg:py-3 hover:bg-pink-700 transition-all duration-300 cursor-pointer text-xl lg:text-base">
                            DEVENIR UN PARTENAIRE
                        </button>
                    </a>
                </div>
            </div>
            <div className="py-8 overflow-hidden">
                <style>{`
                    @keyframes partners-carousel {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .partners-track {
                        animation: partners-carousel 30s linear infinite;
                    }
                    .partners-track:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="flex w-max">
                    <div className="partners-track flex items-center gap-12 md:gap-16 px-4 md:px-8">
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                    width={144}
                                    height={144}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id='partner-form'>
                <PartnerForm/>
            </div>
        </>
    );
}

export default Page;