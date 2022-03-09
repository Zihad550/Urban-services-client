import React from 'react';
import Table from '../../../components/Table';

function BusyWorkers() {
    const rows = ['#', 'Name', 'Catagories', 'Phone Number', 'Action'];
    const busyWorkers = [
        { id: 1, name: 'Rasel', category: 'Plumber', phone: '01234567891' },
        { id: 2, name: 'Kabir', category: 'Electrician', phone: '01234567891' },
        { id: 3, name: 'Rahima', category: 'Cheff', phone: '01234567891' }
    ];
    return (
        <div>
            <Table rows={rows} cols={busyWorkers} variant="busyWorkers" />
        </div>
    );
}

export default BusyWorkers;
