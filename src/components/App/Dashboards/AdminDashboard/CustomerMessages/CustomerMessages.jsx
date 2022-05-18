import useAuth from 'hooks/useAuth';
import useGetData from 'hooks/useGetData';
import React from 'react';

const CustomerMessages = () => {
    const { setIsMessageSent, isMessageSent } = useAuth();
    const { data } = useGetData('/messages', { isMessageSent });

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-3">
            {data.map((message) => (
                <div className="shadow-md p-4 rounded-lg">
                    <h4 className="text-center text-xl uppercase">{message.name}</h4>
                    <p>Email: {message.email}</p>
                    <p className="text-sm">Message: {message.message}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerMessages;
