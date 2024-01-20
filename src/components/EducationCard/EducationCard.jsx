import Badge from '../Badge/Badge';
import './EducationCard.css'

export default function EducationCard({imagePath}){
  return(
    <>
      <div className='education-card'>
        <img width='150px' src={imagePath}></img>
        <div className='education-card-title'>
          <span>2021 - Present </span><strong>Technologist Degree in Computer Science</strong>
          <Badge content={'Language'}/>
        </div>
        <p>
        The Technologist Degree in Computer Science trains professionals with the skills to act
        in the development, implementation and administration of 
        computer systems. A fundamental aspect is that although students use different 
        technologies throughout their degree, the focus is on that when
        they graduate from it, they are able to adapt to working with 
        new technologies that arise or that they have not studied at
        throughout the race. This aspect of training is fundamental
        , especially taking into account the constant evolution of 
        tools and technologies in the ICT area.
        </p>
      </div>
    </>
  );
}