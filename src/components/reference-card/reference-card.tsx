import './reference-card.css';

export default function ReferenceCard({person}) {
  return (
    <>
      <div className='reference-card'>
        <div className='reference-card-title'>
          <h3>{person.name} - {person.position}</h3>
          <a href={person.site} target='_blank' rel='noreferrer'>
            <img width="30" height="30" src={'./assets/svgs/linkedin.svg'} alt='Visit my Linkedin'></img>
          </a>
        </div>
        <p className='reference-card-description'>&quot;{person.description}&quot;</p>
      </div>
    </>
  );
}