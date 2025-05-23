import './logo.css';

export default function Logo() {
  return (
    <>
      <section className='header-title-section'>
        <img src={'./IF_LOGO.svg'}></img>
        <h1 data-animation={'highlightable'}
            className={'font-bold'}>Ignacio<br></br>Fernández</h1>
        <h4>Software Engineer</h4>
      </section>
    </>
  );
}