import React, { useEffect, useState } from 'react';
import SuccessToasts from '../../../../Shared/SuccessToast/SuccessToasts';
import Table from '../../../../Shared/Table/Table';

function ToLetRequests() {
    const [requests, setRequests] = useState([]);
    const [toLetUpdate, setToLetUpdate] = useState(false);

    useEffect(() => {
        fetch(`https://radiant-sea-18512.herokuapp.com/toLets?status=Pending`)
            .then((res) => res.json())
            .then((data) => setRequests(data));
    }, [toLetUpdate]);

    const rows = ['Name', 'Email', 'Phone', 'Rent', 'Location', 'House Type', 'Status', 'Actions'];
    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={toLetUpdate} setIsSuccess={setToLetUpdate}>
                    Action Performed Successfully
                </SuccessToasts>
            </div>
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
