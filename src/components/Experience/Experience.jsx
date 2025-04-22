import './Experience.css'

import ExperienceCard from '../ExperienceCard/ExperienceCard';

import experienceJSON from './text_experienceJSON';

export default function Experience() {

    return (
        <>
            <div className='experience'>
                <p>
                    As a developer, I have a strong belief in serious projects as a means
                    of learning and showcasing my skills and my value. Here, you can find my most
                    recent and relevant projects. Click or touch each card to see more information.
                </p>
                <div className='experience-card-container'>
                    {
                        experienceJSON.experience.map((element, index) => {
                            return <ExperienceCard key={index} index={index} experience={element}/>
                        })}
                </div>
            </div>
        </>
    );
}