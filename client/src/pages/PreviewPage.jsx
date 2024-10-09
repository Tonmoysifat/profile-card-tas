import React from 'react';
import PreviewNavbar from "../components/Navbars/PreviewNavbar.jsx";
import Preview from "../components/Preview.jsx";

const PreviewPage = () => {
    return (
        <div className="md:bg-indigo-600 h-80 flex flex-col justify-start items-center">
            <PreviewNavbar/>
            <Preview/>
        </div>
    );
};

export default PreviewPage;