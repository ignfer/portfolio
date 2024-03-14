import './Contact.css'
export default function Contact(){
  
  function redirect(url){
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const githubUrl = 'https://github.com/ignfer';
  const linkedinUrl = 'https://linkedin.com/in/ignaciofernández';
  const resumeUrl = './documents/CV_IgnacioFernandez_esp_v01.pdf';
  
  return(
    <>
      <div className='contact'>
        <div className='contact-item-container'>
          <div className='contact-item'>
            <a href={githubUrl} target='_blank' rel='noreferrer'>
            <p>GitHub | </p>
              <img width="25" height="25" src={'./assets/svgs/github.svg'} alt='Visit my GitHub'></img>
            </a>
          </div>

          <div className='contact-item'>
            <a href={linkedinUrl} target='_blank' rel='noreferrer'>
            <p>Linkedin | </p>
              <img width="25" height="25" src={'./assets/svgs/linkedin.svg'} alt='Visit my Linkedin'></img>
            </a>
          </div>

          <div className='contact-item'>
            <a href={resumeUrl} target='_blank' rel='noreferrer'>
            <p>Resume | </p>
              <img width="25" height="25" src={'./assets/svgs/resume.svg'} alt='Download my Resume'></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}