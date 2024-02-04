import Badge from '../Badge/Badge';
import Modal from '../Modal/Modal';
import './ExperienceCard.css'

export default function ExperienceCard({experience}){
  return(
    <>
      <div className='experience-card'>
        <h2 className='experience-card-title'>{experience.title}</h2>
        
        <div className='experience-card-preview'>
          <img src={experience.imagepath}></img>
        </div>

        <div className='experience-card-badges'>
          {experience.badges.map((badge,index) => {
              return(<Badge key={index} content={badge}/>)
          })}
        </div>
        
        <div className='experience-card-description'>
          <p>
            {experience.description}
          </p>
        </div>
      </div>
    </>
  );
}