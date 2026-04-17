import { useRef, useState, useMemo } from 'react';
import './ProjectsTab.scss';
import data from '../../../../assets/Data/data.json';
import '../HomeTab/TechStackTab/TechStackTab.scss';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import RepoIcon from '../../../../assets/Logos/Repo';
import GlobeIcon from '../../../../assets/Logos/Globe';

export default function ProjectsTab() {
    const personal = useMemo(() => data.files[1].content && data.files[1].content[0].content?.filter((file) => file.type === "project").sort((a, b) => {return a.id-b.id}), [data]);
    const collaborative = useMemo(() => data.files[1].content && data.files[1].content[1].content?.filter((file) => file.type === "project").sort((a, b) => {return a.id-b.id}), [data]);
    
    const [chosenProject, setChosenProject] = useState(0);
    const [projects, setProjects] = useState(personal);
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
                <section className="full-section">
                    <div className="side-to-side">
                        <p onClick={() => setProjects(personal)} className={`border-bottom-animation ${projects === personal && 'option-active'}`}>Personal</p>
                        <p onClick={() => setProjects(collaborative)} className={`border-bottom-animation ${projects === collaborative && 'option-active'}`}>Collaborative</p>
                    </div>
                </section>
                <div className="items-wrapper">
                    {projects?.map((project) => 
                        <div key={project.id}>
                            <section className='project'>
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
                <a href={data?.repository} target='_blank'><button className='btn_repo pixel-buttons'>
                    <RepoIcon/>
                </button></a>
                {data?.website && <a href={data?.website} target='_blank'><button className='btn_website pixel-buttons'>
                    <GlobeIcon/>
                </button></a>}
            </div>
        </>
    )
}

