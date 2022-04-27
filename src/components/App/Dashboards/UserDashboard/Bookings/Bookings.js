import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Table from '../../../../Shared/Table/Table';

function Bookings() {
    const { user, bookings } = useAuth();
    const navigate = useNavigate();
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
