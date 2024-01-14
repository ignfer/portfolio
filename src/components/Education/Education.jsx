import './Education.css'
import EducationCard from '../EducationCard/EducationCard';

export default function Education(){
  return(
    <>
      <div className='education'>
        <EducationCard/>
        <EducationCard/>
        <EducationCard/>
      </div>
    </>
  );
}