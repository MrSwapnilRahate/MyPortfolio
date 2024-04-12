import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import Resume from '../../assets/Resume.pdf';
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import Contact from '../contact/Contact';
import './aboutMe.css';
import { project } from '../../data';
import ProjectItem from '../../components/ProjectItem';

const AboutMe = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__subtitle subtitle__center'>
          About <span>Me</span>
        </h2>
        <div className='resume__container grid'>
          <div className='about__info'>
            <h3 className='section__subtitlee'>Personal Infos</h3>

            <ul className='info__listt grid'>
              <Info />
            </ul>

            <a href={Resume} download='' className='button'>
              Download Cv
              <span className='button__icon'>
                <FaDownload />
              </span>
            </a>
          </div>

          <div className='statss grid'>
            <Stats />
          </div>
        </div>
      </section>

      <div className='separator'></div>

      <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>
          Experience & Education
        </h3>

        <div className='resume__container grid'>
          <div className='resume__data'>
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className='resume__data'>
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>

      <div className='separator'></div>
      <section className='project section'>
      <h2 className='section__title'>
        My <span>Projects</span>
      </h2>

      <div className='project__container container grid'>
        {project.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </section>       
        

      <div className='separator'></div>

      <section className='skills'>
        <h3 className='section__subtitle subtitle__center'>My Skills</h3>

        <div className='skills__container grid'>
          <Skills />
        </div>
      </section>

      <div className='separator'></div>

      <section className='contact section' id='contact'>

       
          <Contact />
        
      </section>

      
    </main>
  );
};

export default AboutMe;
