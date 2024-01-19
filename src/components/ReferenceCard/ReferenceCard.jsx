import './ReferenceCard.css'

export default function ReferenceCard({person}){
  return(
    <>
    <div className='reference-card'>
      <h3>{person.name}</h3>
      <h5>Current position: {person.position}</h5>
      <p>&quot;{person.description}&quot;</p>
    </div>
    </>
  );
}