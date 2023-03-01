import React from 'react';
import s from './services.module.css';
import {BiCheck} from "react-icons/bi";

export const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className={s.container_services__container}>
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BiCheck className={s.service_list__icon}/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis, minima!</p>
                        </li>
                        <li>
                            <BiCheck className={s.service_list__icon}/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis, minima!</p>
                        </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li>
                    </ul>
                </article>
                {/*end*/}
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>Wed Development</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BiCheck className={s.service_list__icon}/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis, minima!</p>
                        </li>
                        <li>
                            <BiCheck className={s.service_list__icon}/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis, minima!</p>
                        </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li>
                    </ul>
                </article>
                {/*end web*/}
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BiCheck className={s.service_list__icon}/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis, minima!</p>
                        </li>
                        <li>
                            <BiCheck className={s.service_list__icon}/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis, minima!</p>
                        </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li><li>
                        <BiCheck className={s.service_list__icon}/>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, minima!</p>
                    </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

