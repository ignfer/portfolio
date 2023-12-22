import './Contact.css'
export default function Contact(){
  return(
    <>
      <div className='contact'>
        <p>contact me</p>
        <div className='contact-images-container'>
          <img src={'./assets/images/github_ico.png'} alt='Visit my GitHub'></img>
          <img src={'./assets/images/linkedin_ico.png'} alt='Visit my Linkedin'></img>
          <img src={'./assets/images/gmail_ico.png'} alt='Contact me via Email'></img>
        </div>
      </div>
    </>
  );
}