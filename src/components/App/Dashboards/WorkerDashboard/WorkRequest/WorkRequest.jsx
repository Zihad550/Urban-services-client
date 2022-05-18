import SuccessToasts from 'components/Shared/SuccessToast';
import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';

const WorkRequest = () => {
    const { workRequests, setWorkUpdate, workUpdate } = useAuth();
    const rows = [
        'Customer Name',
        'Customer Phone',
        'Customer Email',
        'Salary',
        'Request Status',
        'Actions'
    ];
    return (
        <>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={workUpdate} setIsSuccess={setWorkUpdate}>
                    Worker Deleted Successfully
                </SuccessToasts>
            </div>
            <Table cols={workRequests} rows={rows} variant="workRequest" />
        </>
    );
};

export default WorkRequest;
