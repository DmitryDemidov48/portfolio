import React from 'react';
import s from"./portfolio.module.css";
import IMG1 from '../../assets/1.jpeg'
import IMG2 from '../../assets/2.jpg'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.jpg'
export const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className={s.container_portfolio__container}>
                <article className={s.portfolio__item}>
                    <div className={s.portfolio_item__image}>
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={s.portfolio__item_cta}>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className={s.portfolio__item}>
                    <div className={s.portfolio_item__image}>
                        <img src={IMG2} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={s.portfolio__item_cta}>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className={s.portfolio__item}>
                    <div className={s.portfolio_item__image}>
                        <img src={IMG3} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={s.portfolio__item_cta}>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className={s.portfolio__item}>
                    <div className={s.portfolio_item__image}>
                        <img src={IMG4} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={s.portfolio__item_cta}>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className={s.portfolio__item}>
                    <div className={s.portfolio_item__image}>
                        <img src={IMG5} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={s.portfolio__item_cta}>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className={s.portfolio__item}>
                    <div className={s.portfolio_item__image}>
                        <img src={IMG6} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={s.portfolio__item_cta}>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

