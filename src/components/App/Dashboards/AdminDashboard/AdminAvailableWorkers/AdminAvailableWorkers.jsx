import Table from 'components/Shared/Table/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';

const AdminAvailableWorkers = () => {
    const { availableWorkers, setWorkingStatus } = useAuth();
    const rows = ['Name', 'Catagories', 'Phone Number', 'Action'];
    return (
        <Table
            rows={rows}
            cols={availableWorkers}
            variant="availableWorkers"
            setWorkingStatus={setWorkingStatus}
        />
    );
};

export default AdminAvailableWorkers;
