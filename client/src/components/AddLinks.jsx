import React, {useState} from 'react';
import {FaGithub, FaYoutube, FaTwitter, FaLinkedin, FaLink, FaArrowRight} from 'react-icons/fa';
import Select from 'react-select';
import phone from "../assets/images/smartphone.png";
import Mobile from "./Mobile.jsx";

const platformOptions = [
    {value: 'GitHub', label: 'GitHub', icon: <FaGithub className="inline-block text-gray-700 mr-2"/>},
    {value: 'YouTube', label: 'YouTube', icon: <FaYoutube className="inline-block text-gray-700 mr-2"/>},
    {value: 'Twitter', label: 'Twitter', icon: <FaTwitter className="inline-block text-gray-700 mr-2"/>},
    {value: 'LinkedIn', label: 'LinkedIn', icon: <FaLinkedin className="inline-block text-gray-700 mr-2"/>},
];

const AddLinks = () => {
    const [links, setLinks] = useState([
        {id: 1, platform: 'GitHub', url: 'https://www.github.com/benwright'},
        {id: 2, platform: 'YouTube', url: 'https://www.youtube.com/benwright'},
    ]);

    const handleAddLink = () => {
        const newLink = {id: links.length + 1, platform: '', url: ''};
        setLinks([...links, newLink]);
    };

    const handleRemoveLink = (id) => {
        setLinks(links.filter(link => link.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setLinks(links.map(link =>
            link.id === id ? {...link, [field]: value} : link
        ));
    };

    const formatOptionLabel = ({label, icon}) => (
        <div className="flex items-center">
            {icon}
            <span>{label}</span>
        </div>
    );
    return (
        <div className="grid lg:grid-cols-2 gap-4">
            <div className="card bg-base-100 w-96 shadow-xl w-full rounded-md hidden lg:block">
                <div className="card-body">
                    <Mobile phoneImg={phone}/>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl w-full rounded-md">
                <div className="card-body">
                <div className="max-w-xl mx-auto p-6">
                        <h2 className="text-2xl font-bold mb-4">Customize your links</h2>
                        <p className="text-gray-600 mb-6">
                            Add/edit/remove links below and then share all your profiles with the world!
                        </p>
                        <button
                            onClick={handleAddLink}
                            className="my-4 w-full py-2 px-4 text-indigo-600 rounded-md border font-bold border-indigo-600"
                        >
                            + Add new link
                        </button>
                        {links.map((link, index) => (
                            <div key={link.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-medium">Link #{index + 1}</h3>
                                    <button
                                        onClick={() => handleRemoveLink(link.id)}
                                        className="text-gray-500 text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Platform
                                    </label>
                                    <div className="flex items-center">
                                        <Select
                                            value={platformOptions.find(option => option.value === link.platform)}
                                            onChange={(selectedOption) => handleInputChange(link.id, 'platform', selectedOption.value)}
                                            options={platformOptions}
                                            formatOptionLabel={formatOptionLabel}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Link
                                    </label>
                                    <div className="relative mt-1">
                                        <FaLink
                                            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500"/>
                                        <input
                                            type="text"
                                            value={link.url}
                                            onChange={(e) => handleInputChange(link.id, 'url', e.target.value)}
                                            className="pl-8 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className="btn btn-primary text-white float-right w-full md:w-[63.375px]">Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLinks;
