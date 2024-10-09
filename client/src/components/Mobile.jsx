import React from 'react';
import {FaArrowRight, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";


const Mobile = ({phoneImg, imgSrc, name, email}) => {
    const socialLinks = [
        {
            platform: 'GitHub',
            url: 'https://www.github.com',
            bgColor: 'bg-black',
            icon: <FaGithub className="text-white"/>,
            textColor: 'text-white'
        },
        {
            platform: 'YouTube',
            url: 'https://www.youtube.com',
            bgColor: 'bg-red-600',
            icon: <FaYoutube className="text-white"/>,
            textColor: 'text-white'
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com',
            bgColor: 'bg-blue-600',
            icon: <FaLinkedin className="text-white"/>,
            textColor: 'text-white'
        },
    ];
    return (
        <div className="relative w-full h-[700px] mx-auto">
            {
                phoneImg && <img
                    src={phoneImg}
                    alt="Mobile Outline"
                    className="w-full h-full object-cover"
                />
            }
            <div className={phoneImg?"absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center":"absolute top-10 left-0 w-full h-full flex flex-col items-center"}>


                <div className="flex justify-center mb-4">
                    <img className={imgSrc?"w-24 h-24 rounded-full border-2 border-indigo-600":"w-24 h-24 rounded-full bg-gray-300"} src={imgSrc}/>
                </div>
                <div className="text-center mb-10">
                    <p className={name ? "font-bold mb-4" : "h-4 bg-gray-300 rounded-full w-32 mx-auto mb-2"}>
                        {name}
                    </p>
                    <p className={name ? "text-gray-500" : "h-4 bg-gray-300 rounded-full w-32 mx-auto mb-2"}>
                        {email}
                    </p>
                </div>
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={phoneImg?`${link.bgColor} ${link.textColor} flex items-center justify-between p-4 rounded-lg mb-4 w-[45%]  2xl:w-[36%]`:`${link.bgColor} ${link.textColor} flex items-center justify-between p-4 rounded-lg mb-4 w-[80%]  2xl:w-[90%]`}
                    >
                        <div className="flex items-center">
                            {link.icon}
                            <span className="ml-3">{link.platform}</span>
                        </div>
                        <FaArrowRight/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Mobile;