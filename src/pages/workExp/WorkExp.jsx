import React from 'react'
import ResumeItem from '../../components/ResumeItem';
import { resume } from '../../data';
import './workexp.css'
const WorkExp = () => {
  return (
    <main className='section container'>
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
      </main>

  )
}

export default WorkExp