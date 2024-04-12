import React from 'react';
import Profile from '../../assets/home.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Swapnil Rahate.</span> Frontend Developer
          </h1>

          <p className='home__description'>
          I am a skilled and passionate React developer with 3+ years of experience. 
          Proficient in Html, CSS, JavaScript, React, Redux. 
          Created a number of impressive projects, including an e-commerce application, a real-time code editor, and an admin dashboard. 
          Self-motivated and adaptable developer who is always eager to learn new technologies.
          </p>

          <Link to='/aboutMe' className='button'>
            More About Me
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
