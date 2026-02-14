import {useState} from "react";
import { Heart } from 'lucide-react';
// import hero_img from '/assets/images/J1/DSC_2181.jpg'
// import hero_img from '/assets/images/activites/cancer_banner.jpeg'
import hero_img from '../assets/images/J1/DSC_2436.jpg'
import logo_mission from '../assets/logos/logo_white.png'


function HeroSection() {
    const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
    const [amount, setAmount] = useState<string>('2000');
    return (
        <>
            <div className="relative min-h-[600px] lg:h-[70vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${hero_img})`,
                        // backgroundImage: `url('https://www.komen.org/wp-content/uploads/needs_slider-hope-3_resized.jpg')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-16 lg:h-full lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
                            En finir avec le cancer
                        </h1>
                        <p className="text-5xl lg:text-6xl text-pink-400 font-semibold">
                            Pour Nous Tous.
                        </p>
                    </div>

                    {/* Donation Card */}
                    <div className="w-full max-w-sm bg-white rounded-lg shadow-xl p-6">
                        <div className="flex gap-4 mb-6">
                            <button
                                className={`flex-1 py-2 rounded-md font-bold ${
                                    donationType === 'one-time'
                                        ? 'bg-pink-100 text-gray-800 border-1 border-gray-300'
                                        : 'bg-white text-gray-600 border-1 border-gray-200'
                                }`}
                                onClick={() => setDonationType('one-time')}
                            >
                                Don unique
                            </button>
                            <button
                                className={`flex-1 py-2 rounded-md font-bold ${
                                    donationType === 'monthly'
                                        ? 'bg-pink-100 text-pink-500 border-1 border-pink-500'
                                        : 'bg-white text-pink-600 border-1 border-pink-200'
                                }`}
                                onClick={() => setDonationType('monthly')}
                            >
                                <Heart className="inline-block w-4 h-4 mr-2" />
                                Don mensuel
                            </button>
                        </div>

                        <p className="text-gray-600 text-center mb-6">
                            Votre don sera doublé aujourd'hui, grâce à nos partenaires.
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <button
                                className={`py-3 rounded-md text-center ${
                                    amount === '18000'
                                        ? 'bg-pink-100 text-pink-500 border-1 border-pink-500'
                                        : 'bg-gray-100 text-gray-800 border-1 hover:bg-gray-200 border-gray-200'
                                }`}
                                onClick={() => setAmount('18000')}
                            >
                                18000 CFA
                            </button>
                            <button
                                className={`py-3 rounded-md text-center ${
                                    amount === '9000'
                                        ? 'bg-pink-100 text-pink-500 border-1 border-pink-500'
                                        : 'bg-gray-100 text-gray-800 border-1 hover:bg-gray-200 border-gray-200'
                                }`}
                                onClick={() => setAmount('9000')}
                            >
                                9000 CFA
                            </button>
                            <button
                                className={`py-3 rounded-md text-center ${
                                    amount === '4500'
                                        ? 'bg-pink-100 text-pink-500 border-1 border-pink-500'
                                        : 'bg-gray-100 text-gray-800 border-1 hover:bg-gray-200 border-gray-200'
                                }`}
                                onClick={() => setAmount('4500')}
                            >
                                4500 CFA
                            </button>
                            <button
                                className={`py-3 rounded-md text-center ${
                                    amount === '2000'
                                        ? 'bg-pink-100 text-pink-500 border-1 border-pink-500'
                                        : 'bg-gray-100 text-gray-800 border-1 hover:bg-gray-200 border-gray-200'
                                }`}
                                onClick={() => setAmount('2000')}
                            >
                                2000 CFA
                            </button>
                            <button
                                className={`py-3 rounded-md text-center ${
                                    amount === '1200'
                                        ? 'bg-pink-100 text-pink-500 border-1 border-pink-500'
                                        : 'bg-gray-100 text-gray-800 border-1 hover:bg-gray-200 border-gray-200'
                                }`}
                                onClick={() => setAmount('1200')}
                            >
                                1200 CFA
                            </button>
                            <button
                                className={`py-3 rounded-md text-center ${
                                    amount === '900'
                                        ? 'bg-pink-100 text-pink-500 border-1 border-pink-500'
                                        : 'bg-gray-100 text-gray-800 border-1 hover:bg-gray-200 border-gray-200'
                                }`}
                                onClick={() => setAmount('900')}
                            >
                                900 CFA
                            </button>
                        </div>

                        <div className="relative mb-6">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full py-3 px-4 border rounded-md"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                CFA
                            </span>
                        </div>

                        <label className="flex items-center gap-2 mb-6 text-gray-600">
                            <input type="checkbox" className="rounded border-pink-300" />
                            Dédier ce don
                        </label>

                        <button className="cursor-pointer w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-500 hover:opacity-90 transition-colors">
                            Faire un don
                        </button>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="relative overflow-hidden bg-gradient-to-r from-zinc-900 to-zinc-800">
                <div className="hidden md:block absolute top-0 right-0 w-[50%] h-full bg-white transform skew-x-12 origin-top-right">
                    <div className="transform -skew-x-12 h-full flex items-center">
                        <p className="ms-2">
                            La Medstudents Leaders Association est une organisation à but non lucratif de jeunes
                            professionnels de la santé fondée en octobre 2016. Elle est basée à Lomé, au Togo, et
                            dispose également d'antennes au Maroc, en France, en Allemagne et en Italie.
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex items-center gap-4 text-white md:w-[80%]">
                        <img src={logo_mission} alt="" width={80} height={80}/>
                        <p className="relative inline-block text-4xl text-pink-300 font-bold overflow-hidden">
                            <span className="shine-effect">Medstudents Leaders Association</span>
                        </p>
                    </div>
                    <div className="md:w-[60%] md:pl-8">

                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;