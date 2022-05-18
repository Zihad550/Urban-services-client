import SuccessToasts from 'components/Shared/SuccessToast';
import Table from 'components/Shared/Table';
import useGetData from 'hooks/useGetData';
import React, { useState } from 'react';

const ToLetRequests = () => {
    const [toLetUpdate, setToLetUpdate] = useState(false);
    const { data } = useGetData('/toLets?status=Pending', { toLetUpdate });

    const rows = ['Name', 'Email', 'Phone', 'Rent', 'Location', 'House Type', 'Status', 'Actions'];
    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={toLetUpdate} setIsSuccess={setToLetUpdate}>
                    Action Performed Successfully
                </SuccessToasts>
            </div>
            <Table
                cols={data}
                rows={rows}
                variant="toLetRequests"
                setToLetUpdate={setToLetUpdate}
            />
        </div>
    );
};

export default ToLetRequests;
