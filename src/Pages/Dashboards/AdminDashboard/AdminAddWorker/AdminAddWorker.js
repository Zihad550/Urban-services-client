import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Title from '../../../../components/Title';
import src from '../../../../images/addWorker.svg';

function AdminAddWorker() {
    const [data, setData] = useState({ category: 'electrician', role: 'worker' });
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
        <div className="w-5/6 mx-auto pt-5 grid grid-cols-2 items-center">
            <div>
                <img src={src} alt="" />
            </div>
            <div>
                <Title classes="mb-5">Add New Worker</Title>
                <form onSubmit={handleSubmit}>
                    {/* worker name & email */}
                    <div className="flex">
                        {/* name */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onChange={handleFormData}
                                id="name"
                                name="name"
                                variant="underlined"
                                placeholder=" "
                                type="text"
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name
                            </label>
                        </div>
                        {/* email */}
                        <div className="relative z-0 mb-6 w-full group">
                            <Input
                                onChange={handleFormData}
                                id="email"
                                name="email"
                                variant="underlined"
                                placeholder=" "
                                type="email"
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                    </div>

                    {/* phone */}
                    <div className="relative z-0 mb-6 w-full group me-5">
                        <Input
                            onChange={handleFormData}
                            id="phone"
                            name="phone"
                            variant="underlined"
                            placeholder=" "
                            type="number"
                        />
                        <label
                            htmlFor="phone"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone Number
                        </label>
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
                            onChange={handleFormData}
                            id="categories"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                        >
                            <option>Electrician</option>
                            <option>Plumber</option>
                            <option>Chef</option>
                        </select>
                    </div>

                    {/* name */}
                    <div className="relative z-0 mb-6 w-full group mr-5">
                        <Input
                            onChange={handleFormData}
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
    );
}

export default AdminAddWorker;
