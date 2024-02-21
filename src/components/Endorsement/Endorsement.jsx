import ReferenceCard from '../ReferenceCard/ReferenceCard';

import './Endorsement.css'

/* import the JSON which contains the text to be rendered */
import endorsementJSON from './text_endorsementJSON';

export default function Endorsement(){

  return(
    <>
      <div className='endorsement'>
        <p>Recommendations from experienced professionals on the IT field who have collaborated with me on past or ongoing projects.</p>

        {endorsementJSON.people.map((person,index) =>{
          return <ReferenceCard key={index} person={person}/>
        })}
      </div>
    </>
  );
}