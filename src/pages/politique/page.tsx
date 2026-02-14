import banner from "../../assets/images/J1/DSC_2184.jpg";
import Banner from "../../components/Banner.tsx";

function Page() {
    return (
        <>
            <Banner backgroundImage={banner} title="" description="" />
            <div className="flex flex-col">

                {/* Main content */}
                <main className="flex-grow container mx-auto py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-700 mb-4">Privacy Policy</h1>
                        <p className="text-sm text-gray-600 mb-6">Last updated: March 28, 2023</p>

                        <div className="prose max-w-none">
                            <p className="mb-4">
                                Susan G. Komen, a registered 501(c)(3) nonprofit, values your trust and is committed to protecting your privacy. This
                                Privacy Policy is designed to communicate how we collect, use, and share your information. This Privacy Policy
                                applies to information we collect when you use our websites, mobile applications, and other online products and
                                services (collectively, "Services"), or when you otherwise interact with us, including our programs or events. In order to help understand your
                                rights and obligations, please read this Privacy Policy carefully.
                            </p>

                            <p className="mb-4">
                                This Privacy Policy applies to all information collected through (i) your interactions and communications with
                                Komen, whether electronic, written or oral; (ii) Komen websites or applications ("apps"); and (iii) third parties
                                we work with who may collect information on our behalf. By using Komen's Services and/or providing personal information
                                to Komen, you accept and agree to the practices described in this Privacy Policy.
                            </p>

                            <p className="mb-6">
                                For your convenience, you may review specific information about our data practices by clicking on any of the
                                links below.
                            </p>

                            <div className="space-y-2 mb-8">
                                <h2 className="text-xl font-semibold text-pink-600">Personal Information We Receive</h2>
                                <p className="cursor-pointer text-pink-500 hover:underline" >How We Use Personal Information</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >How We Share Personal Information</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >How We Protect Your Personal Information</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >Your Privacy Rights</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >Your Contact Preferences</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >Data Security</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >Retention</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >Other Notices and Disclosures</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >How to Contact Us</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" >Updates to this Privacy Policy</p>
                            </div>

                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information We Receive</h2>
                            <p className="mb-4">
                                Komen collects information in support of our mission to save lives by meeting the most critical needs of our
                                communities and investing in breakthrough research to prevent and cure breast cancer. In general, the type of
                                information we collect will depend on how you choose to interact with Komen and the services we provide you. For
                                example, if you sign up to receive newsletters, register for an event, or donate, we will need different information in order
                                than if you are simply visiting our website or donating anonymously.
                            </p>

                            <p className="mb-4">
                                While you are engaging with Komen and utilizing our services, Komen may collect information that identifies you as
                                an individual or that is linked or linkable to you (i.e., "personally identifiable information").
                            </p>

                            <p className="mb-4">The following provides examples of the types of information that we collect:</p>

                            <ul className="list-disc pl-6 space-y-4 mb-6">
                                <li>
                                    <span className="font-semibold">Contact Information and Preferences:</span> We may request contact information such as your name, mailing
                                    address, telephone number, e-mail address, and your preferences for how you would like to be
                                    contacted. Additionally, if you create an account with us, such as through our websites, we may
                                    collect login and profile information and may also collect information about areas of interest. We
                                    may also note your specific interests or requests to supplement or to ensure accuracy of contact information.
                                </li>
                                <li>
                                    <span className="font-semibold">Demographic Information:</span> We may collect demographic information such as your date of birth, race,
                                    nationality, ethnicity, gender identity, disability, or military status. In some cases, we may also collect other
                                    information you choose to use. You may also request or submit data not explicitly asked within your content as
                                    well.
                                </li>
                                <li>
                                    <span className="font-semibold">Your Experience with Breast Cancer:</span> We may receive information from you about your relationship to
                                    breast cancer, including whether you or someone close to you has had a breast cancer diagnosis, is currently
                                    being treated or is a survivor, what type of breast cancer or other cancers, date of diagnosis, stage, current
                                    treatment, your medical records, side position and appearance, and medications. We may request
                                    this information to better serve you and meet our mission, including connecting you with the right resources or
                                    events. If you're participating in a race, event, or engaging with us in some other capacity, you might provide us
                                    with content like targeting information. We will do so with your consent whether direct, implied, or inferred and
                                    only as much communication or caring as such as where Komen is managing your event and communications.
                                </li>
                                <li>
                                    <span className="font-semibold">Financial Information:</span> If you decide to donate or make a retail purchase on a Komen Site, Komen uses a
                                    third-party payment processor to process your payment. When you make a payment through our payment
                                    processor, the processor collects the name of your shopping company. If you would like full information
                                    regarding the policies of our payment processors, please refer to the payment processor's website for
                                    information on their eligibility.
                                </li>
                                <li>
                                    <span className="font-semibold">Feedback and Survey Information:</span> We collect information when you communicate with us, including when you contact
                                    Komen through our website, online, phone, mail, or applications (channels) for information or assistance. We
                                    collect your contact information and any other information you choose to include in your communications or
                                    surveys.
                                </li>
                                <li>
                                    <span className="font-semibold">Device Information:</span> We collect information about the computers, phones, and other devices you use when
                                    interacting with our Services, including IP/device type, device ID (where available), browsers, operating
                                    systems, and internet service providers.
                                </li>
                                <li>
                                    <span className="font-semibold">Activity and Usage Information:</span> We collect information regarding your use of our Services, including your
                                    interactions with content and advertising on our Services. This includes the features you use, the tabs and pages
                                    you access, the sites you visit, which specifically means you consent how long you view sites pages, the time
                                    spent on those pages, your search queries, clicking behavior, and your device information.
                                </li>
                                <li>
                                    <span className="font-semibold">Social Media Engagement:</span> We capture information regarding your use of and engagement with Komen
                                    social media, including online public forums, discussion boards, or public pages. Please note that any
                                    information, whether personally identifiable or not, that you share in publicly available forums, such as on a
                                    social media platform, may be collected and used by others without restriction. Komen has no control over and is not
                                    liable for functioning purposes, certain financial information from your social media account and its
                                    shared with us. Your interactions with social media companies and the use of their features are governed
                                    by their privacy policies.
                                </li>
                                <li>
                                    <span className="font-semibold">Employment-Related Information:</span> If you apply for a job with Komen or are or were employed by Komen, we
                                    may collect information related to your role or organization. For instance, we will collect employment history,
                                    educational and career a resume or LinkedIn. If you are volunteering, we may also need your attendance
                                    registration to match opportunities for which you're eligible and qualified. Additionally, we may collect
                                    supplementary information about you, such as background check information.
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Page;