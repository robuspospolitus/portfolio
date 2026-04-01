import './HomeTab.scss';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
import data from '../../../../assets/Data/data.json';
const about = data.files[0].text;

export default function HomeTab() {
    console.log(about);
    return (
        <>  
            {about && <WelcomeSection about={about}/> }
            <ExperienceSection/>
            <div className="section clear-section">

            </div>
        </>
    )
}