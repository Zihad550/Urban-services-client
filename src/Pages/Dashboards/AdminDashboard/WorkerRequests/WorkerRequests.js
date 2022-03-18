import React from 'react';
import SuccessToasts from '../../../../components/SuccessToasts';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function WorkerRequests() {
    const { applications, setApplicationUpdate, applicationUpdate } = useAuth();
    const rows = ['Name', 'Catagories', 'Phone Number', 'Experience', 'Skill', 'Actions'];

    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={applicationUpdate} setIsSuccess={setApplicationUpdate}>
                    Action Performed Successfully
                </SuccessToasts>
            </div>
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
