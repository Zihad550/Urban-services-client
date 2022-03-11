import React from 'react';
import Table from '../../../../../components/Table';

function AdminAllBookings() {
    const rows = ['#', 'Customers Mail/Phones', 'Categories', 'Workers Name', 'Status'];

    const cols = [
        {
            id: 1,
            phone: '01855629170',
            category: 'Plumber',
            workersName: 'Karim',
            status: 'Hired'
        },
        {
            id: 2,
            phone: '01855629170',
            category: 'Electrician',
            workersName: 'Rasel',
            status: 'Hired'
        },
        {
            id: 3,
            phone: '01855629170',
            category: 'Cheff',
            workersName: 'Karim',
            status: 'Hired'
        },
        {
            id: 4,
            phone: '01855629170',
            category: 'Plumber',
            workersName: 'Karim',
            status: 'Hired'
        },
        {
            id: 5,
            phone: '01855629170',
            category: 'Plumber',
            workersName: 'Karim',
            status: 'Hiredf'
        }
    ];
    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <Table rows={rows} cols={cols} variant="bookingStatus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAllBookings;
