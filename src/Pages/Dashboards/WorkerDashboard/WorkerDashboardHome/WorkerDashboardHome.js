import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function WorkerDashboardHome() {
    const stats = [
        { id: 2, about: 'Customers', total: 0, icon: faUser },
        { id: 3, about: 'Request Send', peoples: 0, icon: faEnvelope },
        { id: 4, about: 'Currently Working', total: 0, icon: faHome },
        { id: 5, about: 'Work Completed', total: 0, icon: faHome }
    ];
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-2 w-full">
                {stats.map((state) => (
                    <div
                        key={state.id}
                        className="shadow-lg w-full flex items-center p-4 justify-between"
                    >
                        <div>
                            <p className="text-center text-3xl">00</p>
                            <h4 className="text-2xl">{state.about}</h4>
                        </div>
                        <FontAwesomeIcon className="text-5xl ml-3" icon={state.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkerDashboardHome;
