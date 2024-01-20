import './ReferenceCard.css'

export default function ReferenceCard({person}){
  return(
    <>
    <div className='reference-card'>
      <div className='reference-card-title'>
        <h3>{person.name}</h3>
        <a href={person.site} target='_blank' rel='noreferrer'>
          <img width="30" height="30" src={'./assets/svgs/linkedin.svg'} alt='Visit my Linkedin'></img>
        </a>
      </div>
      
      <h5>Current position: {person.position}</h5>
      <p>&quot;{person.description}&quot;</p>
    </div>
    </>
  );
}