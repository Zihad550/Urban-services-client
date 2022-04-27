import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import Table from '../../../../Shared/Table/Table';

function AdminAvailableWorkers() {
    const { availableWorkers, setWorkingStatus } = useAuth();
    const rows = ['Name', 'Catagories', 'Phone Number', 'Action'];

    return (
        <div>
            <Table
                rows={rows}
                cols={availableWorkers}
                variant="availableWorkers"
                setWorkingStatus={setWorkingStatus}
            />
        </div>
    );
}

export default AdminAvailableWorkers;
