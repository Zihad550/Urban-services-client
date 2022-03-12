import React from 'react';
import Title from '../../../components/Title';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ContactUs from '../ContactUs/ContactUs';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeServices from '../HomeServices/HomeServices';

function Home() {
    return (
        <div>
            {/* header */}
            <Header />

            {/* banner */}
            <HomeBanner />

            {/* Services */}
            <div className="my-20">
                <Title>Services We Provide</Title>
                <HomeServices />
            </div>

            {/* contact us  component */}
            <ContactUs />

            {/* footer */}
            <Footer />
        </div>
    );
}

export default Home;
