import { useInView } from "react-intersection-observer";
import './SemiCode.scss';
import {useEffect, useState, type CSSProperties} from "react";

export default function SemiCodeSection() {
    return (
        <section className="full-section">
            <div className="side-to-side" style={{width: "100%", alignItems:"start"}}>
                <div className="gap semi-code" style={{width: "60%"}}>
                    <WrittenCode text='<div id="promo">'/>
                    <WrittenCode text="<h2>" style={{marginLeft: "24px"}}/>
                    <WrittenCode text="Design, Code, Engage" style={{marginLeft: "48px"}}/>
                    <WrittenCode text="</h2>" style={{marginLeft: "24px"}}/>
                    <WrittenCode text="<p>" style={{marginLeft: "24px"}}/>
                    <WrittenCode text="Transform ideas into experiences that inspire, perform, and resonate." style={{marginLeft: "48px"}}/>
                    <WrittenCode text="</p>" style={{marginLeft: "24px"}}/>
                    <WrittenCode text="</div>"/>
                    <h3 className="text-animation">Mastering the craft</h3>
                </div>
                <div className="gap" style={{width: "40%", textAlign:"right"}}>
                    <p className="color-hover" style={{fontSize: "32px", color: "var(--font-color-fullsection)"}}>2nd-semester Computer Engineering student. </p>
                    <p style={{fontSize: "24px"}}>I'm 20 years old and have been actively developing as a front-end developer for the past few years using React. </p>
                </div>
            </div>
        </section>
    )
}

function WrittenCode({text, style}:{text: string, style?: CSSProperties}) {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [finalText, setFinalText] = useState("");

    useEffect(() => {
        let timeouts = [];
        if (inView) {
            setFinalText("");
            for (let i = 0; i < text.length; i++) {
                timeouts.push(
                    setTimeout(() => {
                        setFinalText((t) => t + text[i]);
                    }, i * 30)
                );
            }
        } else setFinalText("");
        return () => timeouts.forEach(clearTimeout);
    }, [inView, text]);
    return (
        <div ref={ref} className="written-text" style={style}>
            {finalText}
        </div>
    )
}