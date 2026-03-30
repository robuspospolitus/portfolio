import React, { useState, useRef, useEffect, useMemo } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import "./File.scss";
import useWindowDimensions from '../../Functions/WindowDimensions';

type Content = {
    id: number,
    type: string,
    source: string,
    title: string,
    photo?: string,
    content?: Content[]
    text?: string[],
}

interface FileProps {
    data: Content,
    isGrid: boolean,
    isInFolder: boolean,
    maximized: boolean
}

export default function File({data, isGrid, isInFolder, maximized}: FileProps){
    const [offset, setOffset] = useState<Array<number>>([0,0])
    const [xy, setxy] = useState<Array<number>>([0,(100*data.id-100)])
    const [isActive, setActive] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { height, width } = useWindowDimensions();

    const columns = useMemo(() => { return Math.max(1, Math.floor(width * 0.85 / 110)); }, [width]);
    const inFolderStyle = useMemo<[number, number]>(() => {
        const index = data.id - 1;
        const cols = maximized ? columns : 4;
        return [
            (index % cols) * 110,
            Math.floor(index / cols) * 110
        ];
    }, [maximized, data.id, columns]);

    //Moving on the desktop
    const [styleOfMovingFile,setStyleOfMovingFile] = useState({ transform: `translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)`, opacity: '1' })
    //Moving in the folder
    const [styleOfFolderFile, setStyleOfFolderFile] = useState({ transform: `translate(${(inFolderStyle[0]-offset[0])}px, ${(inFolderStyle[1]-offset[1])}px)`, opacity: '1' })
    
    useEffect(() => {
        setStyleOfFolderFile({ transform: `translate(${(inFolderStyle[0]-offset[0])}px, ${(inFolderStyle[1]-offset[1])}px)`, opacity: '1' })
    }, [maximized, width])

    //no img while dragging
    const divRef = useRef<HTMLDivElement>(null);
    const drag = useMemo(() => {
        const img = new Image(0, 0);
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        return img;
    }, []);
    
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
          if (divRef.current && !divRef.current.contains(e.target as Node)) {
            setActive(false); // click outside the box
          }
        };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    //offset of the mouse relative to the object
    const getOffset = (e:React.DragEvent) => {
        setOffset(() => [e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    }

    // Makes dragging object visible while dragging if that makes sense
    // Also useful for dragging on place where mouse is set instead of grid
    const handleDrag = (e:React.DragEvent) => {
         setxy(() =>[e.clientX, e.clientY]);
         setStyleOfMovingFile({...styleOfMovingFile, transform: `translate(${(e.clientX-offset[0])}px, ${(e.clientY-offset[1])}px)`, opacity: `${isGrid ? '0.5':'1'}` })
    }

    // grid-like placement
    const finalPlace = (e:React.DragEvent) => {
        const x = Math.round((e.clientX-offset[0])/100)*100;
        const y = Math.round((e.clientY-offset[1])/100)*100;
        const xwidth = Math.floor((width)/100)*100; 
        const yheight = Math.floor((height)/100)*100; 

        const newX = Math.max(0, Math.min(x, xwidth - 100));
        const newY = Math.max(0, Math.min(y, yheight - 100));

        setxy(() => [newX, newY]);
        setStyleOfMovingFile({
            ...styleOfMovingFile,
            transform: `translate(${newX}px, ${newY}px)`,
            opacity: '1',
        });
        
    }

    const handleOpenModalWindow = () => {
        setIsModalOpen(true);
    }

    return(
        <>
            <div 
                style={isInFolder ? styleOfFolderFile : styleOfMovingFile} 
                ref={divRef}
                className={`file ${isActive ? "file-active pixel-icons":''}`} 
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
                <img src={data.source} alt={data.title} onContextMenu={e => {e.preventDefault()}} />
                <p className='title'>{data.title}</p>
            </div>
            {data.content ?
                <ModalWindow id={data.id} isOpen={isModalOpen} isInFolder={isInFolder} setIsOpen={setIsModalOpen} content={data.content} type={data.type}/>
            : data.photo ?
                <ModalWindow id={data.id} isOpen={isModalOpen} isInFolder={isInFolder} setIsOpen={setIsModalOpen} photo={data.photo} type={data.type}/>
            : data.text ?
                <ModalWindow id={data.id} isOpen={isModalOpen} isInFolder={isInFolder} setIsOpen={setIsModalOpen} text={data.text} type={data.type}/>
            :
                <></>
            }
        </>
    );
}