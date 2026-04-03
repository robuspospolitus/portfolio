import { useInView } from "react-intersection-observer";
import './ExperienceSection.scss';

export default function ExperienceSection() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div className="section full-section" ref={ref}>
            <h2>Experience</h2>
            <div className="side-to-side" style={{width: "100%"}}>
                <div className="experience">
                    <h3>Past</h3>
                    <div className={inView ? "line expanded":"line"}/>
                    <h3>Future</h3>
                </div>
                <div className="experiences-items gap">

                </div>
            </div>
        </div>
    )
}