import './Education.css'
import EducationCard from '../EducationCard/EducationCard';

/* import the JSON which contains the text to be rendered */
import educationJSON from './text__educationJSON';

export default function Education(){
  return(
    <>
      <div className='education'>
        <p>
          Explore through my educational background which reflects my broad formation and constant dedication to staying 
          at the forefront of technology. Currently I am pursuing the last year of my Technologist Degree in Computer Science
        </p>
        {educationJSON.course.map((course,index) => {
          return(<EducationCard key={index} course={course}/>);
        })}
      </div>
    </>
  );
}