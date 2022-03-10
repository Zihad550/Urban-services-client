import React from 'react';
import Title from '../../../components/Title';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Services from '../../Shared/Services/Services';
import HomeBanner from '../HomeBanner/HomeBanner';

function Home() {
    return (
        <div>
            {/* header */}
            <Header />

            {/* banner */}
            <HomeBanner />

            {/* Services */}
            <div className="mt-20">
                <Title>Services We Provide</Title>
                <Services />
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default Home;
