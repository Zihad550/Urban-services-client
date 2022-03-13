import React, { useEffect, useState } from 'react';

function AllWorks() {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('')
            .then((res) => res.json())
            .then((data) => setWorks(data));
    });
    return <div>AllWorks</div>;
}

export default AllWorks;
