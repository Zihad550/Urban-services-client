import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';

const CurrentWorks = () => {
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
    return <Table variant="currentWorks" rows={rows} cols={currentWorks} />;
};

export default CurrentWorks;
