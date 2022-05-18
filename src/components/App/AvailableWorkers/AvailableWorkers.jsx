import Footer from 'components/Shared/Footer';
import Header from 'components/Shared/Header';
import Owner from 'components/Shared/Owner';
import Title from 'components/Shared/Title';
import Worker from 'components/Shared/Worker';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from 'services/http.service';
import WorkersBanner from './WorkersBanner';

const AvailableWorkers = () => {
    const [workers, setWorkers] = useState([]);
    const [searchedWorkers, setSearchedWorkers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState(false);
    const [filter, setFilter] = useState('');
    const [reset, setReset] = useState(false);
    const { role } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        // to get search results
        async function fetchSearchData() {
            const res = await axiosInstance.get(`/worker/${searchValue}`, {
                signal: controller.signal
            });
            setSearchedWorkers([res.data]);
        }

        // to get filter results
        async function fetchFilterData() {
            const res = await axiosInstance.get(`/workers?role=${role}&&filter=${filter}`, {
                signal: controller.signal
            });
            setWorkers(res.data);
        }

        if (searchValue && search) {
            setSearch(false);
            setReset(false);
            fetchSearchData();
        } else {
            fetchFilterData();
        }

        controller.abort();
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
};

export default AvailableWorkers;
