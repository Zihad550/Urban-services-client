import { faEnvelope, faHome, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function UserDashboardHome() {
    const stats = [
        { id: 2, about: 'Hired workers', total: 0, icon: faUserGear },
        { id: 3, about: 'Workers Request', peoples: 0, icon: faEnvelope },
        { id: 4, about: 'To-Lets posted', total: 0, icon: faHome }
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

export default UserDashboardHome;
