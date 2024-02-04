import './Modal.css'
export default function Modal({experience}){  
  return(
    <>
    <dialog className='modal'>
      <h1>{experience.title}</h1>
      <h3>Role: {experience.modalRole}</h3>
      <h4>{experience.modalDescription}</h4>
      <button>Go to the repo</button>
      <button>X</button>
    </dialog>
    </>
  );
}