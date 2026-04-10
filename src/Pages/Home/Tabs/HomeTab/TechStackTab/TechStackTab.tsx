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
            <img src="https://skillicons.dev/icons?i=html" />
            <img src="https://skillicons.dev/icons?i=css" />
            <img src="https://skillicons.dev/icons?i=js" />
            <img src="https://skillicons.dev/icons?i=ts" />
            <img src="https://skillicons.dev/icons?i=scss" />
            <img src="https://skillicons.dev/icons?i=vite" />
            <img src="https://skillicons.dev/icons?i=react" />
            <img src="https://skillicons.dev/icons?i=next" />
            <img src="https://skillicons.dev/icons?i=vue" />
            <img src="https://skillicons.dev/icons?i=electron" />
            <img src="https://skillicons.dev/icons?i=git" />
            <img src="https://skillicons.dev/icons?i=github" />
            <img src="https://skillicons.dev/icons?i=linux" />
            <img src="https://skillicons.dev/icons?i=c" />
            <img src="https://skillicons.dev/icons?i=cs" />
            <img src="https://skillicons.dev/icons?i=vscode" />
            <img src="https://skillicons.dev/icons?i=visualstudio" />
            <img src="https://skillicons.dev/icons?i=latex" />
        </>
    )
}