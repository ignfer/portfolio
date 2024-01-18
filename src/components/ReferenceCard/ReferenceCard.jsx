import './ReferenceCard.css'

export default function ReferenceCard({name,role,description,redirect}){
  return(
    <>
    <div className='reference-card'>
      <h3>{name}</h3>
      <h5>{role}</h5>
      <p>&quot;{description}&quot;</p>
    </div>
    </>
  );
}