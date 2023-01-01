import React, { useEffect, useState } from 'react';
import './Table1.css'
import img1 from '../../img/anita-austvika-swJg-XNkH04-unsplash.jpg'
import { gsap, Power3 } from 'gsap';
import { TweenLite, CSSPlugin, CSSRulePlugin } from 'gsap/all';
import img2 from '../../img/blooming vibes 🌸.jpeg'
import img3 from '../../img/TORTUOSA POESÍA.jpeg'
const TableView = ({ data }) => {

    const [value, setvalue] = useState(false);
    const [state, setState] = useState(false);
    gsap.registerPlugin(CSSRulePlugin);
    const el = document.querySelectorAll('.handler')


    return (
        <div>

            <div className='row1 grid grid-cols-1 lg:grid-cols-3'>
                <div className=''>
                    <div className='h1container'>
                        <h1
                            className='handler'
                            onMouseEnter={() => { setvalue(true) }}
                        // onMouseLeave={() => { setvalue(false) }}
                        >{data.Name}</h1>
                    </div>
                </div>
                <div className='rowimgdiv  '>
                    <img className='w-3/6 ' src={data.img} alt="" />

                </div>
                <div className=' flex justify-center items-center'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus sunt voluptatum unde, quam commodi voluptates laboriosam quod facere repudiandae ab, veniam quasi accusamus reiciendis possimus. Inventore beatae eum praesentium!</p>
                </div>



            </div>
        </div>
    );
};

export default TableView;