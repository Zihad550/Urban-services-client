import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../../components/Title';
import elec1 from '../../../images/electricians/elec1.jpg';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Worker from '../../Shared/Worker/Worker';
import WorkersBanner from '../WorkersBanner/WorkersBanner';

function AvailableWorkers() {
    const [workers, setWorkers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/workers')
            .then((res) => res.json())
            .then((data) => setWorkers(data));
    }, []);
    const { role } = useParams();
    console.log(role);
    const workers2 = [
        {
            id: 1,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '8 year',
            category: 'Electrician',
            level: 'Expert',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        },
        {
            id: 2,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '5 year',
            category: 'Electrician',
            level: 'Intermediate',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        },
        {
            id: 3,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '8 year',
            category: 'Electrician',
            level: 'Expert',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        },
        {
            id: 4,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '5 year',
            category: 'Electrician',
            level: 'Intermediate',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        }
    ];
    return (
        <>
            {/* header */}
            <Header />
            {/* banner */}
            <WorkersBanner role={role} />
            {/* workers */}
            <div className="my-20">
                <Title classes="mb-5 capitalize">All Available {role}</Title>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
                    {workers2.map((worker) => (
                        <Worker worker={worker} key={worker._id} />
                    ))}
                </div>
            </div>
            {/* footer */}
            <Footer />
        </>
    );
}

export default AvailableWorkers;
