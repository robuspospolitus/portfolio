import React, { useState, useRef, useEffect } from 'react';
import "./File.scss";

interface FileProps {
    id: number,
    isGrid: boolean,
    image: string,
    title: string
}


export default function File({isGrid, id, image, title}: FileProps){
    const[offset, setOffset] = useState<Array<number>>([0,0])
    const[xy, setxy] = useState<Array<number>>([0,(100*id-100)])
    const[isActive, setActive] = useState<boolean>(false);
    const[styleOfMovingFile,setStyleOfMovingFile] = useState({ transform: `translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)`, opacity: '1' })
    const drag = new Image(0,0);
    const divRef = useRef<HTMLDivElement>(null);
    drag.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
          if (divRef.current && !divRef.current.contains(e.target as Node)) {
            setActive(false); // kliknięcie poza boxem
          }
        };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    //offset of the mouse relative to the object
    const getOffset = (e:React.DragEvent) => {
        let offsetX = e.nativeEvent.offsetX;
        let offsetY = e.nativeEvent.offsetY;
        setOffset(() => [offsetX,offsetY]);
    }

    // Makes dragging object visible while dragging if that makes sense
    // Also useful for dragging on place where mouse is set instead of grid
    const handleDrag = (e:React.DragEvent) => {
         let x = e.clientX;
         let y = e.clientY;
         setxy(() =>[x,y]);
         setStyleOfMovingFile({...styleOfMovingFile, transform: `translate(${(x-offset[0])}px, ${(y-offset[1])}px)`, opacity: `${isGrid ? '0.5':'1'}` })
    }

    // grid-like placement
    const finalPlace = (e:React.DragEvent) => {
        let x = Math.round((e.clientX-offset[0])/100)*100;
        let y = Math.round((e.clientY-offset[1])/100)*100;
        setxy(() =>[x,y]);
        setStyleOfMovingFile({...styleOfMovingFile, transform: `translate(${x}px, ${y}px)`, opacity: '1' })
    }

    return(
        <>
         <div 
            style={styleOfMovingFile} 
            ref={divRef}
            className={`file ${isActive ? "file-active":''}`} 
            draggable="true" 
            onClick={() => setActive(true)}
            onBlur={() => setActive(false)}
            onDragEnter={(e) => e.preventDefault()} 
            onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} 
            onDragStart={(e) => {setActive(true);e.dataTransfer.setDragImage(drag, 0, 0);getOffset(e)}} 
            onDrag={(e) => handleDrag(e)}
            onDragEnd={(e) => {isGrid ? finalPlace(e) : handleDrag(e)}}
        >
            <img src={image} alt={title}/>
            <p className='title'>{title}</p>
         </div>
        </>
    );
}