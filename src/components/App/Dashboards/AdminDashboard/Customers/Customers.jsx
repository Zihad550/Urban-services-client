import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';

const Customers = () => {
    const { customers } = useAuth();
    const rows = ['Name', 'Email'];
    return <Table rows={rows} cols={customers} variant="customers" />;
};

export default Customers;
