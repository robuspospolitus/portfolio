import { Link } from 'react-router';
import { useState } from 'react';
import HomeTab from './Tabs/HomeTab/HomeTab';
import ProjectsTab from './Tabs/ProjectsTab/ProjectsTab';
import ContactTab from './Tabs/ContactTab/ContactTab';
import Background from '../../Assets/Images/image.png';
import Footer from './Components/Footer/Footer';
import FloatingObject from './Components/FloatingObject/FloatingObject';
import '../../styles/pixel-corners.scss';
import './Home.scss';
import ComputerIcon from '../../assets/Logos/Computer';

export default function Home() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <img className='home-background' src={Background} draggable={false} alt='background' onContextMenu={e => {e.preventDefault()}}/>
            <div id="home">
                <nav id='home-tabs'>
                    <div className="normal-tabs">
                        <div className={`home-tab ${activeTab===1 ? "active-tab pixel-corners-top":"pixel-corners"}`} onClick={()=>setActiveTab(1)}>Home</div>
                        <div className={`home-tab ${activeTab===2 ? "active-tab pixel-corners-top":"pixel-corners"}`} onClick={()=>setActiveTab(2)}>Projects</div>
                        <div className={`home-tab ${activeTab===3 ? "active-tab pixel-corners-top":"pixel-corners"}`} onClick={()=>setActiveTab(3)}>Contact</div>
                    </div>
                    <Link to="desktop" style={{color:"white"}}><div className={`desktop-tab home-tab pixel-corners`}>
                        <p>Desktop experience</p>
                        <ComputerIcon/>
                    </div></Link>
               </nav>
                <main id='home-content' className={activeTab===1 ? "pixel-corners-top-left":`pixel-corners-home`} style={{borderTopLeftRadius: activeTab===1 ?"0":"24px"}}>
                    {activeTab===1 && <HomeTab/>}
                    {activeTab===2 && <ProjectsTab/>}
                    {activeTab===3 && <ContactTab/>}
                </main>
                <Footer/>

            </div>
            <div id="floatingobjects">
                {/* Floating objects */}
                <FloatingObject 
                    leftx={0} 
                    delayTime={-5} 
                    time={12}
                    src="/images/floating_objects/CuteTurtle.png"/>
                <FloatingObject 
                    leftx={120} 
                    delayTime={-2} 
                    time={15}
                    src="/images/floating_objects/Starfish.png"/>
                <FloatingObject 
                    leftx={300} 
                    delayTime={-9} 
                    time={15}
                    src="/images/floating_objects/Fishuke.png"/>
                <FloatingObject 
                    rightx={300} 
                    delayTime={-1} 
                    src="/images/floating_objects/CuteTurtle_color.png"/>
                <FloatingObject 
                    rightx={120} 
                    delayTime={-7} 
                    time={12}
                    src="/images/floating_objects/Fishuke.png"/>
                <FloatingObject 
                    rightx={0} 
                    delayTime={-5} 
                    src="/images/floating_objects/KissFish.png"/>
            </div>
        </>
    )
}