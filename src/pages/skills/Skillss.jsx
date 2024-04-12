import React from 'react'
import Skills from '../../components/Skills'
import './skillss.css';
function Skillss() {
  return (
    <main className='section container'>
    <section className='skills__container'>
    <h3 className='section__subtitle subtitle__center'>My Skills</h3>

    <div className='skills__container grid'>
      <Skills />
    </div>
  </section>
  </main>

  )
}

export default Skillss