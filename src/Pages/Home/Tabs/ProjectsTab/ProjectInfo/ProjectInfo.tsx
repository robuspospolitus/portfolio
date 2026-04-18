import './ProjectInfo.scss';
import '../../HomeTab/TechStackTab/TechStackTab.scss'
import { type Project } from '../ProjectsTab';
import { Fragment } from 'react/jsx-runtime';

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
        {data && 
        <> 
            {/* Title */}
            <button onClick={handleOnExit} className='pixel-buttons'>{"<"}</button>
            <div style={{maxHeight: "300px"}}><h2>{data.title}</h2></div>
            <div className="project-img-wrapper">
                {data.photo &&
                    <img src={data.photo} alt={data.title + " main image"} />
                }
            </div>

            {/* About */}
            {data.text?.map((line, key) => 
                line.match(/^\*/) ? 
                    <h3 key={key} className='border-bottom-animation'>{line.split("*")[1]}</h3>:
                    <p key={key}>{line}</p>
            )}

            {/* Tech Stack */}
            <h3 className='border-bottom-animation'>Tech stack</h3>
            <p>Key technologies used in this app:</p>
            <ul>
                {data.stack?.words?.length ? data.stack?.words?.map((stack, key) => (
                    <li key={key}>{stack}</li>
                )):
                <li>None was specified</li>
                }
            </ul>
            {data.stack?.icons.length ? 
                <img height={"64px"} src={`https://skills.syvixor.com/api/icons?i=${data.stack?.icons?.map((el) => el)}`} />:""
            }

            {/* Gallery */}
            {data.images?.length ?
                <div className="gallery-wrapper">
                    <h3 className='border-bottom-animation'>Gallery</h3>
                    <div className="carousel">
                        <div className="track">
                            {data.images.map((img, key) => (
                                <Fragment key={key}>
                                    <CarouselImages img={img}/>
                                </Fragment>
                            ))}
                            {/* Duplicates for animation purposes */}
                            {data.images.map((img, key)=> (
                                <Fragment key={key}>
                                    <CarouselImages img={img}/>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>:""
            }
        </>
            }
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