import { useState } from 'react';

const useUser = () => {
    const [user, setUser] = useState({});
    return { user };
};

export default useUser;
