import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './ModalWindow.scss';
import File from '../File/File';
import './../../../styles/pixel-corners.scss';

type Content = {
    id: number,
    type: string,
    source: string,
    title: string,
    content?: Content[],
    photo?: string,
    text?: string[],
}
interface modalProps {
    id: number,
    isOpen: boolean,
    content?: Array<Content>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isInFolder: boolean,
    type: string,
    photo?: string,
    text?: string[],
}

// isInFolder??
export default function ModalWindow({id, isOpen, setIsOpen, content, photo, text, type}: modalProps) {
    const[isActive, setActive] = useState<boolean>(false);
    const[maximized, setMaximized] = useState<boolean>(false);
    const[offset, setOffset] = useState<Array<number>>([0,0])
    const[xy, setxy] = useState<Array<number>>([0,0])
    const[styleOfMovingFile,setStyleOfMovingFile] = useState(`translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)`)
    const divRef = useRef<HTMLDivElement>(null);

    // Modal is not set visually inside the element
    // Instead appears inside 'main' div
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const root = document.getElementById("main");
        setModalRoot(root);
        const handleClick = (e: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(e.target as Node)) {
            setActive(false); // click outside the box
            }
        };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
    }, []);
    if (!modalRoot) return null;


    const getOffset = (e:React.DragEvent) => {
        let offsetX = e.nativeEvent.offsetX;
        let offsetY = e.nativeEvent.offsetY;
        setOffset(() => [offsetX,offsetY]);
    }
    const drag = new Image(0,0);
    drag.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    // Makes dragging object visible while dragging if that makes sense
    // Also useful for dragging on place where mouse is set instead of grid
    const handleDrag = (e:React.DragEvent) => {
        let x = e.clientX;
        let y = e.clientY;
        setxy(() =>[x,y]);
        setStyleOfMovingFile(`translate(${(x-offset[0])}px, ${(y-offset[1])}px)`)
    }
    
    const handleClose = () => {
        setIsOpen(() => false);
    }

    const handleMaximize = () => {
        setMaximized(() => !maximized);
    }

    // CreatePortal is so the modal is not set inside the parent as in modalRoot
    return createPortal(
        <div 
            className={`modal-window pixel-corners ${isActive ? "modal-window-active":''} ${type==="image" && "modal-photo"} ${maximized && "modal-maximized"}`}
            ref={divRef}
            onClick={() => setActive(true)}
            style={{display: `${isOpen ? 'block': 'none'}`, transform: `${styleOfMovingFile}`}} 
            key={id}
        >
            <div className="mw-navbar"
            draggable="true"
            onClick={() => setActive(true)}
            onDragEnter={(e) => {e.preventDefault();setActive(true)}} 
            onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} 
            onDragStart={(e) => {getOffset(e);e.dataTransfer.setDragImage(drag, 0, 0);}} 
            onDrag={(e) => handleDrag(e)}
            onDragEnd={(e) => {handleDrag(e)}}
            >
                <button className='mw-nb-maximize pixel-buttons' onClick={() => handleMaximize()}/>
                <button className='mw-nb-close pixel-buttons' onClick={() => handleClose()}/>
            </div>
            <div className="mw-content pixel-corners" onClick={() => setActive(true)} key={id}>
            {
                type === "folder" && content &&(
                content.length > 0 ? 
                    (   content.map((file, index) => ( <File key={index} data={file} isGrid isInFolder maximized={maximized} /> ))) 
                    : 
                    (
                        <div className="folder-not-available">
                            <img src="images/octopus_sad.png" alt=":(" onContextMenu={(e) => e.preventDefault()} />
                            <p className="empty-folder"> There is no available content right now :( </p>
                        </div> 
                    )
            )}
            { type === "image" && photo && <img className='pixel-corners' src={photo} alt='photo' onContextMenu={e => {e.preventDefault()}}/> }
            { type === "text" && text && text.length !== 0 && 
                <div className="article">
                    {text.map((line, key) => 
                        <div key={key}>
                            {key === 0 ? <h2>{line}</h2> :
                            line.match(/^\d+\./) ? <h3 style={{margin: 0}}>{line}</h3> : <p style={{margin: 0}}>{line}</p>}<br/>
                        </div>
                    )}
                </div> }
            </div>
        </div>,
        modalRoot
    );
}
