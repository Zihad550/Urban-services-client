import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Title from '../../Shared/Title/Title';
import FeedbackSection from './FeedbackSection/FeedbackSection';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeServices from './HomeServices/HomeServices';
import Newsletter from './Newsletter/Newsletter';
import Partners from './Partners/Partners';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

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

            {/* why choose us */}
            <WhyChooseUs />

            {/* feedbacks */}
            <FeedbackSection />

            {/* partners */}
            <Partners />

            {/* newsletter section */}
            <Newsletter />
            {/* footer */}
            <Footer />
        </div>
    );
}

export default Home;
