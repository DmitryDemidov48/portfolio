import React from 'react';
import s from"./contact.module.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from "react";
import emailjs from 'emailjs-com'

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className={s.container_contact__container}>
                <div className={s.contact__options}>
                    <article className={s.contact__option}>
                        <MdOutlineEmail className={s.contact__option_icon}/>
                        <h4>Email</h4>
                        <h5>gazzdooit@gmail.com</h5>
                        <a href="mailto:gazzdooit@gmail.com" target='_blank'>Send and message</a>
                    </article>
                    <article className={s.contact__option}>
                        <RiMessengerLine className={s.contact__option_icon}/>
                        <h4>Messenger</h4>
                        <h5>egatortutorials</h5>
                        <a href='https://m.me/ernest.achiever' target='_blank'>Send and message</a>
                    </article>
                    <article className={s.contact__option}>
                        <BsWhatsapp className={s.contact__option_icon}/>
                        <h4>WhatsApp</h4>
                        <h5>+79067245639</h5>
                        <a href="https://api.whatsapp.com/send?phone+79067245639" target='_blank'>Send and message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder=' Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

