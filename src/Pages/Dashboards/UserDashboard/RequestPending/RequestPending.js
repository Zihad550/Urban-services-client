import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function RequestPending() {
    const { requestPending } = useAuth();
    const rows = ['Workers Name', 'Workers Email', 'Workers Phone', 'Cost', 'Request Status'];
    return (
        <div>
            <Table rows={rows} cols={requestPending} variant="requestPending" />
        </div>
    );
}

export default RequestPending;
