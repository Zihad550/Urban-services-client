import React from 'react';
import Service from '../../Shared/Service/Service';

function HomeServices() {
    const majorServicesCategories = [
        {
            id: 1,
            src: 'https://i.ibb.co/VxtVMrr/electrician.jpg',
            category: 'Electrician Service',
            link: '/electricianServices',
            linkText: 'Electrician Service Details',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 2,
            src: 'https://i.ibb.co/HHR6ySp/plumbing.jpg',
            category: 'Plumber Service',
            link: 'plumbers',
            linkText: 'Plumber Service Details',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 3,
            src: 'https://i.ibb.co/JyJ9pQP/cheff.jpg',
            category: 'Chef Service',
            link: 'chefs',
            linkText: 'Chef Service Details',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 4,
            src: 'https://i.ibb.co/BPxC64j/toLet.jpg',
            category: 'To-Let',
            link: 'tolets',
            linkText: 'Available To-Let',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        }
    ];
    return (
        <div className="grid grid-cols-2 lg:gap-y-10 gap-y-3 gap-x-3 lg:gap-x-0 xl:w-2/4 md:mx-auto mx-5 my-5 md:w-3/4">
            {majorServicesCategories.map((service) => (
                <Service service={service} key={service.id} />
            ))}
        </div>
    );
}

export default HomeServices;
