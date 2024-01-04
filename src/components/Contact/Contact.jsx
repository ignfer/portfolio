import './Contact.css'
export default function Contact(){
  return(
    <>
      <div className='contact'>
        <p>contact me</p>
        <div className='contact-images-container'>
          <a href='https://github.com/ignfer' target='_blank' rel='noreferrer'>
            <img width="42" height="42" src={'./assets/svgs/github.svg'} alt='Visit my GitHub'></img>
          </a>
          <a href='www.linkedin.com/in/ignaciofernández' target='_blank' rel='noreferrer'>
            <img width="42" height="42" src={'./assets/svgs/linkedin.svg'} alt='Visit my Linkedin'></img>
          </a>
          <a href='https://github.com/ignfer' target='_blank' rel='noreferrer'>
            <img width="35" height="35" src={'./assets/svgs/resume.svg'} alt='Download my Resume'></img>
          </a>
        </div>
      </div>
    </>
  );
}