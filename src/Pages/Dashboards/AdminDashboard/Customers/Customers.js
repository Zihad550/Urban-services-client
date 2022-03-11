import React from 'react';
import Table from '../../../../components/Table';

function Customers() {
    const customers = [
        { id: 1, name: 'Rasel', phone: '01234567891', email: 'rasel@gmail.com' },
        { id: 1, name: 'Rahil', phone: '01234567891', email: 'rahil@gmail.com' },
        { id: 1, name: 'Rosy', phone: '01234567891', email: 'rosy@gmail.com' }
    ];
    const rows = ['#', 'Name', 'Phone', 'Email'];
    return (
        <div>
            <Table rows={rows} cols={customers} variant="customers" />
        </div>
    );
}

export default Customers;
