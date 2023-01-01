import React, { useEffect, useRef } from 'react';
import './Banner.css';
import img1 from '../../img/blooming vibes 🌸.jpeg';
import img2 from '../../img/anita-austvika-swJg-XNkH04-unsplash.jpg';
import img3 from '../../img/TORTUOSA POESÍA.jpeg';
import { gsap, TweenMax, TimelineLite, Power3, CSSPlugin } from 'gsap';
const Banner = () => {
    gsap.registerPlugin(CSSPlugin)
    const bannercontaier = useRef(null);
    const img1ref = useRef(null);
    const tl = new TimelineLite();
    let value = 0.2
    useEffect(() => {
        // let el1 = bannercontaier.current;
        let el1 = bannercontaier.current.children[0];
        let el2 = bannercontaier.current.children[1];
        let el3 = bannercontaier.current.children[2];
        let el4 = bannercontaier.current.children[3];
        let el5 = bannercontaier.current.children[4];
        let el6 = bannercontaier.current.children[5];
        let el7 = bannercontaier.current.children[6];
        let el8 = bannercontaier.current.children[7];
        let el9 = bannercontaier.current.children[8];
        let el10 = bannercontaier.current.children[9];
        let el11 = bannercontaier.current.children[10];
        let el12 = bannercontaier.current.children[11];
        let el13 = bannercontaier.current.children[12];

        // TweenMax.from([el1, el2], 0.5, { y: 100 })
        // TweenMax.to([el1, el2], 1.2, { y: 0, ease: Power3.easeInOut })
        //TweenMax.staggerFrom([el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12], 0.8, { y: 100 }, value)
        //TweenMax.staggerTo([el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12], 0.8, { y: 0 }, value)
        TweenMax.staggerFrom([...bannercontaier.current.children], 0.8, { y: 100 }, value)
        TweenMax.staggerTo([...bannercontaier.current.children], 0.8, { y: 0 }, value)
    }, [])
    return (
        <>
            <section className='bannercontaier'>
                <div

                    className='bannerpg'>
                    <h3
                        ref={bannercontaier}
                        className='bannertile'>
                        {/* <div>
                            Web
                        </div>
                        <div>
                            developer
                        </div> */}

                        <span>W</span>
                        <span>E</span>
                        <span>B</span>
                        <span className='developer'>D</span>
                        <span>E</span>
                        <span>V</span>
                        <span>E</span>
                        <span>L</span>
                        <span>O</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>


                    </h3>
                    <h1 className='name'>Abdullah Al Mahmood </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis soluta sunt, ipsam fuga officiis qui eveniet? </p>
                </div>
                <div className='bannerphoto'>
                    <div className='innter-img-container'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='innter-img-container'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='innter-img-container'>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;