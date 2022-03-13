import React, { useEffect, useState } from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function Bookings() {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:8000/hired?email=${user.email}`)
            .then((res) => res.json())
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
