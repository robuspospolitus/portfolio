import React, { useState, useRef, useEffect } from 'react';
import './File.scss';



interface FileProps {
    id: number,
    type: string,
    source: string,
    title: string,
    content?: FileProps[]
}


export default function File({id, type, source, title, content}: FileProps){
    const[isActive, setActive] = useState<boolean>(false);
    
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(e.target as Node)) {
            setActive(false); // kliknięcie poza boxem
            }
        };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
    }, []);
    
    const drag = new Image(0,0);
    drag.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    const style = id < 5 ? {translate: `${(id-1)*110}px 0px`} : {translate: `${(id-5)*100}px 110px`};

    return(
        <>
            <div 
                ref={divRef}
                style={style}
                className={`file ${isActive ? "file-active pixel-icons":""}`} 
                onClick={() => setActive(true)}
                onBlur={() => setActive(false)}
                draggable="false"
                onDragStart={(e) => {setActive(true);e.dataTransfer.setDragImage(drag, 0, 0);}}
            >
                <img src={source} alt={title}/>
                <p className='title'>{title}</p>
            </div>
        </>
    );
}