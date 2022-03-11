import React from 'react';
import Table from '../../../../components/Table';

function ToLets() {
    const rows = ['#', 'Owner Name', 'Location', 'Phone Number', 'Actions'];
    const toLets = [
        { id: 1, ownerName: 'Rasel', location: 'Dhanmondi', phone: '01234567891' },
        { id: 2, ownerName: 'Kabir', location: 'Kalabagan', phone: '01234567891' },
        { id: 3, ownerName: 'Rahima', location: 'West RajaBazar', phone: '01234567891' }
    ];
    return (
        <div>
            <Table rows={rows} cols={toLets} variant="toLets" />
        </div>
    );
}

export default ToLets;
