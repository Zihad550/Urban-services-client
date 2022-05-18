import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Shared/Button';
import ErrorToasts from 'components/Shared/ErrorToast';
import Input from 'components/Shared/Input';
import Label from 'components/Shared/Label';
import SuccessToasts from 'components/Shared/SuccessToast';
import Title from 'components/Shared/Title';
import useAuth from 'hooks/useAuth';
import React, { useState } from 'react';
import axiosInstance from 'services/http.service';

const PostToLet = () => {
    // hooks
    const [data, setData] = useState({
        category: 'toLet'
    });
    const { user } = useAuth();

    // toast state
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // handle form fields data
    const handleFormFieldData = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    // handle form submit
    const handlePostToLet = (e) => {
        e.preventDefault();
        setIsError(false);
        setIsSuccess(false);
        axiosInstance
            .post('/workers', {
                ...data,
                email: user.email,
                name: user.displayName,
                applicationStatus: 'Pending'
            })
            .then(({ data }) => {
                if (data.insertedId) {
                    setIsSuccess(true);
                    e.target.reset();
                } else {
                    setIsError(true);
                }
            });
    };

    return (
        <>
            <Title classes="mb-5 hidden lg:block">Post To-Let</Title>
            <div className="container px-5 mx-auto pt-5 grid  grid-cols-1 items-center ">
                <div>
                    {/* toasts */}
                    <div className="flex justify-center mb-4">
                        <SuccessToasts isSuccess={isSuccess} setIsSuccess={setIsSuccess}>
                            Request Sent Successfully
                        </SuccessToasts>
                        <ErrorToasts isError={isError} setIsError={setIsError}>
                            An Error Occurred. Please Refresh the page and try again.
                        </ErrorToasts>
                    </div>
                    <Title classes="mb-5 lg:hidden">Post To-Let</Title>
                    <form onSubmit={handlePostToLet}>
                        {/* worker name & email */}
                        <div className="flex">
                            {/* name */}
                            <div className="relative z-0 mb-6 w-full group mr-5">
                                <Input
                                    onBlur={handleFormFieldData}
                                    id="name"
                                    name="name"
                                    variant="underlined"
                                    placeholder=" "
                                    type="text"
                                    value={user.displayName}
                                />
                                <Label>Name</Label>
                            </div>
                            {/* email */}
                            <div className="relative z-0 mb-6 w-full group">
                                <Input
                                    onBlur={handleFormFieldData}
                                    id="email"
                                    name="email"
                                    variant="underlined"
                                    placeholder=" "
                                    type="email"
                                    value={user.email}
                                />
                                <Label>Email Address</Label>
                            </div>
                        </div>
                        {/* phone */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onBlur={handleFormFieldData}
                                id="phone"
                                name="phone"
                                variant="underlined"
                                placeholder=" "
                                type="number"
                            />
                            <Label>Phone Number</Label>
                        </div>

                        {/* phone and address */}
                        <div className="flex">
                            {/* phone */}
                            <div className="relative z-0 mb-6 w-full group  mr-5">
                                <Input
                                    onBlur={handleFormFieldData}
                                    name="price"
                                    variant="underlined"
                                    placeholder=" "
                                    type="number"
                                />
                                <Label>House Price</Label>
                            </div>
                            {/* phone */}
                            <div className="relative z-0 mb-6 w-full group ">
                                <Input
                                    onBlur={handleFormFieldData}
                                    name="location"
                                    variant="underlined"
                                    placeholder=" "
                                    type="text"
                                />
                                <Label>House Location</Label>
                            </div>
                        </div>
                        {/* house category */}
                        <div className="mb-5">
                            <label
                                htmlFor="categories"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Select House Category
                            </label>
                            <select
                                name="houseCategory"
                                onBlur={handleFormFieldData}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                            >
                                <option value="Office Rent">Office rent</option>
                                <option value="Bachelor House Rent">Bachelor House rent</option>
                                <option value="Family House Rent">Family house rent</option>
                            </select>
                        </div>

                        {/* image */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onBlur={handleFormFieldData}
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
};

export default PostToLet;
