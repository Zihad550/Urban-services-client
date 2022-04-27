import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import Table from '../../../../Shared/Table/Table';

function CurrentWorks() {
    const { user, currentWorks } = useAuth();

    const rows = [
        'Customer Name',
        'Customer Email',
        'Customer Phone',
        'Working Status',
        'Working Progress',
        'Cost',
        'Actions'
    ];
    return (
        <div>
            <Table variant="currentWorks" rows={rows} cols={currentWorks} />
        </div>
    );
}

export default CurrentWorks;
