import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function WorkerRequests() {
    const { applications, setApplicationUpdate } = useAuth();
    const rows = ['Name', 'Catagories', 'Phone Number', 'Experience', 'Skill', 'Actions'];

    return (
        <div>
            <Table
                rows={rows}
                cols={applications}
                variant="workersRequest"
                setStatus={setApplicationUpdate}
            />
        </div>
    );
}

export default WorkerRequests;
