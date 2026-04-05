import { Link } from 'react-router';
import { useState } from 'react';
import HomeTab from './Tabs/HomeTab/HomeTab';
import ProjectsTab from './Tabs/ProjectsTab/ProjectsTab';
import MoreTab from './Tabs/MoreTab/MoreTab';
import Background from '../../Assets/Images/image.png';
import Footer from './Components/Footer/Footer';
import '../../styles/pixel-corners.scss';
import './Home.scss';

export default function Home() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <img className='home-background' src={Background} draggable={false} alt='background' onContextMenu={e => {e.preventDefault()}}/>
            <div id="home">
                <nav id='home-tabs'>
                    <div className={`home-tab ${activeTab===1 ? "active-tab pixel-corners-top":"pixel-corners"}`} onClick={()=>setActiveTab(1)}>Home</div>
                    <div className={`home-tab ${activeTab===2 ? "active-tab pixel-corners-top":"pixel-corners"}`} onClick={()=>setActiveTab(2)}>Projects</div>
                    <div className={`home-tab ${activeTab===3 ? "active-tab pixel-corners-top":"pixel-corners"}`} onClick={()=>setActiveTab(3)}>More</div>
                    <Link to="desktop" style={{color:"white"}}><div className={`desktop-tab home-tab pixel-corners`}>Desktop experience</div></Link>
               </nav>
                <main id='home-content' className={activeTab===1 ? "pixel-corners-top-left":`pixel-corners`} style={{borderTopLeftRadius: activeTab===1 ?"0":"24px"}}>
                    {activeTab===1 && <HomeTab/>}
                    {activeTab===2 && <ProjectsTab/>}
                    {activeTab===3 && <MoreTab/>}
                </main>
                <Footer/>
            </div>
        </>
    )
}