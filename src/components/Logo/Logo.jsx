import './Logo.css'
export default function Logo(){
  return(
    <>
      <section className='header-title-section'>
          <img src={'/assets/svgs/IF_logo.svg'}></img>
          <h1>Ignacio<br></br>Fernández</h1>
          <h4>Junior Software<br></br>Developer</h4>
      </section>
    </>
  );
}