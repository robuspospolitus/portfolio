// import { Link } from 'react-router';
import { useState } from 'react';
import HomeTab from './Tabs/HomeTab/HomeTab';
import ProjectsTab from './Tabs/ProjectsTab/ProjectsTab';
import ContactTab from './Tabs/ContactTab/ContactTab';
import Footer from './Components/Footer/Footer';
import FloatingObject from './Components/FloatingObject/FloatingObject';
import '../../styles/pixel-corners.scss';
import './Home.scss';
import ThemeButton from './Components/ThemeButton/ThemeButton';

// import ComputerIcon from '../../assets/Logos/Computer';
import ArtsIcon from '../../Assets/Logos/Arts';
// import BulbIcon from '../../Assets/Logos/Bulb';
// import StonksIcon from '../../Assets/Logos/Stonks';
import DevicesIcon from '../../Assets/Logos/Devices';
import SettingsIcon from '../../Assets/Logos/Settings';

export default function Home() {
    const [activeTab, setActiveTab] = useState(1);
    document.body.className = `${localStorage.getItem("theme") || "dark"}-theme`;

    return (
        <>
            <div id="floatingobjects">
                {/* Floating objects */}
                <FloatingObject leftx={0} delayTime={-5} time={12} src="/images/floating_objects/CuteTurtle.png"/>
                <FloatingObject leftx={120} delayTime={-2} time={15} src="/images/floating_objects/Starfish.png"/>
                <FloatingObject leftx={240} delayTime={-9} time={15} src="/images/floating_objects/Fishuke.png"/>
                <FloatingObject rightx={240} delayTime={-1} src="/images/floating_objects/CuteTurtle_color.png"/>
                <FloatingObject rightx={120} delayTime={-7} time={12} src="/images/floating_objects/Fishuke.png"/>
                <FloatingObject rightx={0} delayTime={-5} src="/images/floating_objects/KissFish.png"/>
            </div>
            <div id="home">
                <nav id='home-tabs' className={`${window.innerWidth>768 && "pixel-corners"}`}>
                    <div className="normal-tabs">
                        <div className={`home-tab pixel-corners ${activeTab===1 && (window.innerWidth<=768 ? "active-tab pixel-corners-top" : "active-tab")}`} onClick={()=>setActiveTab(1)}><DevicesIcon/></div>
                        <div className={`home-tab pixel-corners ${activeTab===2 && (window.innerWidth<=768 ? "active-tab pixel-corners-top" : "active-tab")}`} onClick={()=>setActiveTab(2)}><ArtsIcon/></div>
                        <div className={`home-tab pixel-corners ${activeTab===3 && (window.innerWidth<=768 ? "active-tab pixel-corners-top" : "active-tab")}`} onClick={()=>setActiveTab(3)}><SettingsIcon/></div>
                    </div>
                    {/* <Link to="desktop" style={{color:"white"}}><div className={`desktop-tab home-tab pixel-corners`}>
                        <p>Desktop experience</p>
                        <ComputerIcon/>
                    </div></Link> */}
               </nav>
                <main id='home-content' className={activeTab===1 && window.innerWidth<=768 ? "pixel-corners-top-left":`pixel-corners-home`} >
                    {activeTab===1 && <HomeTab/>}
                    {activeTab===2 && <ProjectsTab/>}
                    {activeTab===3 && <ContactTab/>}
                </main>
            </div>
            <div className="fixed-buttons">
                <ThemeButton/>
            </div>
            <Footer/>
        </>
    )
}