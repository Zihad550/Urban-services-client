import SuccessToasts from 'components/Shared/SuccessToast';
import Table from 'components/Shared/Table';
import useGetData from 'hooks/useGetData';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AdminServices = () => {
    const { type } = useParams();
    const [isDeleted, setIsDeleted] = useState(false);
    const { data, loading } = useGetData(`/services/${type}`, { type, isDeleted });
    const rows = ['Name', 'Category', 'actions'];

    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={isDeleted} setIsSuccess={setIsDeleted}>
                    Service Deleted Successfully
                </SuccessToasts>
            </div>
            <Table setIsDeleted={setIsDeleted} rows={rows} cols={data} variant="adminServices" />
        </div>
    );
};

export default AdminServices;
