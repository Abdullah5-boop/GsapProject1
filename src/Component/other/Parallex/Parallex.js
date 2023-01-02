import React from 'react';
import './Parallex.css'
import img1 from '../../img/newphoto1.jpg'
import img2 from '../../img/newphoto2.jpg'
const Parallex = () => {
    return (
        <div className='parllexcontaier'
            data-scroll-section
            data-scroll="
            vertical"
            >
            <div className="fram">
                <span className='inner-fram'
                    data-scroll=""
                    data-scroll-speed="-5"
                    data-scroll-delay="0.8"
                >
                    <img
                        data-scroll=""
                        data-scroll-speed="-5"
                        data-scroll-direction="horizontal "
                        class="backed"
                        alt="Zoz ont the top"
                        src={img1} />
                </span>
            </div>
            <div className="fram"
                data-scroll=""
                data-scroll-speed="2"

            >
                <span className='inner-fram'
                    data-scroll=""
                    data-scroll-speed="-5"
                    data-scroll-delay="0.8"
                >
                    <img
                        data-scroll=""
                        data-scroll-speed="-3"
                        data-scroll-direction="horizontal "
                        class="backed"
                        alt="Zoz ont the top"
                        src={img2} />
                </span>
            </div>
        </div>
    );
};

export default Parallex;