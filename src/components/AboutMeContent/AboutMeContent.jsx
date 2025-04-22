import './AboutMeContent.css'

export default function AboutMeContent({tabIndex, handleIndexChange}) {

    return (
        <>
            <section className='about-me-content'>
                <div className={tabIndex === 1 ? 'active-tab' : 'tab'}>
                    <p>
                        Hello! I am Ignacio, a <strong>23 years old software developer residing in Uruguay. </strong>
                        Currently I am working as a full stack developer at Cargonet, an Uruguayan Freight-Forwarding agent, I am also pursuing the last year
                        of my <strong>Computer Science Technologist degree</strong>.
                        I am looking forward to take part on impactful projects and collaborate with
                        great developers.
                    </p>

                    <p>
                        I am comfortable and have experience starting from zero and <strong>creating responsive UI&apos;s</strong>,
                        and all <strong>the frontend&apos;s </strong> aspects
                        or <strong>replicating a design into a real and functional prototype or project. </strong>
                        Also I have experience <strong>creating a backend</strong> able to achieve the
                        <strong> business logic needed</strong>, I have worked for years with
                        a heavily <strong>OOP focus</strong>, and also I am experienced on
                        working with <strong>REST or SOAP APIs.</strong> so as with <strong>databases
                        such as MySQL or Postgres</strong>.
                    </p>
                </div>

                <div className={tabIndex === 2 ? 'active-tab' : 'tab'}>
                    <p>
                        <strong>Here in my portfolio</strong> you will be able to discover my journey and search
                        through the projects I have acomplished. My focus is to
                        get knowledge through a <strong>project based orientation</strong> and applying that
                        knowledge on understanding the &apos;why&apos; behind things.
                    </p>

                    <p>
                        Throughout my career, I have tackled a variety of areas, making myself <strong>a developer
                        capable of carrying out end-to-end development. </strong>
                        After years working across different areas of software engineering I have consistently
                        demonstrated adaptability and proficiency, from <strong>requirements gathering and
                        analysis to software design, implementation, and testing. </strong> This versatility has
                        allowed me to contribute to multiple teams and adapt to the evolving
                        landscape of software development, ensuring the successful delivery of solutions.
                    </p>
                </div>

                <div className={tabIndex === 3 ? 'active-tab' : 'tab'}>
                    <p>
                        I have found my mission and passion, which revolves around
                        <strong> software development. </strong> For me, software
                        development is not merely a profession; it is a calling that I embrace with
                        genuine enthusiasm and commitment. This passion has been a driving force behind
                        my journey.
                    </p>

                    <p>
                        One aspect that sets me apart is my willingness to take on projects that go beyond my
                        current abilities. I firmly believe that these projects, challenging as they may be,
                        <strong> offer the greatest potential for progress.</strong> I approach each project
                        as an opportunity to push boundaries, learn new technologies, and deliver solutions
                        that exceed expectations.
                    </p>
                </div>

                <div className='about-me-tab'>
                    <div className={tabIndex === 1 ? 'index selected' : 'index'} onClick={() => handleIndexChange(1)}></div>
                    <div className={tabIndex === 2 ? 'index selected' : 'index'} onClick={() => handleIndexChange(2)}></div>
                    <div className={tabIndex === 3 ? 'index selected' : 'index'} onClick={() => handleIndexChange(3)}></div>
                </div>

            </section>
        </>
    );
}