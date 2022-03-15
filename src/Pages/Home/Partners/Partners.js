import React from 'react';
import img1 from '../../../images/partners/logo1.png';
import img2 from '../../../images/partners/logo2.png';
import img3 from '../../../images/partners/logo3.png';
import img4 from '../../../images/partners/logo4.png';
import img5 from '../../../images/partners/logo5.png';
import img6 from '../../../images/partners/logo6.png';
import img7 from '../../../images/partners/logo7.png';
import img8 from '../../../images/partners/logo8.png';

function Partners() {
    const partners = [img1, img2, img3, img4, img5, img6, img7, img8];
    return (
        <div className="container mx-auto flex my-10 ">
            {partners.map((partner) => (
                <img src={partner} alt="" />
            ))}
        </div>
    );
}

export default Partners;
