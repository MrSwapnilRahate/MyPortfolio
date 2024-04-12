import React from 'react';
import { project } from '../../data';
import ProjectItem from '../../components/ProjectItem';
import "./projects.css"

const Projects = () => {
  return (
    <div className='section container'>
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
    </div>
  );
};

export default Projects;
