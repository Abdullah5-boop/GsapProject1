import React from 'react';
import './photo1.css'
import img1 from '../../img/anita-austvika-swJg-XNkH04-unsplash.jpg';
import img2 from '../../img/blooming vibes 🌸.jpeg';

const Photo1 = () => {
    return (
        <div className='photo1container'
            data-scroll-section 
        >
            {/* <div className="photo1-inner-container grid grid-cols-1 lg:grid-cols-2  gap-10">
                <div data-scroll
                    data-scroll-speed='1'
                    data-scroll-position='bottom right '
                    data-scroll-delay='0.05'
                    className='photo1 text-6xl absolute left-0 bottom-0
                 transition-property: all'
                >
                    <img src={img1} alt="" />
                </div>
                <div data-scroll
                    data-scroll-speed='4'
                    data-scroll-position='bottom'
                    data-scroll-delay='0.05'
                    className='photo2 text-6xl absolute left-0 bottom-0
              transition-property: all'
                >
                    <img src={img2} alt="" />
                </div>
            </div> */}
            <div className="photo1-inner-container grid grid-cols-1 lg:grid-cols-2  gap-10">
                <div 
                 data-scroll
                 data-scroll-speed='2'
                 data-scroll-position='top'
                 data-scroll-delay='0.05'
                 className='photo1 text-6xl absolute left-80 bottom-100
                 transition-property: all'
                ><img src={img1}alt="" /></div>
                <div 
                 data-scroll
                 data-scroll-speed='3'
                 data-scroll-position='top'
                 data-scroll-delay='0.03'
                 className='photo2 text-6xl absolute right-80 bottom-0
                 transition-property: all'
                >
                    <img src={img2}alt="" />
                </div>
               
            </div>

        </div>
    );
};

export default Photo1;