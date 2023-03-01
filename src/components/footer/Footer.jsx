import React from 'react';
import s from"./footer.module.css";
import {FaFacebook} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import{IoLogoTwitter} from "react-icons/io";

export const Footer = () => {
    return (
        <footer>
            <a href="#" className={s.footer__logo}>Dramaturg</a>
            <ul className={s.permalinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={s.footer__socials}>
                <a href="https://facebook.com"><FaFacebook/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://twitter.com"><IoLogoTwitter/></a>
            </div>
            <div className={s.footer__copyright}>
                <small>&copy; Dramaturg Tutorials. All right reserved</small>
            </div>
        </footer>
    );
};

