import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Title from '../../../components/Title';
import useAuth from '../../../hooks/useAuth';

function Hire() {
    const [worker, setWorker] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://radiant-sea-18512.herokuapp.com/worker/${id}`)
            .then((res) => res.json())
            .then((data) => setWorker(data));
    }, []);

    const { user } = useAuth();
    const { displayName, photoURL, email } = user;
    const [data, setData] = useState({});
    console.log(data);

    console.log(id);

    // handle form fields data
    const handleFormData = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://radiant-sea-18512.herokuapp.com/hired', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                cost: data.cost,
                workerName: worker.name,
                workerLocation: worker.location,
                workerCategory: worker.category,
                workerPhone: worker.phone,
                customerName: displayName,
                customerEmail: email
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Added Successfully');
                    e.target.reset();
                    setData('');
                    navigate('/dashboard/hired');
                } else {
                    alert('Process Unsuccessful');
                }
            });
    };

    return (
        <div className="container flex w-full items-center justify-center m-auto h-screen">
            <div className="shadow-lg shadow-lime-300 p-10 rounded-xl">
                <Title classes="mb-5">Confirm</Title>
                <form onSubmit={handleSubmit}>
                    {/* worker name & email */}
                    <div className="flex">
                        {/* name */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                value={displayName}
                                onBlur={handleFormData}
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
                                onBlur={handleFormData}
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
                            onBlur={handleFormData}
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
                            onBlur={handleFormData}
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
    );
}

export default Hire;
