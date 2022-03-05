import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

function Home() {
    return (
        <div>
            <Header />
            {/* banner section */}
            <Banner />
            <Footer />
        </div>
    );
}

export default Home;
