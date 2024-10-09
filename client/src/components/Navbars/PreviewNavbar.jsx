import React from 'react';
import {NavLink} from "react-router-dom";

const PreviewNavbar = () => {
    return (
        <div
            className="bg-white w-full p-6 rounded-lg shadow-md flex justify-between items-center container mx-auto rounded-lg px-5 md:px-3 py-3 my-4">
            <NavLink to="/"
                className="text-indigo-600 bg-white px-6 py-2 rounded-md border border-indigo-600 hover:bg-indigo-100">
                Back to Editor
            </NavLink>
            <NavLink to="/preview" className="text-white bg-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-700">
                Share Link
            </NavLink>
        </div>
    );
};

export default PreviewNavbar;