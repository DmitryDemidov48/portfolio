import React from 'react';
import s from"./experience.module.css";
import {BsPatchCheckFill} from "react-icons/bs";

export const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className={s.container_experience__container}>
                <div className={s.experience__frontend}>
                    <h3>Frontend Development</h3>
                    <div className={s.experience__content}>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon  }/>
                            <div>
                                <h4>HTML</h4>
                                <small className={s.text__light}>Experienced</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon  }/>
                            <div>
                                <h4>CSS</h4>
                                <small className={s.text__light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon }/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className={s.text__light}>Experienced</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon }/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className={s.text__light}>Experienced</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon  }/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className={s.text__light}>Experienced</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon  }/>
                            <div>
                                <h4>React</h4>
                                <small className={s.text__light}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

               {/* END FRONTEND*/}
                <div className={s.experience_backend}>
                    <h3>Backend Development</h3>
                    <div className={s.experience__content}>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon }/>
                            <div>
                                <h4>NODE JS</h4>
                                <small className={s.text__light}>Experienced</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon }/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className={s.text__light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon }/>
                            <div>
                                <h4>PHP</h4>
                                <small className={s.text__light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon }/>
                            <div>
                                <h4>MySQL</h4>
                                <small className={s.text__light}>Basic</small>
                            </div>
                        </article>
                        <article className={s.experience__details}>
                            <BsPatchCheckFill className={s.experience__details_icon }/>
                            <div>
                                <h4>Python</h4>
                                <small className={s.text__light}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

