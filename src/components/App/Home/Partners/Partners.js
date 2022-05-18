import img1 from 'assets/images/partners/logo1.png';
import img2 from 'assets/images/partners/logo2.png';
import img3 from 'assets/images/partners/logo3.png';
import img4 from 'assets/images/partners/logo4.png';
import img5 from 'assets/images/partners/logo5.png';
import img6 from 'assets/images/partners/logo6.png';
import img7 from 'assets/images/partners/logo7.png';
import img8 from 'assets/images/partners/logo8.png';
import Title from 'components/Shared/Title';
import React from 'react';

function Partners() {
    const partners = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
        { id: 5, src: img5 },
        { id: 6, src: img6 },
        { id: 7, src: img7 },
        { id: 8, src: img8 }
    ];
    return (
        <div className="my-20">
            <Title>Our Partners</Title>
            <div className="container mx-auto my-10 flex flex-cols flex-wrap lg:w-1/2 items-center justify-center gap-3">
                {partners.map((partner, index) => (
                    <img src={partner.src} key={partner.id} alt="" />
                ))}
            </div>
        </div>
    );
}

export default Partners;
