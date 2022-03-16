import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function Bookings() {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://radiant-sea-18512.herokuapp.com/hired?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
                if (res.status === 401) {
                    navigate('/login');
                }
            })
            .then((data) => setBookings(data));
    }, [user.email]);
    console.log(bookings);

    const rows = [
        'Worker Name',
        'Worker Phone',
        'Worker Category',
        'Working Status',
        'Working Progress'
    ];
    return (
        <div>
            <Table cols={bookings} rows={rows} variant="bookingsTable" />
        </div>
    );
}

export default Bookings;
