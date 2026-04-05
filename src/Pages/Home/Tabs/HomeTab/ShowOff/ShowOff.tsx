import MovingCard from '../../../Components/MovingCard/MovingCard';
import './ShowOff.scss';
import '../HomeTab.scss'

export default function ShowOff() {
    return (
        <section className="clear-section">
            <h2 className='border-bottom-animation' style={{maxHeight: "52px"}}>WHAT I DO</h2>
            <div className="moving-cards">
                <div className="side-to-side" style={{width: "100%", gap:"24px"}}>
                    <MovingCard style={{width: "33%"}} className="pink">
                        <h3>UI & UX</h3>
                        <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                    </MovingCard>
                    <MovingCard style={{width: "33%"}} className="blue">
                        <h3>Web & Mobile App</h3>
                        <p>Transforming ideas into exceptional web and mobile app experiences.</p>
                    </MovingCard>
                    <MovingCard style={{width: "33%"}} className="yellow">
                        <h3>Design & Creative</h3>
                        <p>Crafting visually stunning design that connects deeply with your audience.</p>
                    </MovingCard>
                </div>
                <div className="side-to-side" style={{width: "100%", gap:"24px"}}>
                    <MovingCard style={{width: "40%"}} className="green">
                        <h3>Development</h3>
                        <p>Bringing your vison to life with the latest technology and design trends.</p>
                    </MovingCard>
                    <MovingCard style={{width: "60%"}} className="orange">
                        <h3>UI & UX</h3>
                        <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                    </MovingCard>
                </div>
            </div>
        </section>
    )
}
