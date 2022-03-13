import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import src from '../../../images/plumberServiceBanner.jpg';

function PlumberBanner() {
    const navigate = useNavigate();
    return (
        <div
            className="text-white flex items-center justify-center flex-col px-10 h-[400px] md:h-[600px] lg:h-[700px]"
            style={{
                background: `url(${src}) no-repeat center`,
                backgroundSize: 'cover'
            }}
        >
            <Title classes="mb-3">Welcome to our plumber site</Title>
            <p className="mb-3 lg:w-1/2 md:w-2/3">
                Our plumbing expertise isn’t all that sets us apart, though! At Mr. Plumber we
                believe every customer deserves nothing but the best customer service. That’s why
                our team strives to provide, prompt, professional plumbing services at an affordable
                price — all from friendly and knowledgeable technicians. If you need plumbing
                installation, maintenance or repairs in Fort Worth, give us a call.
            </p>
            <Button onClick={() => navigate('/workers/plumber')} variant="primary">
                Available Plumbers
            </Button>
        </div>
    );
}

export default PlumberBanner;
