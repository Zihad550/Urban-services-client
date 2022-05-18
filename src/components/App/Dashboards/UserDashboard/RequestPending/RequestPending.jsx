import Table from 'components/Shared/Table';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { useLocation } from 'react-router-dom';

const RequestPending = () => {
    const { requestPending } = useAuth();
    const location = useLocation();
    const rows = ['Workers Name', 'Workers Email', 'Workers Phone', 'Cost', 'Request Status'];

    return <Table rows={rows} cols={requestPending} variant="requestPending" />;
};

export default RequestPending;
