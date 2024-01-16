import './Education.css'
import EducationCard from '../EducationCard/EducationCard';

export default function Education(){
  return(
    <>
      <div className='education'>
        <p>
          Embarking on a continuous journey of learning and growth, my educational background
          reflects my dedication to staying at the forefront of technology. 
          Currently pursuing Technologist Degree in Computer Science, I am honing my skills and expanding 
          my knowledge to meet the ever-evolving demands of the tech landscape.
        </p>
        <EducationCard imagePath={'./assets/svgs/utec.svg'}/>
        <EducationCard/>
        <EducationCard imagePath={'./assets/svgs/efset.svg'}/>
        <EducationCard imagePath={'./assets/svgs/efset.svg'}/>
      </div>
    </>
  );
}