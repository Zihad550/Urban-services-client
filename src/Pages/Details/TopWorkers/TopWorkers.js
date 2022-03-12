import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import Title from '../../../components/Title';
import elec1 from '../../../images/workers/elec1.png';
import Worker from '../../Shared/Worker/Worker';

function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="text-white absolute top-[40%] -right-10 bg-blue-500 p-3 rounded-tr-full rounded-br-full z-10 hover:bg-blue-600"
        >
            {' '}
            <FontAwesomeIcon className="text-4xl" icon={faAngleRight} />
        </button>
    );
}

function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="text-white absolute top-[40%] -left-10 bg-blue-500 p-3 rounded-tl-full rounded-bl-full z-10 hover:bg-blue-600"
        >
            {' '}
            <FontAwesomeIcon className="text-4xl" icon={faAngleLeft} />
        </button>
    );
}

function TopWorkers() {
    const workers = [
        {
            id: 1,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '8 year',
            category: 'Electrician',
            skill: 'expert',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        },
        {
            id: 2,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '5 year',
            category: 'Electrician',
            skill: 'intermediate',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        },
        {
            id: 3,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '8 year',
            category: 'Electrician',
            skill: 'expert',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        },
        {
            id: 4,
            src: elec1,
            name: 'Fahad Hossain',
            location: 'Dhanmondi, Dhaka',
            experience: '5 year',
            category: 'Electrician',
            skill: 'intermediate',
            email: 'fahadhossain@gmail.com',
            phone: '01234567891'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1275,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: 0,
                    prevArrow: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: 0,
                    prevArrow: 0
                }
            }
        ]
    };
    return (
        <div className="my-20 container mx-auto">
            <Title>Top Workers</Title>
            <p className="w-2/4 text-center mx-auto mt-3 mb-10">Top, workers available to hire</p>
            <Slider className="" {...settings}>
                {workers.map((worker) => (
                    <Worker worker={worker} key={worker.id} />
                ))}
            </Slider>
        </div>
    );
}

export default TopWorkers;
