import Background from '../../Assets/Images/image.png';
import './Home.scss';

export default function Home() {

    return (
        <>
            <img className='home-background' src={Background} draggable={false} alt='background' onContextMenu={e => {e.preventDefault()}}/>
            <div id="home">
            
            </div>
        </>
    )
}