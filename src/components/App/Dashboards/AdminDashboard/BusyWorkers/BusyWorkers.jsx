import Table from 'components/Shared/Table/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';

const BusyWorkers = () => {
    const { busyWorkers, setWorkingStatus } = useAuth();
    const rows = ['Name', 'Catagories', 'Phone Number', 'Action'];
    return (
        <Table
            rows={rows}
            cols={busyWorkers}
            variant="busyWorkers"
            setWorkingStatus={setWorkingStatus}
        />
    );
};

export default BusyWorkers;
