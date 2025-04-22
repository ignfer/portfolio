import './education-card.css';

import Badge from '../badge/badge.tsx';

export default function EducationCard({course}) {

  const redirect = () => {
    window.open(course.site, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className='education-card'>
        <div className='education-card-image-container' onClick={redirect}>
          <img src={course.imagepath}></img>
        </div>

        <div className='education-card-content'>
          <div className='education-card-title'>
            <strong>{course.title} </strong>
            {course.certification !== undefined ? (<a href={course.certification}>See certification</a>) : null}
          </div>

          <div className='education-card-badges'>
            {course.skill.map((skill, index) => {
              return <Badge key={index} content={skill}/>;
            })}
          </div>

          <div className='education-card-details'>
            <p>
              <strong>Organization: </strong>{course.organization}<br></br>
              <strong>Year: </strong>{course.year}<br></br>
              <strong>Status: </strong>{course.status}<br></br>
            </p>
          </div>

          <p className='education-card-description'>{course.description}</p>
        </div>
      </div>
    </>
  );
}