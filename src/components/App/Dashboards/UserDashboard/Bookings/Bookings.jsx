import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user, bookings } = useAuth();
    const navigate = useNavigate();
    const rows = [
        'Worker Name',
        'Worker Phone',
        'Worker Category',
        'Working Status',
        'Working Progress'
    ];
    return <Table cols={bookings} rows={rows} variant="bookingsTable" />;
};

export default Bookings;
