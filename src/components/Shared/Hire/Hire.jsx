import useAuth from 'hooks/useAuth';
import useGetData from 'hooks/useGetData';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from 'services/http.service';
import Button from '../Button';
import Input from '../Input';
import Label from '../Label';
import Title from '../Title';

const Hire = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: worker } = useGetData(`/worker/${id}`, { id });

    const { user, setRefreshClientRequest } = useAuth();
    const { displayName, photoURL, email } = user;
    const [data, setData] = useState({});

    // handle form fields data
    const handleFormFieldData = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .post('/hired', {
                ...data,
                cost: data.cost,
                workerName: worker?.name,
                workerLocation: worker?.location,
                workerCategory: worker?.category,
                workerPhone: worker?.phone,
                customerName: displayName,
                customerEmail: email,
                workingStatus: 'Pending',
                workingProgress: '0%',
                workerEmail: worker?.email
            })
            .then(({ data }) => {
                if (data.insertedId) {
                    setRefreshClientRequest(true);
                    alert('Added Successfully');
                    e.target.reset();
                    setData('');
                    navigate('/userDashboard/requestPending');
                } else {
                    alert('Process Unsuccessful');
                }
            });
    };

    return (
        <>
            {/* header */}
            <Link
                to="/"
                className="text-4xl text-center font-serif w-full inline-block border-b-2 py-2"
            >
                Urban Services
            </Link>
            {/* body */}
            <div className="container flex w-full items-center justify-center m-auto h-[80vh]">
                <div className="shadow-lg shadow-lime-300 p-10 rounded-xl">
                    <Title classes="mb-5">Confirm</Title>
                    <form onSubmit={handleSubmit}>
                        {/* worker name & email */}
                        <div className="flex">
                            {/* name */}
                            <div className="relative z-0 mb-6 w-full group mr-5">
                                <Input
                                    value={displayName}
                                    onBlur={handleFormFieldData}
                                    name="customerName"
                                    variant="underlined"
                                    placeholder=" "
                                    type="text"
                                />
                                <Label>Your Name</Label>
                            </div>
                            {/* email */}
                            <div className="relative z-0 mb-6 w-full group">
                                <Input
                                    value={email}
                                    onBlur={handleFormFieldData}
                                    id="email"
                                    name="customerEmail"
                                    variant="underlined"
                                    placeholder=" "
                                    type="email"
                                />
                                <Label>Your Email Address</Label>
                            </div>
                        </div>

                        {/* phone  */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onBlur={handleFormFieldData}
                                id="phone"
                                name="customerPhone"
                                variant="underlined"
                                placeholder=" "
                                type="number"
                            />
                            <Label>Your Phone Number</Label>
                        </div>
                        {/* cost  */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onBlur={handleFormFieldData}
                                name="cost"
                                variant="underlined"
                                placeholder=" "
                                type="number"
                            />
                            <Label>Cost</Label>
                        </div>

                        {/* category */}

                        <Button type="submit" variant="primary">
                            Confirm
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Hire;
