import React, { useEffect, useState } from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function CurrentWorks() {
    const [currentWorks, setCurrentWorks] = useState([]);
    const [statusUpdate, setWorkingStatus] = useState(false);

    const { user } = useAuth();
    useEffect(() => {
        setWorkingStatus(false);
        fetch(`http://localhost:8000/currentWorks?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setCurrentWorks(data));
    }, [statusUpdate]);
    console.log(currentWorks);
    const rows = [
        'Customer Name',
        'Customer Email',
        'Customer Phone',
        'Working Status',
        'Working Progress',
        'Cost',
        'Actions'
    ];
    return (
        <div>
            <Table
                variant="currentWorks"
                rows={rows}
                cols={currentWorks}
                setWorkingStatus={setWorkingStatus}
            />
        </div>
    );
}

export default CurrentWorks;
