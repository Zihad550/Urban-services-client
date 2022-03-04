import React from 'react';
import InputWithBtn from '../../../components/InputWithBtn';

function Subscribe() {
    return (
        <div className="flex justify-center py-5 bg-blue-600 text-white flex-col md:flex-row mx-auto items-center">
            <h2 className="text-2xl md:text-4xl font-serif mr-4">Subscribe to our Newsletter</h2>
            <div className="flex align-center">
                <InputWithBtn placeholder="Your Email" btnText="Subscribe" />
            </div>
        </div>
    );
}

export default Subscribe;
