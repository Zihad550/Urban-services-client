import React from 'react';
import Slider from 'react-slick';
import Button from '../../../components/Button';
import InputWithBtn from '../../../components/InputWithBtn';
// import person1 from '../../../images/person1-removebg-preview.png';
import person2 from '../../../images/person2-removebg-preview.png';
import person3 from '../../../images/person3-removebg-preview.png';
import person4 from '../../../images/person4-removebg-preview.png';
import './WorkersBanner.css';

function WorkersBanner({ role }) {
    const persons = [
        // { id: 1, src: person1, name: 'Jashim' },
        { id: 1, src: person2, name: 'Karim' },
        { id: 1, src: person3, name: 'Rabbi' },
        { id: 1, src: person4, name: 'Jasim' }
    ];

    const popularServices = ['Network Provider', 'Health Care', 'Housing'];
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: false
    };
    return (
        <div className="bg-pink-400 -z-10 pt-20 pb-10 -mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:w-3/4 mx-auto w-full">
                {/* search field */}
                <div className="my-auto lg:ml-10 mx-10 lg:mx-0">
                    <h2 className="text-3xl mb-3 capitalize">
                        Find the perfect {role || 'Worker'}
                    </h2>
                    <InputWithBtn placeholder="Search Worker" btnText="Search" />
                    <div className="mt-3">
                        <span className="mr-2">Popular:</span>
                        {popularServices.map((service) => (
                            <Button key={service} variant="outlined">
                                {service}
                            </Button>
                        ))}
                    </div>
                </div>
                {/* slider */}
                <div className="hidden lg:block">
                    <Slider style={{ zIndex: 1 }} {...settings}>
                        {persons.map((person, index) => (
                            <div className="flex justify-center" key={person.id}>
                                <div
                                    style={{
                                        height: '600px',
                                        overflow: 'hidden',
                                        mx: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img src={person.src} alt="" />
                                </div>
                                <h2 className="text-center text-2xl">{person.name}</h2>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default WorkersBanner;
