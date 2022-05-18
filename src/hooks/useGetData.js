import { useEffect, useState } from 'react';
import axiosInstance from 'services/http.service';

const useGetData = (url, reload) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setData(await axiosInstance.get(url, { signal: controller.signal })).then(
                (res) => res.data
            );
        })();

        return () => {
            controller.abort();
        };
    }, [...reload]);
    return {
        data,
        loading: data === null
    };
};

export default useGetData;
