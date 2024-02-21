import './Modal.css'

export default function Modal({experience,modalId,closeModal}){
  function redirect(route){
    console.log(route);
    window.open(route, '_blank', 'noopener,noreferrer');
  }
  return(
    <>
      <dialog className='modal' id={modalId}>
        <div className='modal-container'>
          <h1 className='modal-title'>{experience.title}</h1>
          <p>Developed Role: <strong>{experience.modalRole}</strong></p>
          
          <div className='modal-description-wrapper'>
            {experience.modalDescription.map((paragraph,index) => {
              return <p key={index}>{paragraph}</p>
            })}
          </div>
          
          <div className='modal-buttons-wrapper'>
            <button className='badge' onClick={() => redirect(experience.modalRepoRoute)}>Check the code</button>
            
            {experience.modalProjectRoute ? (<button className='badge' onClick={() => redirect()}>Visit project</button>) : (null)}
            
            <button className='badge' onClick={closeModal}>Close</button>
          </div>
        </div>
        
        <div className='modal-banner-wrapper'>
          <div className='modal-banner'>
            <img src={experience.imagepath}></img>
            <img src={experience.imagepath}></img>
            <img src={experience.imagepath}></img>
          </div>
        </div>
      </dialog>
    </>
  );
}