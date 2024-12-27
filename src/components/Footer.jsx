import React from 'react';
import DefaultBtn from './Utility/DefaultBtn';
import ContactUs from './ContactUs';

const SocialLink = ({ icon, link, label, showLabel }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
        <img src={icon} alt={`${label} icon`} className="w-6 h-6 sm:w-8 sm:h-8" />
        {showLabel && <span className="text-white text-sm md:text-base lg:text-lg">{label}</span>}
    </a>
);

const Footer = () => {
    //   const navigate = useNavigate();

    const handleContactUs = () => {
        if (window.innerWidth <= 768) {
            <ContactUs />
        }
    };

    const socialLinks = [
        { icon: "/instagram.svg", link: "https://www.instagram.com/iic_gcoen/", label: "Follow us on Instagram" },
        { icon: "/linkedin.svg", link: "https://www.linkedin.com/company/iicgcoenagpur/", label: "Connect on LinkedIn" },
        { icon: "/x.svg", link: "https://twitter.com/iic_gcoen?lang=en", label: "Follow us on X (Twitter)" },
        { icon: "/youtube.svg", link: "https://www.youtube.com/@iic_gcoen", label: "Subscribe to our YouTube Channel" },
    ];

    return (
        <footer className="bg-[#1E1E1E]">
            <div className={`flex flex-col md:flex-row px-6 md:px-12 lg:px-16 py-8 md:py-16`}>
                {/* Social Links Section for Desktop */}
                <div className="md:block max-sm:hidden sm:hidden space-y-6 flex-1">
                    {socialLinks.map(({ icon, link, label }, index) => (
                        <SocialLink key={index} icon={icon} link={link} label={label} showLabel={true} />
                    ))}
                </div>

                {/* Call-to-Action Section */}
                <div className=' flex flex-col items-center md:items-end'>
                    <div className="text-white  font-bold text-2xl pb-3 sm:text-3xl md:text-4xl leading-snug gap-y-4 mt-8 md:mt-0">
                        <p>Feel free to reach out to us!</p>
                    </div>
                    <DefaultBtn
                        name="Event with us"
                        HoverColor="hover:bg-gray-300 text-black"
                        txtColor="text-black bg-white border-2 border-black"
                    />
                </div>
                {/* Social Links Section for Mobile */}
                <div className="lg:hidden flex flex-row gap-x-3 justify-center mt-8">
                    {socialLinks.map(({ icon, link, label }, index) => (
                        <SocialLink key={index} icon={icon} link={link} label={label} showLabel={false} />
                    ))}
                </div>
            </div>

            {/* Contact Us Button for Mobile */}
            <button
                onClick={handleContactUs}
                className="block sm:hidden bg-[#1E1E1E] w-full py-1 pb-2 text-white font-bold text-center"
            >
                Contact Us
            </button>

        </footer>
    );
};

export default Footer;