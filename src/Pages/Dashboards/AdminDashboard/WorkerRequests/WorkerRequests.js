import React from 'react';
import Table from '../../../../components/Table';

function WorkerRequests() {
    const rows = ['#', 'Name', 'Catagories', 'Phone Number', 'Experience', 'Actions'];
    const requests = [
        { id: 1, name: 'Rasel', category: 'Plumber', phone: '01234567891', experience: '2 years' },
        { id: 1, name: 'Kabir', category: 'Plumber', phone: '01234567891', experience: '2 years' },
        { id: 1, name: 'Rahima', category: 'Plumber', phone: '01234567891', experience: '2 years' },
        { id: 1, name: 'Rabbi', category: 'Plumber', phone: '01234567891', experience: '2 years' }
    ];
    return (
        <div>
            <Table rows={rows} cols={requests} variant="workersRequest" />
        </div>
    );
}

export default WorkerRequests;
