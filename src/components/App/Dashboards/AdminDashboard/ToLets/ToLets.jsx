import SuccessToasts from 'components/Shared/SuccessToast';
import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';

const ToLets = () => {
    const { toLets, setToLetUpdated, toLetUpdated } = useAuth();
    const rows = ['Owner Name', 'Location', 'Phone Number', 'House Type', 'Rent', 'Actions'];

    return (
        <>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={toLetUpdated} setIsSuccess={setToLetUpdated}>
                    ToLet Deleted Successfully
                </SuccessToasts>
            </div>
            <Table rows={rows} cols={toLets} variant="toLets" setToLetUpdated={setToLetUpdated} />
        </>
    );
};

export default ToLets;
