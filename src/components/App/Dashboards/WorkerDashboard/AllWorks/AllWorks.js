import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import Table from '../../../../Shared/Table/Table';

function AllWorks() {
    const { works } = useAuth();
    const rows = [
        'Customer Name',
        'Customer Email',
        'Customer Phone',
        'Salary',
        'Working Status',
        'Working Progress'
    ];
    return (
        <div>
            <Table cols={works} rows={rows} variant="works" />
        </div>
    );
}

export default AllWorks;
