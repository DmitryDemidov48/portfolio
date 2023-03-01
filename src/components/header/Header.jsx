import React from 'react';
import s from"./header.module.css";
import {Cta} from "./CTA";
import ME from '../../assets/ME.png'
import {HeaderSocials} from "./HeaderSocials";
export const Header = () => {
    return (
        <header>
            <div className={s.header__container}>
            <h5>Hello</h5>
            <h1>Portfolio</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            <Cta/>
                <HeaderSocials/>
            <div className={s.me}>
                <img src={ME} alt="me"/>
            </div>

                <a href="#contact" className={s.scroll__down}>Scroll Down</a>
            </div>
        </header>
    );
};

