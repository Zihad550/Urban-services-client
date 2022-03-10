import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ServicesBanner from '../ServicesBanner/ServicesBanner';

function ServiceHome() {
    const { serviceName } = useParams();
    console.log(serviceName);
    return (
        <div>
            <Header />
            <ServicesBanner />
            <Footer />
        </div>
    );
}

export default ServiceHome;
