import React from 'react';
import {NavLink} from "react-router-dom";
import {FaLink} from "react-icons/fa";
import {FaRegCircleUser} from "react-icons/fa6";
import {BsLink} from "react-icons/bs";
import {IoEyeOutline} from "react-icons/io5";

const ProfileNavbar = () => {
    return (
            <div className="navbar bg-base-100 shadow rounded-lg px-5 md:px-3 py-1 my-4">
                <div className="navbar-start">
                    <NavLink className="flex items-center justify-center" to="/">
                        <BsLink className="bg-[#603bfc] text-white text-3xl font-bold rounded-md mr-1 px-1 py-0"/>
                        <span className="hidden md:block font-bold text-xl">devLinks</span>
                    </NavLink>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink
                            className={({isActive}) => (isActive ? "mr-3 flex items-center justify-center bg-[#efecfe] rounded-md py-3 px-5 text-[#603bfc]" : "mr-3 flex items-center justify-center py-3 px-5 text-gray-500")}
                            to="/">
                            <FaLink className="md:mr-2 text-lg"/>
                            <span className="hidden md:block font-bold">Links</span>
                        </NavLink>
                        <NavLink
                            className={({isActive}) => (isActive ? "mr-3 flex items-center justify-center bg-[#efecfe] rounded-md py-3 px-5 text-[#603bfc]" : "mr-3 flex items-center justify-center py-3 px-5 text-gray-500")}
                            to="/profile">
                            <FaRegCircleUser className="md:mr-2 text-lg"/>
                            <span className="hidden md:block font-bold">Profile Details</span>
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink className="border border-[#603bfc] py-2 px-4 md:px-6 rounded-md" to="/preview">
                        <IoEyeOutline className="text-[#603bfc] text-2xl md:hidden"/>
                        <span className="hidden md:block">Preview</span>
                    </NavLink>
                </div>
            </div>
    );
};

export default ProfileNavbar;