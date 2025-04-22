import './Main.css'

import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Endorsement from '../Endorsement/Endorsement';
import Blog from "../Blog/Blog.jsx";

import {useState} from 'react';

import NavBar from '../NavBar/NavBar.tsx';

export default function Main() {
    const tabs = {
        EXPERIENCE: {
            label: 'EXPERIENCE',
            component: <Experience/>
        },
        EDUCATION: {
            label: 'EDUCATION',
            component: <Education/>
        },
        ENDORSEMENT: {
            label: 'ENDORSEMENT',
            component: <Endorsement/>
        },
        BLOG: {
            label: 'BLOG',
            component: <Blog/>
        }
    }
    const [selectedTab, setSelectedTab] = useState(tabs.BLOG.label);

    return (
        <>
            <main className='main'>
                <NavBar
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    tabs={tabs}
                />
                {tabs[selectedTab]?.component || 'Oops, something went wrong :/'}
            </main>
        </>
    );
}