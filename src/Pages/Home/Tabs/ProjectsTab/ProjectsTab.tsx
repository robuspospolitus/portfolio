import { useRef, useState } from 'react';
import './ProjectsTab.scss';
import data from '../../../../assets/Data/data.json';
import '../HomeTab/TechStackTab/TechStackTab.scss';
import ProjectInfo from './ProjectInfo/ProjectInfo';
const projects = data.files[1].content?.filter((file) => file.type === "project").sort((a, b) => {return a.id-b.id});

export default function ProjectsTab() {
    const [chosenProject, setChosenProject] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(document.createElement("div"));

    const handleShow = (id:number) => {
        setChosenProject(id);
        setIsActive((e) => !e);
        scrollRef.current.scrollIntoView();
    }
    const handleClose = () => {
        setIsActive(false);
    }
    return (
        <div ref={scrollRef} id='project-page-wrapper'>
            <div id="project-list">
                <div id="projects-title">
                    <h1>Projects</h1>
                    <p>from the newest</p>
                </div>
                <div className="items-wrapper">
                    {projects?.map((project) => 
                    <div key={project.id}>
                        <section>
                            <div className='item-wrapper pixel-corners'>
                                <div className='item-content pixel-corners'>
                                    <Project data={project} onClick={handleShow}/>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
                </div>
            </div>
            <div className={`project-info ${isActive && "project-active"}`}>
                { projects &&
                    <ProjectInfo data={projects[chosenProject] } onClick={handleClose}/>
                }
            </div>
        </div>
    )
}

type Stack = {
    words: string[],
    icons: string[]
}
export type Project = {
    id: number,
    images?: string[],
    photo?: string,
    source: string,
    stack?: Stack,
    description?: string,
    text?: string[],
    title: string,
    type: string,
    repository?: string,
    website?: string
}
type ProjectProps = {
    data: Project,
    onClick: (id:number) => void
}
function Project({data, onClick}:ProjectProps) {
    return (
        <>  
            <div className="img-section">
                <img src={data?.photo || 'images/example.png'} alt={data?.title+" photo"}/>
            </div>
            <div className="description-section">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
            </div>
            <div className="buttons-section">
                <button onClick={()=>onClick((data?.id || 1)-1)} className='btn_showmore pixel-buttons'>Show more!</button>
                <a href={data?.repository} target='_blank'><button className='btn_repo pixel-buttons'>Repo</button></a>
                {data?.website && <a href={data?.website} target='_blank'><button className='btn_website pixel-buttons'>WWW</button></a>}
            </div>
        </>
    )
}

