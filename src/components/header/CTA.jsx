import React from 'react';
import s from'./header.module.css';
export const Cta = () => {
    return (
        <div className={s.cta}>
            <a href={""} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    );
};

