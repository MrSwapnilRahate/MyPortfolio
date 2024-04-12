import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';
import { SiGmail} from 'react-icons/si'

import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9c6dodu', 'template_0sjngv9', form.current, {
        publicKey: 'b75ksJO67dOsm82rr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsMessageSent(true); // Set state to indicate successful message sent
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy !</h3>

          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>swapnilrahate6598@gmail.com</h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>+91 9075200380</h4>
              </div>
            </div>
          </div>

          <div className='contact__socials'>
            <a href='https://www.linkedin.com/in/swapnil-rahate-b19009213/' className='contact__social-link'>
              <FaLinkedinIn />
            </a>

            <a href='https://github.com/MrSwapnilRahate' className='contact__social-link'>
              <FaGithub />
            </a>

            <a href='swapnilrahate@gmail.com' className='contact__social-link'>
              <SiGmail />
            </a>

            {/* <a href='https://dribbble.com' className='contact__social-link'>
              <FaDribbble />
            </a> */}
          </div>
        </div>

        <form className='contact__form' ref={form} onSubmit={sendEmail}>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                name="user_name"
                placeholder='Your Name'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='email'
                name="user_email"
                placeholder='Your Email'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Your Subject'
                className='form__control'
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
              name="message"
              placeholder='Your Message'
              className='form__control textarea'
            ></textarea>
          </div>

          <button className='button' type='submit' value="Send">
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
        {isMessageSent && (
          <div className="message-sent">Message sent successfully!</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
