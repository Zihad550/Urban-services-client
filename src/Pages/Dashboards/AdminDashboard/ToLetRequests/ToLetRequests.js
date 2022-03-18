import React, { useEffect, useState } from 'react';
import Table from '../../../../components/Table';

function ToLetRequests() {
    const [requests, setRequests] = useState([]);
    const [toLetUpdate, setToLetUpdate] = useState(false);
    useEffect(() => {
        setToLetUpdate(false);
        fetch(`http://localhost:8000/toLets?status=Pending`)
            .then((res) => res.json())
            .then((data) => setRequests(data));
    }, [toLetUpdate]);

    const rows = ['Name', 'Email', 'Phone', 'Rent', 'Location', 'House Type', 'Status', 'Actions'];
    return (
        <div>
            <Table
                cols={requests}
                rows={rows}
                variant="toLetRequests"
                setToLetUpdate={setToLetUpdate}
            />
        </div>
    );
}

export default ToLetRequests;
