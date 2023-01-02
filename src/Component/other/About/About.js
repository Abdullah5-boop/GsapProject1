import React, { useEffect, useRef, useState } from 'react';
import './About.css'
import { gsap, TweenMax, Power3 } from 'gsap';
import SplitText from '../../Hook/SplitText3.min';
const About = () => {
    const el = document.getElementById('abouText');
    const [state, setate] = useState(false)
    const contentref = useRef(null);


    useEffect(() => {
        const observe = new IntersectionObserver((e) => {
            const el = e[0];
            setate(el.isIntersecting);
            // statechng(state);
        })
        observe.observe(contentref.current)
    }, [])

    useEffect(() => {
        if (state) {
            var splt = new SplitText("#abouText", {
                type: 'lines',
                linesClass: 'lineChildren'
            });
            TweenMax.staggerFrom([...contentref.current.children], 1, { opacity: 0, y: 44, ease: Power3.easeInOut }, 0.2)
            TweenMax.staggerTo([...contentref.current.children], 1, { opacity: 1, y: 0, ease: Power3.easeInOut }, 0.2)
        }

    }, [state])




 

    return (
        <>

            <div className='aboutcontainer'
            data-scroll-section
            >
                <section>
                    <h3 >About</h3>
                    <p

                        ref={contentref}
                        id='abouText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium eius veritatis consectetur iusto provident ratione ut asperiores, dolore quas! Quo quisquam id culpa facilis natus architecto eaque incidunt nesciunt sint possimus dolorum ipsa vitae officiis, eius quasi consectetur reiciendis alias consequatur? Blanditiis mollitia expedita quibusdam id debitis? Nobis, eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam a expedita asperiores nostrum quae voluptatum tempora eligendi temporibus, culpa quo quia neque mollitia incidunt dolor suscipit velit porro illo accusantium.
                    </p>
                </section>
            </div>

        </>

    );
};

export default About;