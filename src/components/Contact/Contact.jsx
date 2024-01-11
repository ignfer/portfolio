import './Contact.css'
export default function Contact(){
  return(
    <>
      <div className='contact'>
        <div className='contact-item-container'>
          <div className='contact-item'>
            <p>GitHub | </p>
            <a href='https://github.com/ignfer' target='_blank' rel='noreferrer'>
              <img width="25" height="25" src={'./assets/svgs/github.svg'} alt='Visit my GitHub'></img>
            </a>
          </div>

          <div className='contact-item'>
            <p>Linkedin | </p>
            <a href='https://linkedin.com/in/ignaciofernández' target='_blank' rel='noreferrer'>
              <img width="25" height="25" src={'./assets/svgs/linkedin.svg'} alt='Visit my Linkedin'></img>
            </a>
          </div>

          <div className='contact-item'>
            <p>Resume | </p>
            <a href='./documents/CV_IgnacioFernandez_esp_v01.pdf' target='_blank' rel='noreferrer'>
              <img width="25" height="25" src={'./assets/svgs/resume.svg'} alt='Download my Resume'></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}