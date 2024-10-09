import React, {useState} from 'react';
import Mobile from "./Mobile.jsx";
import profilePic from "../assets/images/Picture1.jpg"
import phone from "../assets/images/smartphone.png";
import {PiImage} from "react-icons/pi";

const Profile = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [firstName, setFirstName] = useState('Ben');
    const [lastName, setLastName] = useState('Wright');
    const [email, setEmail] = useState('ben@example.com');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };
    return (
        <div className="grid lg:grid-cols-2 gap-4">
            <div className="card bg-base-100 w-96 shadow-xl w-full rounded-md hidden lg:block">
                <div className="card-body">
                    <Mobile phoneImg={phone} imgSrc={profilePic} name="Tonmuy Ahmmed Sifat" email="tonmoysifatmd@gmail.com"/>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl w-full rounded-md">
                <div className="card-body">
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold">Profile Details</h2>
                        <p className="text-gray-500">
                            Add your details to create a personal touch to your profile.
                        </p>
                    </div>

                    <div
                        className="flex flex-col md:flex-row md:items-center bg-gray-100 justify-center mb-6 gap-4 p-4 rounded-md">
                        <p className="basis-1/2">Profile Picture</p>
                        <div className="relative w-36 h-36 basis-1/3">
                            <label htmlFor="profile-picture" className="cursor-pointer">
                                <img
                                    src={profilePic} // Replace with a placeholder image path
                                    alt="Profile"
                                    className="w-36 h-36 object-cover rounded-md"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 rounded-md opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                                    <PiImage className="text-white text-2xl"/>
                                    <span className="text-white font-semibold">Change Image</span>
                                </div>
                            </label>
                            <input
                                id="profile-picture"
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                                accept="image/png, image/jpeg, image/bmp"
                            />
                        </div>
                        <small className="text-gray-500 basis-1/3">
                            Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
                        </small>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-md mb-20">
                        <div className="relative flex flex-col md:flex-row justify-center md:items-center mb-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 basis-1/2">
                                First name*
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                className="mt-1 focus:outline-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="relative flex flex-col md:flex-row justify-center md:items-center mb-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 basis-1/2">
                                Last name*
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                className="mt-1 focus:outline-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="relative flex flex-col md:flex-row justify-center md:items-center mb-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 basis-1/2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="mt-1 focus:outline-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <hr/>
                    <button className="btn btn-primary text-white self-end w-full md:w-[63.375px]">Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;