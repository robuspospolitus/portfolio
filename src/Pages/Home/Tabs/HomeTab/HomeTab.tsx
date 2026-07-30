import './HomeTab.scss';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import SemiCodeSection from './SemiCodeSection/SemiCode';
import ShowOff from './ShowOff/ShowOff';
import TechStackTab from './TechStackTab/TechStackTab';
//import ExperienceSection from './ExperienceSection/ExperienceSection';
import data from '../../../../Assets/Data/data.json';
const about = data.files[0].text;

export default function HomeTab() {
    console.log(about);
    return (
        <>  
            <div className='side-to-side-home first-home' style={{alignItems:"center"}}>
                {about && <WelcomeSection about={about} /> }
                {/* <ExperienceSection/> */}
                <SemiCodeSection/>
            </div>
            <div className='side-to-side-home second-home'>
                <ShowOff/>
                <TechStackTab/>
            </div>
        </>
    )
}