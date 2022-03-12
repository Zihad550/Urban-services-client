import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Title from '../../../../components/Title';
import src from '../../../../images/addService.svg';

function AdminAddService() {
    const [data, setData] = useState({ category: 'electricianService' });
    console.log(data);

    // handle form fields data
    const handleFormData = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };
    console.log(data);

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/services', {
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
                } else {
                    alert('Process Unsuccessful');
                }
            });
    };

    return (
        <>
            <Title classes="hidden lg:block">Add New Service</Title>
            <div className="Container lg:mx-auto px-5 pt-5 grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="hidden lg:flex">
                    <img src={src} alt="" />
                </div>
                <div>
                    <Title classes="mb-5 lg:hidden">Add New Service</Title>
                    <form onSubmit={handleSubmit}>
                        {/* service name */}
                        <div className="relative z-0 mb-3 w-full group ">
                            <Input
                                onBlur={handleFormData}
                                name="name"
                                variant="outlined"
                                placeholder="Service Name"
                                type="text"
                            />
                        </div>
                        {/* service image */}
                        <div className="relative z-0 mb-3 w-full group ">
                            <Input
                                onBlur={handleFormData}
                                name="src"
                                variant="outlined"
                                placeholder="Service Image"
                                type="text"
                            />
                        </div>

                        {/* about the service */}
                        <div>
                            <textarea
                                onBlur={handleFormData}
                                id="message"
                                rows="4"
                                name="about"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="About the service"
                                required
                            />
                        </div>

                        {/* service category */}
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option value="electricianService">Electrician Service</option>
                                <option value="plumberService">Plumber Service</option>
                                <option value="chefService">Chef Service</option>
                            </select>
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

export default AdminAddService;
