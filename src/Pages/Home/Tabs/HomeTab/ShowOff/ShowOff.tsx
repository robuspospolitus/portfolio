import MovingCard from '../../../Components/MovingCard/MovingCard';
import ArtsIcon from '../../../../../assets/Logos/Arts';
import BulbIcon from '../../../../../assets/Logos/Bulb';
import StonksIcon from '../../../../../assets/Logos/Stonks';
import DevicesIcon from '../../../../../assets/Logos/Devices';
import SettingsIcon from '../../../../../assets/Logos/Settings';
import './ShowOff.scss';
import '../HomeTab.scss'

export default function ShowOff() {
    return (
        <section className="clear-section">
            <h2 className='border-bottom-animation' style={{maxHeight: "52px"}}>WHAT I DO</h2>
            <div className="moving-cards">
                <div className="side-to-side" style={{width: "100%", gap:"24px"}}>
                    <MovingCard style={{width: "33%"}} className="pink">
                        <div className="show-off-container-content pixel-corners">
                            <div className="icon-and-text side-to-side">
                                <ArtsIcon/>
                                <h3>UI & UX</h3>
                            </div>
                            <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                        </div>
                    </MovingCard>
                    <MovingCard style={{width: "33%"}} className="blue">
                        <div className="show-off-container-content pixel-corners">
                            <div className="icon-and-text side-to-side">
                                <DevicesIcon/>
                                <h3>All devices</h3>
                            </div>
                            <p>Transforming ideas into exceptional web, desktop and mobile app experiences.</p>
                        </div>
                    </MovingCard>
                    <MovingCard style={{width: "33%"}} className="yellow">
                        <div className="show-off-container-content pixel-corners">
                            <div className="icon-and-text side-to-side">
                                <BulbIcon/>
                                <h3>Design & Creative</h3>
                            </div>
                            <p>Crafting visually stunning design that connects deeply with your audience.</p>
                        </div>
                    </MovingCard>
                </div>
                <div className="side-to-side" style={{width: "100%", gap:"24px"}}>
                    <MovingCard style={{width: "40%"}} className="green">
                        <div className="show-off-container-content pixel-corners">
                            <div className="icon-and-text side-to-side">
                                <StonksIcon/>
                                <h3>Development</h3>
                            </div>
                            <p>Bringing your vison to life with the latest technology and design trends.</p>
                        </div>
                    </MovingCard>
                    <MovingCard style={{width: "60%"}} className="orange">
                        <div className="show-off-container-content pixel-corners">
                            <div className="icon-and-text side-to-side">
                                <SettingsIcon/>
                                <h3>Performance & Optimization</h3>
                            </div>
                            <p>Ensuring fast, scalable, and high-performing applications that deliver seamless user experiences.</p>
                        </div>
                    </MovingCard>
                </div>
            </div>
        </section>
    )
}
