import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import Table from '../../../../Shared/Table/Table';

function Customers() {
    const { customers } = useAuth();
    const rows = ['Name', 'Email'];
    return (
        <div>
            <Table rows={rows} cols={customers} variant="customers" />
        </div>
    );
}

export default Customers;
