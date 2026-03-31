import { Link } from 'react-router';
import { useState } from 'react';
import HomeTab from './Tabs/HomeTab/HomeTab';
import ProjectsTab from './Tabs/ProjectsTab/ProjectsTab';
import MoreTab from './Tabs/MoreTab/MoreTab';
import Background from '../../Assets/Images/image.png';
import './Home.scss';

export default function Home() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <img className='home-background' src={Background} draggable={false} alt='background' onContextMenu={e => {e.preventDefault()}}/>
            <div id="home">
                <nav id='home-tabs'>
                    <div className={`home-tab ${activeTab===1 && "active-tab"}`} onClick={()=>setActiveTab(1)}>Home</div>
                    <div className={`home-tab ${activeTab===2 && "active-tab"}`} onClick={()=>setActiveTab(2)}>Projects</div>
                    <div className={`home-tab ${activeTab===3 && "active-tab"}`} onClick={()=>setActiveTab(3)}>More</div>
               </nav>
                <main id='home-content'>
                    {activeTab===1 && <HomeTab/>}
                    {activeTab===2 && <ProjectsTab/>}
                    {activeTab===3 && <MoreTab/>}
                </main>
            </div>
        </>
    )
}