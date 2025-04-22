import './Education.css';

import EducationCard from '../education-card/education-card';
/* import the JSON which contains the text to be rendered */
import educationJSON from './text__educationJSON';

export default function Education() {
  return (
    <>
      <div className='education'>
        <p>
          Currently I am pursuing the <strong>last year of my Technologist Degree in Computer Science</strong>, throughout the years I have been building
          a foundation supported by academic learning, focused on the fundamentals in order to understand how things works under
          the hood and how to create quality solutions.
        </p>
        {educationJSON.course.map((course, index) => {
          return (<EducationCard key={index}
course={course}/>);
        })}
      </div>
    </>
  );
}