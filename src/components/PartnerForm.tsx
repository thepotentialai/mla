import {useState} from "react";
import partner_img from '../assets/images/J1/DSC_2192.jpg'
import logo from "../assets/logos/logo.png";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    phone: string;
    comments: string;
}

function PartnerForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phone: '',
        comments: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className="bg-white">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row ">
                    {/* Image Section - Left Side */}
                    <div className="w-full md:w-1/2 flex">
                        <div className="w-full h-full overflow-hidden flex items-center">
                            <img
                                src={partner_img}
                                alt="Partnership"
                                className="w-full h-full object-cover"
                                style={{ maxHeight: "700px" }}
                            />
                        </div>
                    </div>

                    {/* Form Section - Right Side */}
                    <div className="w-full md:w-1/2 flex items-center md:px-6 bg-gray-200">
                        <div className="w-full">
                            <div className="text-center mb-4">
                                <div className="flex justify-center mb-6">
                                    <img
                                        src={logo}
                                        width={100}
                                        height={100}
                                        alt="Logo"
                                        className="cursor-pointer"
                                    />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Devenir un Partenaire</h1>
                                <p className="text-[#EA3A8A] font-semibold text-lg">REJOIGNONS NOTRE COMBAT. SAUVEZ DES VIES.</p>
                            </div>


                            <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Prénom <span className="text-[#EA3A8A]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA3A8A] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom <span className="text-[#EA3A8A]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA3A8A] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-[#EA3A8A]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA3A8A] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom de l'entreprise <span className="text-[#EA3A8A]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        required
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA3A8A] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Téléphone (Optionnel)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA3A8A] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                                    Commentaires (Optionnel)
                                </label>
                                <textarea
                                    id="comments"
                                    name="comments"
                                    rows={4}
                                    value={formData.comments}
                                    onChange={handleChange}
                                    placeholder="Veuillez nous dire ce que vous êtes intéressé à en savoir plus ou si vous avez une idée de partenariat en tête."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA3A8A] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#EA3A8A] text-white py-3 px-6 rounded-md hover:bg-[#EA3A8A]/90 transition-colors font-semibold text-lg"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PartnerForm;