import React, { useEffect, useState } from 'react';
import Table from '../../../../components/Table';

function BusyWorkers() {
    const [workers, setWorkers] = useState([]);
    const [workingStatus, setWorkingStatus] = useState(false);
    useEffect(() => {
        setWorkingStatus(false);
        fetch('https://radiant-sea-18512.herokuapp.com/busyWorkers')
            .then((res) => res.json())
            .then((data) => setWorkers(data));
    }, [workingStatus]);
    const rows = ['Name', 'Catagories', 'Phone Number', 'Action'];
    return (
        <div>
            <Table
                rows={rows}
                cols={workers}
                variant="busyWorkers"
                setWorkingStatus={setWorkingStatus}
            />
        </div>
    );
}

export default BusyWorkers;
