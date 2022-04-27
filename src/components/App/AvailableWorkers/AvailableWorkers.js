import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../services/http.service';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Owner from '../../Shared/Owner/Owner';
import Title from '../../Shared/Title/Title';
import Worker from '../../Shared/Worker/Worker';
import WorkersBanner from './WorkersBanner/WorkersBanner';

function AvailableWorkers() {
    const [workers, setWorkers] = useState([]);
    const [searchedWorkers, setSearchedWorkers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState(false);
    const [filter, setFilter] = useState('');
    const [reset, setReset] = useState(false);
    const { role } = useParams();

    useEffect(() => {
        // to fetch search results
        async function fetchSearchData() {
            const res = await axios.get(`/worker/${searchValue}`);
            setSearchedWorkers([res.data]);
        }

        // to fetch filter results
        async function fetchFilterData() {
            const res = await axios.get(`/workers?role=${role}&&filter=${filter}`);
            setWorkers(res.data);
        }

        if (searchValue && search) {
            setSearch(false);
            setReset(false);
            fetchSearchData();
        } else {
            fetchFilterData();
        }
    }, [search, reset, filter, role]);

    const allAvailableWorkerNames = workers.map((worker) => ({
        value: worker._id,
        label: worker.name.charAt(0).toUpperCase() + worker.name.slice(1)
    }));

    return (
        <>
            {/* header */}
            <Header />
            {/* banner */}
            <WorkersBanner
                role={role}
                options={allAvailableWorkerNames}
                setSearchValue={setSearchValue}
                setSearch={setSearch}
                setFilter={setFilter}
                setReset={setReset}
                setSearchedWorkers={setSearchedWorkers}
            />
            {/* workers */}
            <div className="my-20">
                <Title classes="mb-5 capitalize">All Available {role || 'Workers'}</Title>

                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5">
                    {role === 'toLet' &&
                        workers.map((owner) => <Owner key={owner._id} owner={owner} />)}

                    {searchedWorkers.length > 0 &&
                        searchedWorkers.map((worker) => (
                            <Worker worker={worker} key={worker?._id} />
                        ))}
                    {searchedWorkers.length === 0 &&
                        role !== 'toLet' &&
                        workers.map((worker) => <Worker worker={worker} key={worker._id} />)}
                </div>
            </div>
            {/* footer */}
            <Footer />
        </>
    );
}

export default AvailableWorkers;
