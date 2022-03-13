import React, { useEffect, useState } from 'react';
import Table from '../../../../components/Table';

function WorkerRequests() {
    const [requests, setRequests] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        setStatus(false);
        fetch('http://localhost:8000/applications')
            .then((res) => res.json())
            .then((data) => setRequests(data));
    }, [status]);
    const rows = ['Name', 'Catagories', 'Phone Number', 'Experience', 'Skill', 'Actions'];

    return (
        <div>
            <Table rows={rows} cols={requests} variant="workersRequest" setStatus={setStatus} />
        </div>
    );
}

export default WorkerRequests;
