import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../../../../components/Table';

function AdminWorkers() {
    const [workers, setWorkers] = useState([]);
    const { role } = useParams();
    console.log(role);
    useEffect(() => {
        fetch(`https://radiant-sea-18512.herokuapp.com/workers/${role}`)
            .then((res) => res.json())
            .then((data) => setWorkers(data));
    }, [role]);
    const rows = ['Name', 'Phone Number', 'E-mail', 'Experience', 'Skill', 'Action'];
    return (
        <div>
            <Table rows={rows} cols={workers} variant="workersTable" />
        </div>
    );
}

export default AdminWorkers;
