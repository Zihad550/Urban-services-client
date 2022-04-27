import React, { useEffect, useState } from 'react';
import axios from '../../../../../../services/http.service';
import Table from '../../../../../Shared/Table/Table';

function AdminAllBookings() {
    const [hiredWorkers, setHiredWorkers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = axios.get('/allHiredWorkers');
            setHiredWorkers(res.data);
        }
        fetchData();
        /* fetch('https://radiant-sea-18512.herokuapp.com/allHiredWorkers')
            .then((res) => res.json())
            .then((data) => setHiredWorkers(data)); */
    }, []);
    const rows = [
        'Customers Name',
        'Customers E-mail',
        'Workers Name',
        'Workers E-mail',
        'Categories',
        'Status'
    ];

    return (
        <div className="">
            <div className="flex flex-col mt-5">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <Table rows={rows} cols={hiredWorkers} variant="bookingStatus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAllBookings;
