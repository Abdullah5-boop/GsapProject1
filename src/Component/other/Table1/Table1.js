import React, { useEffect, useRef, useState } from 'react';
import './Table1.css'
import img1 from '../../img/anita-austvika-swJg-XNkH04-unsplash.jpg'
import img2 from '../../img/blooming vibes 🌸.jpeg'
import img3 from '../../img/TORTUOSA POESÍA.jpeg'
import TableView from './TableView';
import { gsap, Power3 } from 'gsap';
const Table1 = () => {
    const [refresh, setRefresh] = useState(false)
    const data = [
        {
            img: img1,
            Name: "Abdullah ",
            index: 1
        },
        {
            img: img2,
            Name: "Shakib ",
            index: 2
        },
        {
            img: img3,
            Name: "Tamim",
            index: 3
        },
    ]
    const Table1ref = useRef(null);
    useEffect(() => {
        let el = new IntersectionObserver((e) => {
            let entity = e[0]
            setRefresh(entity.isIntersecting);
        })
        el.observe(Table1ref.current)
    }, [])

    useEffect(() => {

        gsap.from([...Table1ref.current.children], 1.5, { y: 440, ease: Power3.easeInOut, opacity: 0, borderBottom: '1px solid white', stagger: 0.5 })
        gsap.to([...Table1ref.current.children], 1.5, { y: 0, ease: Power3.easeInOut, stagger: 0.5, opacity: 1, borderBottom: '1px solid #FFFFFF.' })
        //console.log(Table1ref.current.children[2])

    }, [refresh])

    return (
    
            <div className='table1Contaier'
            data-scroll-section
            >
                <div className='flex'>
                    <h1 className='text-start text-5xl ml-20 mb-20 table1heading'>Information</h1>
                </div>
                <div
                    ref={Table1ref}
                    className="inner-table-containrer">
                    {data.map(data =>
                        <TableView
                            key={data.index}
                            data={data}></TableView>)}
                </div>
                
            </div>
   
    );
};

export default Table1;