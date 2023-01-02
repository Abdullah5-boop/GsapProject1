import React, { useEffect } from 'react';
import './PhotoMask.css';
import gsap from 'gsap';
import LocomotiveScroll from "locomotive-scroll";
import img1 from '../../img/anita-austvika-swJg-XNkH04-unsplash.jpg'
import img2 from '../../img/blooming vibes 🌸.jpeg'
import img3 from '../../img/Flint, Meybis Ruiz Cruz.png'
import img4 from '../../img/TORTUOSA POESÍA.jpeg'
import '../../Hook/locamotive.css'
import { CSSRulePlugin, ScrollTrigger } from 'gsap/all';

const PhotoMask = () => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".App"),
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'

        });
    })
    const style = {
        width: '300px',
        height: '300px'
    }
    return (
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
                <div className='PhotomaskContainer'
                    data-scroll-container

                >
                    <div
                        className=" flex justify-center
                        items-end
                        relative
                        gap-5
                        photoMaask"

                        data-scroll-section>
                        <h1
                            data-scroll
                            data-scroll-speed='4'
                            data-scroll-position='top'
                            data-scroll-delay='0.05'
                            className='text-6xl absolute left-0 bottom-0
                            transition-property: all
                            '
                        >Text -1
                        </h1>

                        <h1
                            data-scroll
                            data-scroll-speed='2'
                            data-scroll-position='top'
                            className='text-4xl'
                        >Text -2
                        </h1>


                    </div>

                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>

                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>
                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>
                    <div className=" w-screen h-screen" data-scroll-section
                    >
                        <h1
                            data-scroll
                            data-scroll-speed='2'
                            data-scroll-position='bottom bottom'
                            className='text-4xl w-64  bg-red-500'
                        >Text -1
                        </h1>
                        <h1
                            data-scroll
                            data-scroll-speed='5'
                            data-scroll-position='bottom bottom'
                            className='text-4xl w-64  bg-red-500'
                        >Text -2
                        </h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>
                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>
                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>
                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>

                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>
                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>
                    <div className=" " data-scroll-section
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet eaque aliquam, ipsum debitis voluptatibus iste quidem neque corporis fugiat incidunt, quasi, facere molestias earum? Quo mollitia impedit tenetur sed ut quas aperiam placeat rem, aspernatur odio temporibus delectus neque ab et asperiores dolor assumenda obcaecati? Dolore veniam numquam aliquid illum a dicta non quidem, ducimus nisi odio pariatur incidunt aliquam. At ipsam nostrum, dicta delectus quas quis quos et veniam consectetur eveniet vel voluptatum cumque nulla eaque, porro maxime est facere, repellendus officiis. Beatae omnis suscipit a reprehenderit perferendis quidem cum placeat iusto quisquam vel quae magni harum culpa quis, aliquam quasi sapiente soluta ad impedit assumenda quos ipsa enim ipsum? Distinctio, accusantium praesentium tempore dolores quos dolore nam. Reprehenderit sapiente, doloremque quisquam facere minus quae, deserunt molestiae odit laudantium quia vero voluptate natus animi in distinctio illo ullam dolor enim unde quas nihil iste? Debitis, illo quos totam quasi ipsum rerum quas! Deleniti praesentium saepe id exercitationem suscipit totam incidunt reprehenderit nisi aut dicta ex magnam omnis quod neque et, reiciendis dolores aliquam sequi enim veniam beatae. Saepe veniam commodi, fugit aliquam rem dolore nihil ipsum vel odio mollitia quasi perferendis adipisci dolorem dicta delectus hic nesciunt libero cumque similique voluptate cum minus. At iste accusantium voluptates vitae ut corporis sed! Cupiditate animi adipisci ducimus ab eum necessitatibus ex ea, velit aspernatur optio expedita placeat voluptas. In error, sequi, inventore reiciendis quidem ratione cumque perferendis nostrum eos nemo doloribus? Laboriosam aliquid iste recusandae eveniet quibusdam repellendus in pariatur? Cumque tempora ea molestias, distinctio quod consectetur exercitationem ipsum ipsa, earum unde corrupti id. A ratione adipisci itaque nisi cupiditate iusto id consectetur et doloribus autem quidem tempore cum aperiam illum nam debitis dolorum, ducimus molestias? Unde doloremque officiis, laudantium perspiciatis nesciunt natus reprehenderit atque veniam excepturi quidem? Quaerat, recusandae!
                    </div>



                </div>
            </div>
        </div>
    );
};

export default PhotoMask;