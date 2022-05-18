import Table from 'components/Shared/Table';
import React, { useEffect, useState } from 'react';
import axiosInstance from 'services/http.service';

const AdminAllBookings = () => {
    const [hiredWorkers, setHiredWorkers] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setHiredWorkers(
                await axiosInstance.get('/allHiredWorkers', { signal: controller.signal })
            ).then((res) => res.data);
        })();

        return () => {
            controller.abort();
        };
    }, []);
    const rows = [
        'Customers Name',
        'Customers E-mail',
        'Workers Name',
        'Workers E-mail',
        'Categories',
        'Status'
    ];

    return (
        <div className="">
            <div className="flex flex-col mt-5">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <Table rows={rows} cols={hiredWorkers} variant="bookingStatus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAllBookings;
