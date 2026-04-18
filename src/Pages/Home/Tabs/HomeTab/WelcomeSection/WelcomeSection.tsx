import XLogo from '../../../../../assets/Logos/XLogo.tsx';
import LinkedinLogo from '../../../../../assets/Logos/LinkedinLogo.tsx';
import GithubLogo from '../../../../../assets/Logos/GitHubLogo.tsx';
import MovingCard from '../../../Components/MovingCard/MovingCard.tsx';
import './WelcomeSection.scss';

interface Props{
    about: string[]
}

export default function WelcomeSection({about}:Props) {
    return (
        <section className="clear-section">
            <h1 style={{textAlign: "center"}} id='welcome' className='border-bottom-animation'>{about && about[0]}</h1>
            <div className="side-to-side welcome-side-to-side" style={{gap:"48px"}}>
                <MovingCard style={{padding:0, width: "auto"}} noBorder>
                    <img id='prof-pic' draggable={false} className='pixel-corners' src='images/profile.png' alt='profile picture'/>
                </MovingCard>
                <div className='gap'>
                    <h2>
                        Creating immersive, 
                        <div>
                            high-fidelity 
                        </div> 
                        experiences
                    </h2>
                    <p>Front-end developer</p>
                </div>
            </div>
            <div className='side-to-side' style={{gap:"24px", margin:"24px", justifyContent:"center", alignContent:"center", width:"100%"}}>
                <a href='https://github.com/robuspospolitus' target='_blank' className='socials-logo color-hover'>
                    <GithubLogo/>
                </a>
                <a href='https://x.com/robuspospolitus' target='_blank' className='socials-logo color-hover'>
                    <XLogo/>
                </a>
                <a href='https://www.linkedin.com/in/nadia-karolina-gill-3a81a3331/' target='_blank' className='socials-logo color-hover'>
                    <LinkedinLogo/>
                </a>
            </div>
        </section>
    );
}