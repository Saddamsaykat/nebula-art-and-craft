import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className=" container mx-auto max-w-4xl py-8 ">
                <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                        <p className="mb-2">Mobile: +1234567890</p>
                        <p className="mb-2">Email: example@example.com</p>
                        <p>Office Address: 123 Main St, City, Country</p>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                        <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram></FaInstagram>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <FaYoutube></FaYoutube>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default AboutUs;