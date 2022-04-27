import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Table from '../../../../Shared/Table/Table';

function RequestPending() {
    const { requestPending } = useAuth();
    const location = useLocation();
    const rows = ['Workers Name', 'Workers Email', 'Workers Phone', 'Cost', 'Request Status'];

    return (
        <div>
            <Table rows={rows} cols={requestPending} variant="requestPending" />
        </div>
    );
}

export default RequestPending;
