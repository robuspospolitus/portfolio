import './TechStackTab.scss';

export default function TechStackTab() {
    
    return (
        <section className="full-section tech-stack-tab">
            <h2 className='border-bottom-animation'>My Tech Stack</h2>
            <p>My expertise spans a range of frontend technologies, allowing me to build modern, responsive, and user-friendly interfaces. I focus on clean design, performance, and creating intuitive user experiences.</p>
            <div className="carousel">
                <div className="track">
                    <CarouselImages/>
                    {/* Duplicates for animation purposes */}
                    <CarouselImages/>
                </div>
                
            </div>
        </section>
    )
}

const CarouselImages = () => {
    return (
        <>
            <img src="https://skillicons.dev/icons?i=html" alt="HTML" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=css" alt="CSS" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=scss" alt="SCSS" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=vite" alt="Vite" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=react" alt="React.js" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=next" alt="Next.js" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=vue" alt="Vue.js" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=electron" alt="Electron" draggable={false}/>
            <img src="https://skills.syvixor.com/api/icons?i=axios" alt="Axios" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=git" alt="Git" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=linux" alt="Linux" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=c" alt="C language" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=cs" alt="C# language" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=vscode" alt="Visual Studio Code" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=visualstudio" alt="Visual Studio" draggable={false}/>
            <img src="https://skillicons.dev/icons?i=latex" alt="Latex" draggable={false}/>
        </>
    )
}