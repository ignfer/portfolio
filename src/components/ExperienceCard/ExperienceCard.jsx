import './ExperienceCard.css'

export default function ExperienceCard(){
  return(
    <>
      <div className='experience-card'>
        <h2 className='experience-card-title'>Test project</h2>
        
        <div className='experience-card-preview'>
          <img src='../assets/images/experience_img_placeholder.png'></img>
        </div>
        
        <div className='experience-card-description'>
          <p>Here is a description placeholder!</p>
        </div>
      </div>
    </>
  );
}