import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';

const AllWorks = () => {
    const { works } = useAuth();
    const rows = [
        'Customer Name',
        'Customer Email',
        'Customer Phone',
        'Salary',
        'Working Status',
        'Working Progress'
    ];
    return <Table cols={works} rows={rows} variant="works" />;
};

export default AllWorks;
