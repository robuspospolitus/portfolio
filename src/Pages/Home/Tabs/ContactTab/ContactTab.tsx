import './ContactTab.scss';
import '../HomeTab/HomeTab.scss';
import SocialSlide from './SocialSlide/SocialSlide';
import { useEffect, useState, type CSSProperties } from 'react';
import GithubLogo from '../../../../assets/Logos/GitHubLogo';
import LinkedinLogo from '../../../../assets/Logos/LinkedinLogo';
import XLogo from '../../../../assets/Logos/XLogo';
import MailLogo from '../../../../assets/Logos/Mail';

export default function ContactTab() {
    const texts = ["talk about programming", "play resident evil", "discuss new project ideas"];
    const [text, setText] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(text === 2) {
                setText(0);
            } else setText(text+1);
        }, 5000);
        return () => clearInterval(interval);
    }, [text])
    
    return (
        <>
        <section className="full-section contact-title">
            <div className="side-to-side" style={{width:"100%"}}>
                <h1>Contact</h1>
                <div className="contact-p">
                    <div style={{textAlign:'right', fontSize:"var(--font-size-p)"}}>Let's go out for coffee!</div>
                    <WrittenCode text={`...and ${texts[text]}`} startTime={60} style={{textAlign: "right"}}/>
                </div>
            </div>
        </section>
        <section className="clear-section">
            <div className="contact-socials">
                <SocialSlide socialname='Come for the code, stay for the questionable decisions' image={GithubLogo} page='' right/>
                <SocialSlide socialname="Let's make LinkedIn less awkward, add me and say hi!" image={LinkedinLogo} page='' delay={0.5}/>
                <SocialSlide socialname="Sharing what I'm working on and figuring out loud" image={XLogo} page='' delay={1} right/>
                <SocialSlide socialname="Whether it's work or random ideas - my inbox is open" image={MailLogo} delay={1.5} page='' />
            </div>
            {/* <h2 className='border-bottom-animation' style={{maxHeight: "var(--font-size-xl)"}}>Mail</h2> */}
        </section>
        <section className="clear-section"></section>
        </>
    )
}

function WrittenCode({text, style, startTime=30, endTime=30}:{text: string, style?: CSSProperties, startTime?: number, endTime?:number}) {
    const [finalText, setFinalText] = useState("");

    useEffect(() => {
        let timeouts = [];
        setFinalText("");
        for (let i = 0; i < text.length; i++) {
            timeouts.push(
                setTimeout(() => {
                    setFinalText((t) => t + text[i]);
                }, i * startTime)
            );
        }
        timeouts.push( setTimeout(()=>{}, 2000) );
        for (let i = text.length; i >= 0; i--) {
            timeouts.push(
                setTimeout(() => {
                    setFinalText(text.slice(0, i));
                }, text.length * endTime + 2000 + (text.length - i) * endTime)
            );
        }
        return () => timeouts.forEach(clearTimeout);
    }, [text]);
    return (
        <div className="written-text" style={style}>
            {finalText}
        </div>
    )
}