import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsDribbble} from 'react-icons/bs';
import s from './header.module.css';
export  const HeaderSocials = () => {
    return (
        <div className={s.header__socials}>
            <a href="https//Linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https//github.com" target="_blank"><BsGithub/></a>
            <a href="https//dribble.com" target="_blank"><BsDribbble/></a>
        </div>
    );
};

