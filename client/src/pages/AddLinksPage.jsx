import React from 'react';
import ProfileNavbar from "../components/Navbars/ProfileNavbar.jsx";
import AddLinks from "../components/AddLinks.jsx";

const AddLinksPage = () => {
    return (
        <div className="container mx-auto">
            <ProfileNavbar/>
            <AddLinks/>
        </div>
    );
};

export default AddLinksPage;