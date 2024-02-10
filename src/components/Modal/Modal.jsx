import './Modal.css'

export default function Modal({experience,modalId,closeModal}){
  function redirect(route){
    console.log(route);
    window.open(route, '_blank', 'noopener,noreferrer');
  }
  return(
    <>
      <dialog className='modal' id={modalId}>
        <div className='modal-banner'>
        <img src={experience.imagepath}></img>
        </div>
        
        <div className='modal-container'>
          <h1>{experience.title}</h1>
          <h3>Role: {experience.modalRole}</h3>
          <p>{experience.modalDescription}</p>
          
          <div className='modal-buttons-wrapper'>
            <button className='badge' onClick={() => redirect(experience.modalRepoRoute)}>Check the code</button>
            
            {experience.modalProjectRoute ? (<button className='badge' onClick={() => redirect()}>Visit project</button>) : (null)}
            
            <button className='badge' onClick={closeModal}>Close</button>
          </div>
        </div>
      </dialog>
    </>
  );
}