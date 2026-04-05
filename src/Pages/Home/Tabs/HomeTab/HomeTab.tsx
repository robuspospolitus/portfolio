import './HomeTab.scss';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import SemiCodeSection from './SemiCodeSection/SemiCode';
import ShowOff from './ShowOff/ShowOff';
import TechStackTab from './TechStackTab/TechStackTab';
//import ExperienceSection from './ExperienceSection/ExperienceSection';
import data from '../../../../assets/Data/data.json';
const about = data.files[0].text;

export default function HomeTab() {
    console.log(about);
    return (
        <>  
            {about && <WelcomeSection about={about}/> }
            {/* <ExperienceSection/> */}
            <SemiCodeSection/>
            <ShowOff/>
            <TechStackTab/>
        </>
    )
}