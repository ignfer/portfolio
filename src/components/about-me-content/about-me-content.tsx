import './about-me-content.css';

export default function AboutMeContent() {

  return (
    <>
      <section className='about-me-content'>
        <div className={'overflow-y-scroll p-4 text-[var(--dark-color-2)] flex-column grow text-sm'}>
          <p>
            Hello! I am Ignacio, a <strong>23 years old software developer residing in Uruguay. </strong>

            <br></br>
            <br></br>

            Currently I am working as a full stack developer at Cargonet, an Uruguayan Freight-Forwarding agent, I am also pursuing the last year
            of my <strong>Computer Science Technologist degree</strong>.

            <br></br>
            <br></br>

          </p>

          <p>
            I am more than comfortable working on different stages of development, starting from zero and <strong>creating responsive UI&apos;s</strong>,
            while handling complex frontend logic or <strong>creating a backend</strong> able to achieve and streamline the
            <strong> needed business logic</strong>.

            <br></br>
            <br></br>

          </p>

          <p>
            Throughout my career, I have tackled a variety of areas, making myself <strong>a developer
            capable of carrying out end-to-end development. </strong>
            After years working across different areas of software engineering I have consistently
            demonstrated adaptability and proficiency, from <strong>requirements gathering and
            analysis to software design, implementation, and testing. </strong> This versatility has
            allowed me to contribute to multiple teams and adapt to the evolving
            landscape of software development, ensuring the successful delivery of solutions.

            <br></br>
            <br></br>
          </p>
        </div>
      </section>
    </>
  );
}