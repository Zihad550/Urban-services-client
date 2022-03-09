import React from 'react';
import Table from '../../../components/Table';

function WorkerList() {
    const rows = ['#', 'Name', 'Catagories', 'Phone Number', 'Actions'];
    const workers = [
        { id: 1, name: 'Rasel', category: 'Plumber', phone: '012348698121' },
        { id: 2, name: 'Kabir', category: 'Plumber', phone: '012348698121' },
        { id: 3, name: 'Rahima', category: 'Plumber', phone: '012348698121' },
        { id: 4, name: 'Rabbi', category: 'Plumber', phone: '012348698121' },
        { id: 5, name: 'Saima', category: 'Plumber', phone: '012348698121' },
        { id: 6, name: 'Reshmi', category: 'Plumber', phone: '012348698121' },
        { id: 7, name: 'Rasel', category: 'Plumber', phone: '012348698121' },
        { id: 8, name: 'Rakib', category: 'Plumber', phone: '012348698121' }
    ];
    return (
        <div>
            <Table rows={rows} cols={workers} variant="workersTable" />
        </div>
    );
}

export default WorkerList;
