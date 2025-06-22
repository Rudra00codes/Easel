import { GradualSpacing } from "@/components/eldoraui/GradualSpacing";
import { SpotlightButton } from "@/components/eldoraui/SpotlightButton";
import ShinyText from "@/components/eldoraui/ShinyText";
import { AuroraText } from "@/components/eldoraui/aurora-text";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaRegCommentDots } from 'react-icons/fa';
import React from "react";

const ContactContent = React.memo(() => {
    return (
        <>
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <AuroraText className="text-sm text-blue-400">
                        GET &nbsp;IN &nbsp;TOUCH &nbsp;WITH &nbsp;US
                    </AuroraText>
                    <GradualSpacing
                        className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-[0em] text-white text-center"
                        text="Have &nbsp;Questions&nbsp;? &nbsp;Get &nbsp;in &nbsp;Touch!"
                    />
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        <ShinyText text="Our team is ready to help—connect with us to learn more about our services and solutions." />
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm p-6 rounded-lg flex items-center space-x-4 border border-gray-800">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                        <FaPhone className="relative z-10 text-blue-400" size={24} />
                        <div className="relative z-10">
                            <h3 className="font-semibold">Call &nbsp;us &nbsp;today</h3>
                            <p className="text-gray-400">+1-316-555-1259</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm p-6 rounded-lg flex items-center space-x-4 border border-gray-800">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                        <FaEnvelope className="relative z-10 text-blue-400" size={24} />
                        <div className="relative z-10">
                            <h3 className="font-semibold">Send &nbsp;an &nbsp;Email</h3>
                            <p className="text-gray-400">johndoe@gmail.com</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm p-6 rounded-lg flex items-center space-x-4 border border-gray-800">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                        <FaMapMarkerAlt className="relative z-10 text-blue-400" size={24} />
                        <div className="relative z-10">
                            <h3 className="font-semibold">Visit &nbsp;Our &nbsp;HQ</h3>
                            <p className="text-gray-400">La &nbsp;defence, &nbsp;Paris</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-3 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Office" className="w-full h-auto object-cover rounded-lg" />
                    </div>

                    <div className="relative overflow-hidden lg:col-span-2 bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                        <div className="relative z-10">
                            <AuroraText className="text-2xl font-bold mb-2">Send &nbsp;us &nbsp;a &nbsp;message</AuroraText>
                            <p className="text-gray-400 mb-6">Get in touch with us for any inquiries or support. We're here to assist you and ensure your experience is exceptional.</p>
                            <form>
                                <div className="mb-4 relative">
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Full &nbsp;Name</label>
                                    <FaUser className="absolute left-3 top-10 text-gray-400" />
                                    <input type="text" id="fullName" placeholder="Enter your name here..." className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-white placeholder-gray-500" />
                                </div>
                                <div className="mb-4 relative">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your &nbsp;Email</label>
                                    <FaEnvelope className="absolute left-3 top-10 text-gray-400" />
                                    <input type="email" id="email" placeholder="Enter your email here..." className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-white placeholder-gray-500" />
                                </div>
                                <div className="mb-6 relative">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <FaRegCommentDots className="absolute left-3 top-10 text-gray-400" />
                                    <textarea id="message" placeholder="Enter your message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-white placeholder-gray-500"></textarea>
                                </div>
                                <SpotlightButton text="Get Free Quote" />
                                <p className="text-xs text-gray-500 mt-4 text-center">
                                    I understand that my data will be hold securely in accordance with the <a href="#" className="underline">privacy &nbsp;policy</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

const Contact = () => {
    return (
        <div className="text-white font-sans">
            <ContactContent />
        </div>
    );
};

export default Contact; 