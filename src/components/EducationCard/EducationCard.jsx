import Badge from '../Badge/Badge';
import './EducationCard.css'

export default function EducationCard({course}){
  return(
    <>
      <div className='education-card'>
        <img width='150px' src={course.imagePath}></img>
        <div className='education-card-title'>
          <strong>{course.title} by {course.organization}</strong>
          {course.skill.map((skill,index) => {
            return <Badge key={index} content={skill}/>
          })}
        </div>
        <p>{course.description}</p>
      </div>
    </>
  );
}