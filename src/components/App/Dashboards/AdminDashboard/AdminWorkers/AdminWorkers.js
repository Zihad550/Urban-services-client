import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../../../services/http.service';
import SuccessToasts from '../../../../Shared/SuccessToast/SuccessToasts';
import Table from '../../../../Shared/Table/Table';

function AdminWorkers() {
    const [workers, setWorkers] = useState([]);
    const [workerUpdated, setWorkerUpdated] = useState(false);
    const { role } = useParams();
    useEffect(() => {
        setWorkerUpdated(false);
        async function fetchData() {
            const res = await axios.get(`/workers/${role}`);
            setWorkers(res.data);
        }
        fetchData();
    }, [role, workerUpdated]);
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
                cols={workers}
                setWorkerUpdated={setWorkerUpdated}
                variant="workersTable"
            />
        </div>
    );
}

export default AdminWorkers;
