import React from 'react';

const UnderlinedFieldLabel = ({ children }) => (
    <label className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 uppercase  w-full text-center">
        {children}
    </label>
);

export default UnderlinedFieldLabel;
