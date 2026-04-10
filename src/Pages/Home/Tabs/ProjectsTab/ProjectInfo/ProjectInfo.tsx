import './ProjectInfo.scss';
import '../../HomeTab/TechStackTab/TechStackTab.scss'
import { type Project } from '../ProjectsTab';

type ProjectProps = {
    data: Project,
    onClick: () => void
}

export default function ProjectInfo({data, onClick}:ProjectProps) {
    const handleOnExit = () => {
        onClick();
    }

    return (
        <> 
            {/* Title */}
            <button onClick={handleOnExit} className='pixel-buttons'>{"<"}</button>
            <h2>{data.title}</h2>
            <div className="project-img-wrapper">
                <img src={data.photo} alt={data.title + " main image"} />
            </div>

            {/* About */}
            <div>
                
            </div>
            {data.text?.map((line) => (
                <>  
                    {line.match(/^\*/) ? <h3 className='border-bottom-animation'>{line.split("*")[1]}</h3>:<p>{line}</p>}
                </>
            ))}

            {/* Tech Stack */}
            <h3 className='border-bottom-animation'>Tech stack</h3>
            <p>Key technologies used in this app:</p>
            <ul>
                {data.stack?.words?.map((stack) => (
                    <li>{stack}</li>
                ))}
            </ul>
            <img height={"64px"} src={`https://skills.syvixor.com/api/icons?i=${data.stack?.icons?.map((el) => el)}`} />

            {/* Gallery */}
            <div className="gallery-wrapper">
                <h3 className='border-bottom-animation'>Gallery</h3>
                <div className="carousel">
                    <div className="track">
                        {data.images && <>
                            {data.images.map((img) => (
                                <CarouselImages img={img}/>
                            ))}
                        </>}
                        {/* Duplicates for animation purposes */}
                        {data.images && <>
                            {data.images.map((img)=> (
                                <CarouselImages img={img}/>
                            ))}
                        </>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

function CarouselImages({img}:{img:string}) {
    return (
        <>
            <img src={img} alt="gallery image" />
        </>
    )
}