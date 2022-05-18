import SuccessToasts from 'components/Shared/SuccessToast';
import Table from 'components/Shared/Table';
import useGetData from 'hooks/useGetData';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AdminWorkers = () => {
    const [workerUpdated, setWorkerUpdated] = useState(false);
    const { role } = useParams();
    const { data } = useGetData(`/workers/${role}`, { role, workerUpdated });

    const rows = ['Name', 'Phone Number', 'E-mail', 'Experience', 'Skill', 'Action'];
    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={workerUpdated} setIsSuccess={setWorkerUpdated}>
                    Worker Deleted Successfully
                </SuccessToasts>
            </div>
            <Table
                rows={rows}
                cols={data}
                setWorkerUpdated={setWorkerUpdated}
                variant="workersTable"
            />
        </div>
    );
};

export default AdminWorkers;
