import React from 'react';
import parse from 'html-react-parser';

const ResumeItem = ({ icon, year, title1, title2, desc, desc1, desc2, desc3, desc4 }) => {
  return (
    <div className='resume__item'>
      <div className='resume__icon'>{icon}</div>

      <span className='resume__date'>{year}</span>
      <h3 className='resume__subtitle'>{parse(title1)}</h3>
      
      <h2 className='resume__subtitle'>{parse(title2)}</h2>
      <p className='resume__description'>{desc}</p>
      
      <p className='resume__description'>{desc1}</p>
      <p className='resume__description'>{desc2}</p>
      <p className='resume__description'>{desc3}</p>
      <p className='resume__description'>{desc4}</p>
    </div>
  );
};

export default ResumeItem;
