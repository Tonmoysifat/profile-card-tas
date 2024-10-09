import React from 'react';
import ProfileNavbar from "../components/Navbars/ProfileNavbar.jsx";
import Profile from "../components/Profile.jsx";

const ProfilePage = () => {
    return (
        <div className="container mx-auto">
            <ProfileNavbar/>
            <Profile/>
        </div>
    );
};

export default ProfilePage;