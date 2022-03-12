import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Label from '../../../../components/Label';
import Title from '../../../../components/Title';
import src from '../../../../images/addWorker.svg';

function AdminAddWorker() {
    /* 
    //  https://i.ibb.co/gFxX0PG/elec8.png
        // https://i.ibb.co/x8DVqwM/elec6.png
        // https://i.ibb.co/mT1Kzx9/elec1.png
        // https://i.ibb.co/JpqB8wn/elec7.png
        // https://i.ibb.co/556P6rK/elec4.png
        // https://i.ibb.co/JshHdq2/elec2.png
        // https://i.ibb.co/yNB0MSB/elec3.png
        // https://i.ibb.co/X29gT3v/elec5.png 
        */
    const [data, setData] = useState({
        category: 'electrician',
        role: 'worker',
        experience: '0-1 year',
        skill: 'beginner',
        applicationStatus: 'approved'
    });
    console.log(data);

    // handle form fields data
    const handleFormData = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/workers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Added Successfully');
                    e.target.reset();
                    setData('');
                } else {
                    alert('Process Unsuccessful');
                }
            });
    };

    return (
        <>
            <Title classes="mb-5 hidden lg:block">Add New Worker</Title>
            <div className="container px-5 lg:mx-auto pt-5 grid lg:grid-cols-2 grid-cols-1 items-center">
                <div className="lg:flex hidden">
                    <img src={src} alt="" />
                </div>
                <div>
                    <Title classes="mb-5 lg:hidden">Add New Worker</Title>
                    <form onSubmit={handleSubmit}>
                        {/* worker name & email */}
                        <div className="flex">
                            {/* name */}
                            <div className="relative z-0 mb-6 w-full group mr-5">
                                <Input
                                    onBlur={handleFormData}
                                    id="name"
                                    name="name"
                                    variant="underlined"
                                    placeholder=" "
                                    type="text"
                                />
                                <Label>Name</Label>
                            </div>
                            {/* email */}
                            <div className="relative z-0 mb-6 w-full group">
                                <Input
                                    onBlur={handleFormData}
                                    id="email"
                                    name="email"
                                    variant="underlined"
                                    placeholder=" "
                                    type="email"
                                />
                                <Label>Email Address</Label>
                            </div>
                        </div>

                        {/* phone and address */}
                        <div className="flex">
                            {/* phone */}
                            <div className="relative z-0 mb-6 w-full group mr-5">
                                <Input
                                    onBlur={handleFormData}
                                    id="phone"
                                    name="phone"
                                    variant="underlined"
                                    placeholder=" "
                                    type="number"
                                />
                                <Label>Phone Number</Label>
                            </div>
                            {/* phone */}
                            <div className="relative z-0 mb-6 w-full group ">
                                <Input
                                    onBlur={handleFormData}
                                    name="location"
                                    variant="underlined"
                                    placeholder=" "
                                    type="text"
                                />
                                <Label>Location</Label>
                            </div>
                        </div>
                        {/* experience & level */}
                        <div className="flex">
                            {/* experience */}
                            <div className="mb-5 w-full mr-5">
                                <label
                                    htmlFor="categories"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                >
                                    Select Year of experience
                                </label>
                                <select
                                    name="experience"
                                    onBlur={handleFormData}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                >
                                    <option value="0-1 year">0 - 1 year</option>
                                    <option value="1-5 year">1 - 5 year</option>
                                    <option value="5+ year">5+ year</option>
                                </select>
                            </div>
                            {/* level of skill */}
                            <div className="mb-5 w-full">
                                <label
                                    htmlFor="categories"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                >
                                    Select Skill level
                                </label>
                                <select
                                    name="skill"
                                    onBlur={handleFormData}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="expert">Expert</option>
                                </select>
                            </div>
                        </div>
                        {/* category */}
                        <div className="mb-5">
                            <label
                                htmlFor="categories"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Select Category
                            </label>
                            <select
                                name="category"
                                onBlur={handleFormData}
                                id="categories"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                            >
                                <option value="electrician">Electrician</option>
                                <option value="plumber">Plumber</option>
                                <option value="chef">Chef</option>
                            </select>
                        </div>

                        {/* name */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onBlur={handleFormData}
                                id="src"
                                name="src"
                                variant="underlined"
                                placeholder=" "
                                type="text"
                            />
                            <label
                                htmlFor="src"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Image
                            </label>
                        </div>

                        <Button type="submit" variant="primary">
                            Add <FontAwesomeIcon icon={faAdd} />
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminAddWorker;
