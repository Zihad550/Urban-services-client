import {
    faAngleLeft,
    faAngleRight,
    faClock,
    faCommentDollar,
    faToolbox,
    faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import Title from '../../../components/Title';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Service from '../../Shared/Service/Service';
import ChefBanner from '../ChefBanner/ChefBanner';
import ElectricianBanner from '../ElectricianBanner/ElectricianBanner';
import PlumberBanner from '../PlumberBanner/PlumberBanner';
import ToLetBanner from '../ToLetBanner/ToLetBanner';
import TopWorkers from '../TopWorkers/TopWorkers';

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

function WorkerServices() {
    const [services, setServices] = useState([]);
    const { service } = useParams();
    console.log(service);
    useEffect(() => {
        fetch(`https://radiant-sea-18512.herokuapp.com/services/${service}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    });
    const navigate = useNavigate();

    let serviceFor;
    if (service === 'electricianServices') {
        serviceFor = 'electrician';
    }

    const skills = [
        {
            id: 1,
            skill: 'Lightning Response Time',
            about: `You shouldn’t have to wait to get your   emergency fixed. We pride ourselves on our 24/7 availability and same-day response.`,
            icon: faClock
        },
        {
            id: 2,
            skill: 'FAIR & OPEN PRICING',
            about: 'We’ll provide you with a free all-inclusive quote before you commit to anything. No hidden fees or nasty surprises',
            icon: faCommentDollar
        },
        {
            id: 3,
            skill: 'Expertise You Can Trust',
            about: 'Our plumbers are fully licensed and insured, and possess all the tools and expertise necessary to get the job done.',
            icon: faUserTie
        },
        {
            id: 4,
            skill: 'Through Fix',
            about: 'We find the root cause of the issue, and help you prevent it from happening again.',
            icon: faToolbox
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
        <div>
            {/* header */}
            <Header />
            {/* banner */}
            {service === 'electricianService' && <ElectricianBanner />}
            {service === 'plumberService' && <PlumberBanner />}
            {service === 'chefService' && <ChefBanner />}
            {service === 'toLetService' && <ToLetBanner />}

            {/* skills */}
            <div className="mt-10 lg:mt-0">
                <Title classes="lg:hidden block">Skills</Title>
                <div className="container grid lg:grid-cols-4 grid-cols-2 gap-4 lg:-mt-28 mx-auto mt-10  lg:mx-auto ">
                    {skills.map((skill) => (
                        <div
                            className="bg-white  p-3 rounded-lg lg:shadow-md shadow-lg  flex flex-col"
                            key={skill.id}
                        >
                            <FontAwesomeIcon
                                icon={skill.icon}
                                className="text-6xl my-3 text-blue-500"
                            />
                            <h2 className="mb-3 text-xl text-center">{skill.skill}</h2>
                            <p className="text-center ">{skill.about}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* services */}
            <div className="my-20 container mx-auto">
                <Title>Our Services</Title>
                <p className="w-2/4 text-center mx-auto mt-3 mb-10">
                    Our estimates are free, schedule an appointment with our online scheduling
                </p>
                <Slider {...settings}>
                    {services.map((service) => (
                        <Service service={service} key={service._id} />
                    ))}
                </Slider>
            </div>

            {/* topworkers */}
            <TopWorkers />

            {/* footer */}
            <Footer />
        </div>
    );
}

export default WorkerServices;
