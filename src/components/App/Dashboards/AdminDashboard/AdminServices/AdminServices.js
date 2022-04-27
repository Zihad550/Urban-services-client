import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../../../services/http.service';
import SuccessToasts from '../../../../Shared/SuccessToast/SuccessToasts';
import Table from '../../../../Shared/Table/Table';

function AdminServices() {
    const { type } = useParams();
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        setIsDeleted(false);
        async function fetchData() {
            const res = await axios.get(`/services/${type}`);
            setServices(res.data);
        }
        fetchData();
    }, [type, isDeleted]);
    const rows = ['Name', 'Category', 'actions'];

    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={isDeleted} setIsSuccess={setIsDeleted}>
                    Service Deleted Successfully
                </SuccessToasts>
            </div>
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
