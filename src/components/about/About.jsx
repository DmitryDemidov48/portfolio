import React from 'react';
import s from "./About.module.css";
import Me from "../../assets/Me-about.jpg";
import {FaAward} from"react-icons/fa";
import {FiUsers} from"react-icons/fi";
import {VscFolderLibrary} from"react-icons/vsc";
export const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className={s.container_about__container}>
            <div className={s.about__me}>
                <div className={s.about_me__image}>
                    <img src={Me} alt="About Image"/>
                </div>
            </div>

                <div className={s.about__container}>
                    <div className={s.about__cards}>
                        <article className={s.about__card}>
                            <FaAward className={s.about__icon}/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className={s.about__card}>
                            <FiUsers className={s.about__icon}/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className={s.about__card}>
                            <VscFolderLibrary className={s.about__icon}/>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p className={s.about__content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Alias cupiditate eaque eligendi esse ex id in magnam optio quia quos.
                        Ab aliquid autem eum explicabo incidunt ipsum necessitatibus nobis quibusdam.
                    </p>
                    <a href="#contact" className={s.btn_btn__primary}>Let's Talk</a>
                </div>
                </div>
        </section>
    );
};

