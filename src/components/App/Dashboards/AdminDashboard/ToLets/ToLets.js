import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import SuccessToasts from '../../../../Shared/SuccessToast/SuccessToasts';
import Table from '../../../../Shared/Table/Table';

function ToLets() {
    const { toLets, setToLetUpdated, toLetUpdated } = useAuth();
    const rows = ['Owner Name', 'Location', 'Phone Number', 'House Type', 'Rent', 'Actions'];

    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={toLetUpdated} setIsSuccess={setToLetUpdated}>
                    ToLet Deleted Successfully
                </SuccessToasts>
            </div>
            <Table rows={rows} cols={toLets} variant="toLets" setToLetUpdated={setToLetUpdated} />
        </div>
    );
}

export default ToLets;
