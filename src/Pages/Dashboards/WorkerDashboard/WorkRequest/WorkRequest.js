import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function WorkRequest() {
    const { workRequests } = useAuth();
    const rows = [
        'Customer Name',
        'Customer Phone',
        'Customer Email',
        'Salary',
        'Request Status',
        'Actions'
    ];
    return (
        <div>
            <Table cols={workRequests} rows={rows} variant="workRequest" />
        </div>
    );
}

export default WorkRequest;
