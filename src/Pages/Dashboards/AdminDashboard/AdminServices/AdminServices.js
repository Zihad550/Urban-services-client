import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../../../../components/Table';

function AdminServices() {
    const { type } = useParams();
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        setIsDeleted(false);
        fetch(`http://localhost:8000/services/${type}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [type, isDeleted]);
    const rows = ['Name', 'Category', 'actions'];

    console.log(services);
    return (
        <div>
            <Table
                setIsDeleted={setIsDeleted}
                rows={rows}
                cols={services}
                variant="adminServices"
            />
        </div>
    );
}

export default AdminServices;
