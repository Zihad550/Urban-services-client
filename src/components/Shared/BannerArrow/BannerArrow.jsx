import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BannerArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="
            absolute
             bottom-[40%] -right-10 md:right-[40%]  md:-bottom-10  p-2 w-10 h-10 rounded-full z-10  flex items-center justify-center hover:bg-gray-300"
    >
        <FontAwesomeIcon className="text-4xl" icon={faAngleRight} />
    </button>
);

export default BannerArrow;
