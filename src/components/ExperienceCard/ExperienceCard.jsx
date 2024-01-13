import './ExperienceCard.css'

export default function ExperienceCard({title='No title available', description='No description available'}){
  return(
    <>
      <div className='experience-card'>
        <h2 className='experience-card-title'>{title}</h2>
        
        <div className='experience-card-preview'>
          <img src='../assets/images/experience_img_placeholder.png'></img>
        </div>
        
        <div className='experience-card-description'>
          <p>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}