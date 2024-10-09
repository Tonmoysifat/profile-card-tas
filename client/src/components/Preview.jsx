import React from 'react';
import Mobile from "./Mobile.jsx";
import profilePic from "../assets/images/Picture1.jpg"

const Preview = () => {
    return (
        <div className="relative bg-white w-80 lg:w-96 shadow-xl rounded-lg flex flex-col items-center mt-20">
            <Mobile imgSrc={profilePic} name="Tonmuy Ahmmed Sifat" email="tonmoysifatmd@gmail.com"/>
        </div>
    );
};

export default Preview;