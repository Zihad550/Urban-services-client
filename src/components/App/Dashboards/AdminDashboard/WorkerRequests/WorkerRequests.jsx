import SuccessToasts from 'components/Shared/SuccessToast';
import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { useLocation } from 'react-router-dom';

const WorkerRequests = () => {
    const { applications, setApplicationUpdate, applicationUpdate } = useAuth();
    const location = useLocation();
    const rows = ['Name', 'Catagories', 'Phone Number', 'Experience', 'Skill', 'Actions'];

    return (
        <>
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
        </>
    );
};

export default WorkerRequests;
