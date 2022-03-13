import React, { useEffect, useState } from 'react';
import Table from '../../../../components/Table';

function Customers() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then((res) => res.json())
            .then((data) => setCustomers(data));
    }, []);

    const rows = ['Name', 'Email'];
    return (
        <div>
            <Table rows={rows} cols={customers} variant="customers" />
        </div>
    );
}

export default Customers;
