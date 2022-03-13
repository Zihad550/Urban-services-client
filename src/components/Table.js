import { faCheck, faPen, faSign, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Table({ rows, cols, variant, setIsDeleted, setStatus, setWorkingStatus }) {
    // handle delete worker
    const handleDeleteWorker = (id) => {
        fetch(`https://radiant-sea-18512.herokuapp.com/workers?id=${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                data.deletedCount > 0 && alert('Deleted Successfully');
                setIsDeleted(true);
            });
    };

    // handle delete services
    const handleDeleteService = (id) => {
        fetch(`https://radiant-sea-18512.herokuapp.com/services?id=${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                data.deletedCount > 0 && alert('Deleted Successfully');
                setIsDeleted(true);
            });
    };

    // handle approve application
    const handleApproveApplication = (worker) => {
        fetch(`http://localhost:8000/application`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(worker)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert('Approved Successfully');
                }
                setWorkingStatus(true);
            });
    };
    // handle delete application
    const handleDeleteApplication = (email) => {
        fetch(`http://localhost:8000/application?email=${email}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    setStatus(true);
                    alert('Deleted successfully');
                }
            });
    };

    // handle working status
    const handleWorkingStatus = (email, status = 'free', id) => {
        fetch(`http://localhost:8000/workingStatus`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, status, id })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert('Status Updated');
                }
                setWorkingStatus(true);
            });
    };

    // handle complete work
    const handleCompleteWork = (id) => {
        fetch(`http://localhost:8000/complete`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert('Status Updated');
                }
                setWorkingStatus(true);
            });
    };
    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        {rows.map((row) => (
                                            <th
                                                key={row}
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                {row}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {/* to show booking status */}
                                    {variant === 'bookingStatus' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.id}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workersName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.status}
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show services */}
                                    {variant === 'adminServices' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {/* <button
                                                        title="Update worker"
                                                        className="bg-blue-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-blue-500"
                                                    >
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button> */}
                                                    <button
                                                        title="Remove worker"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                        onClick={() => handleDeleteService(col._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show workers */}
                                    {variant === 'workersTable' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.email}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.experience}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.skill}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {/*  <button
                                                        title="Update worker"
                                                        className="bg-blue-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-blue-500"
                                                    >
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button> */}
                                                    <button
                                                        title="Remove worker"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                        onClick={() => handleDeleteWorker(col._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show booked workers and tolets */}
                                    {variant === 'bookingsTable' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerName}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.workerCategory}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.workerPhone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col?.workingStatus}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col?.workingProgress}
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show worker requests */}
                                    {variant === 'workersRequest' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.experience}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.skill}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleApproveApplication(col)
                                                        }
                                                        title="Approve"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faSign} />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteApplication(col.email)
                                                        }
                                                        title="Delete"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* current works */}
                                    {variant === 'currentWorks' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerEmail}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.customerPhone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.workingStatus}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.workingProgress}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.cost}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(
                                                                col.workerEmail,
                                                                'working',
                                                                col._id
                                                            )
                                                        }
                                                        title="Update Working Status"
                                                        className="bg-yellow-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-yellow-500"
                                                    >
                                                        <FontAwesomeIcon icon={faSign} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleCompleteWork(col._id)}
                                                        title="Work Completed"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show Available to-lets */}
                                    {variant === 'toLets' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.id}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.ownerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.location}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        title="Update to-let information"
                                                        className="bg-blue-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-blue-500"
                                                    >
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button>
                                                    <button
                                                        title="Remove to-let"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show customers */}
                                    {variant === 'customers' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.displayName}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.email}
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show workers available */}
                                    {variant === 'availableWorkers' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(col.email, 'busy')
                                                        }
                                                        title="Update Status"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faSign} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show workers available */}
                                    {variant === 'busyWorkers' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(col.email, 'free')
                                                        }
                                                        title="Update Status"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faSign} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
