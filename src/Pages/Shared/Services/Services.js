import React from 'react';
import chef from '../../../images/majorServices/cheff.jpg';
import electrician from '../../../images/majorServices/electrician.jpg';
import plumber from '../../../images/majorServices/plumbing.jpg';
import toLet from '../../../images/majorServices/toLet.jpg';
import Service from '../Service/Service';

function Services() {
    const majorServicesCategories = [
        {
            id: 1,
            src: electrician,
            category: 'Electricians',
            link: 'electricians',
            linkText: 'Electrician Services',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 2,
            src: plumber,
            category: 'Plumbers',
            link: 'plumbers',
            linkText: 'Plumber Services',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 3,
            src: chef,
            category: 'Chefs',
            link: 'chefs',
            linkText: 'Chef Services',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 4,
            src: toLet,
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

export default Services;
