import React, { useState, useRef, useEffect } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import "./Folder.scss";

type Content = {
    id: number,
    type: string,
    source: string,
    title: string,
    content?: Content[]
}
type Data = {
    id: number,
    image: string,
    title: string,
    content: Array<Content>
}
interface FileProps {
    data: Data,
    isGrid: boolean,
    //setIsModalOpen: (x:string) => void;
}


export default function Folder({data, isGrid}: FileProps){
    const[offset, setOffset] = useState<Array<number>>([0,0])
    const[xy, setxy] = useState<Array<number>>([0,(100*data.id-100)])
    const[isActive, setActive] = useState<boolean>(false);
    const[styleOfMovingFile,setStyleOfMovingFile] = useState({ transform: `translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)`, opacity: '1' })
    const drag = new Image(0,0);
    const divRef = useRef<HTMLDivElement>(null);
    drag.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    //Modal window thingies
    const[isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

    const handleOpenModalWindow = () => {
        setIsModalOpen(true);
    }

    return(
        <>
            <div 
                style={styleOfMovingFile} 
                ref={divRef}
                className={`folder ${isActive ? "folder-active pixel-icons":''}`} 
                draggable="true" 
                onClick={() => setActive(true)}
                onDoubleClick={() => handleOpenModalWindow()}
                onBlur={() => setActive(false)}
                onDragEnter={(e) => e.preventDefault()} 
                onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} 
                onDragStart={(e) => {setActive(true);e.dataTransfer.setDragImage(drag, 0, 0);getOffset(e)}} 
                onDrag={(e) => handleDrag(e)}
                onDragEnd={(e) => {isGrid ? finalPlace(e) : handleDrag(e)}}
            >
                <img src={data.image} alt={data.title}/>
                <p className='title'>{data.title}</p>
            </div>
            <ModalWindow isOpen={isModalOpen} setIsOpen={setIsModalOpen} content={data.content}/>
        </>
    );
}