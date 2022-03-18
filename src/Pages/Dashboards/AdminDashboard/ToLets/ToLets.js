import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function ToLets() {
    const { toLets, setToLetUpdated } = useAuth();
    const rows = ['Owner Name', 'Location', 'Phone Number', 'House Type', 'Rent', 'Actions'];

    return (
        <div>
            <Table rows={rows} cols={toLets} variant="toLets" setToLetUpdated={setToLetUpdated} />
        </div>
    );
}

export default ToLets;
