import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import SuccessToasts from '../../../../Shared/SuccessToast/SuccessToasts';
import Table from '../../../../Shared/Table/Table';

function WorkRequest() {
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
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={workUpdate} setIsSuccess={setWorkUpdate}>
                    Worker Deleted Successfully
                </SuccessToasts>
            </div>
            <Table cols={workRequests} rows={rows} variant="workRequest" />
        </div>
    );
}

export default WorkRequest;
