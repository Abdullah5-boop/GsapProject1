import React from 'react';
import './List1.css'
import gsap from 'gsap';
import { Power3 } from 'gsap/all';

const List1 = () => {
    let classNames = '.list-photo'
    let classNames2 = '.li-title-div'


    const setMouseEnter = () => {
        const el = document.querySelectorAll(classNames2);
        el.forEach(e => {
            e.addEventListener('mouseenter', (e) => {
                // console.log()
                const mailEl = e.path[1].lastChild.children[0]
                //console.log(e)
                gsap.to(mailEl, 0.8, { opacity: 1, width: '40%', ease: Power3.easeInOut })
            })
        })
    }
    const setMouseLeave = () => {
        const el = document.querySelectorAll(classNames2);
        el.forEach(e => {
            e.addEventListener('mouseleave', (e) => {
                // console.log()
                const mailEl = e.path[1].lastChild.children[0]
                //console.log(e)
                gsap.to(classNames, 0.8, { opacity: 0, width: '0%', ease: Power3.easeInOut })
            })
        })

       
    }




    const liList = <>
        <li className='list'>
            <div className='li-title-div  flex items-end inline-block'>
                <h1
                    onMouseEnter={setMouseEnter}
                    onMouseLeave={setMouseLeave}
                    className='li-title-h1'>Home</h1>
            </div>
            <div className="li-img-container">
                <img className='list-photo' src="https://source.unsplash.com/L0xLAqyz4N4" alt="" />
            </div>
        </li>
        <li className='list'>
            <div className='li-title-div  flex items-end inline-block'>
                <h1
                    onMouseEnter={setMouseEnter}
                    onMouseLeave={setMouseLeave}
                    className='li-title-h1'>Work</h1>
            </div>
            <div className="li-img-container">
                <img className='list-photo' src="https://source.unsplash.com/psGV5KhidlY" alt="" />
            </div>
        </li>
       
        <li className='list'>
            <div className='li-title-div  flex items-end inline-block'>
                <h1
                    onMouseEnter={setMouseEnter}
                    onMouseLeave={setMouseLeave}
                    className='li-title-h1'>About</h1>
            </div>
            <div className="li-img-container">
                <img className='list-photo' src="https://source.unsplash.com/A4iPaRDqqj0" alt="" />
            </div>
        </li>
        <li className='list'>
            <div className='li-title-div  flex items-end inline-block'>
                <h1
                    onMouseEnter={setMouseEnter}
                    onMouseLeave={setMouseLeave}
                    className='li-title-h1'>Contact</h1>
            </div>
            <div className="li-img-container">
                <img className='list-photo' src="https://source.unsplash.com/SpVHcbuKi6E" alt="" />
            </div>
        </li>


    </>
    return (
        <div data-scroll-section className='mb-100'>
            <h1 className='text-6xl HeadTitle '>More about us</h1>
            <section className="list1-container">
                <div className="list1-inner-container">
                    <ul className='ul-list1'>
                        {liList}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default List1;