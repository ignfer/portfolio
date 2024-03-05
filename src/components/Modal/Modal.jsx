import './Modal.css'

export default function Modal({experience,modalId,closeModal}){
  function redirect(route){
    console.log(route);
    window.open(route, '_blank', 'noopener,noreferrer');
  }

  function openPopUp(popupId){
    const element = document.querySelector('#' + popupId);
    element.showModal();
  }

  return(
    <>
      <dialog className='modal' id={modalId}>
        <div className='modal-container'>
          
          <div className='modal-header'>
            <h1>{experience.title}</h1>
            <div className='modal-buttons-wrapper'>
              <button className='badge' onClick={() => redirect(experience.modalRepoRoute)}>Check the code</button>
              
              {experience.modalProjectRoute ? (<button className='badge' onClick={() => {redirect(experience.modalProjectRoute)}}>Visit project</button>) : (null)}
              
              <button className='badge' onClick={closeModal}>Close</button>
            </div>
          </div>

          <p>Developed Role: <strong>{experience.modalRole}</strong></p>
          
          <div className='modal-description-wrapper'>
            <ul>
              {experience.modalDescription.map((paragraph,index) => {
                return <li key={index}>{paragraph}</li>
              })}
            </ul>
          </div>

          <div className='modal-images'>
            {experience.cards.map((card,index) => {
              
              let popupId = 'popup' + experience.id + index;
              
              return(
                <>
                  <dialog className='modal-popup-image' id={popupId}><img src={card.path}></img></dialog>      
                  <div className='modal-card'>
                    <img key={index} src={card.path} onClick={() => openPopUp(popupId)}></img>
                    <p className='modal-card-description'> {card.description}</p>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </dialog>
    </>
  );
}