import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import Table from '../../../../Shared/Table/Table';

function BusyWorkers() {
    const { busyWorkers, setWorkingStatus } = useAuth();

    const rows = ['Name', 'Catagories', 'Phone Number', 'Action'];
    return (
        <div>
            <Table
                rows={rows}
                cols={busyWorkers}
                variant="busyWorkers"
                setWorkingStatus={setWorkingStatus}
            />
        </div>
    );
}

export default BusyWorkers;
