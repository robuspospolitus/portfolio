import { useState, useEffect, useRef, useCallback } from 'react';
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
    type: string,
    photo?: string,
    text?: string[],
}

// isInFolder??
export default function ModalWindow({id, isOpen, setIsOpen, content, photo, text, type}: modalProps) {
    const [isActive, setActive] = useState(false);
    const [maximized, setMaximized] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const offsetRef = useRef({ x: 0, y: 0 });

    // Modal is not set visually inside the element
    // Instead appears inside 'main' div
    const modalRoot = document.getElementById("main");

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(e.target as Node)) {
                setActive(false); // click outside the box
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);
    
    const handleDragStart = useCallback((e: React.DragEvent) => {
        offsetRef.current = {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY};
        const drag = new Image(0, 0);
        drag.src ='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        e.dataTransfer.setDragImage(drag, 0, 0);
    }, []);

    
    // Makes dragging object visible while dragging if that makes sense
    // Also useful for dragging on place where mouse is set instead of grid
    const handleDrag = useCallback((e: React.DragEvent) => {
        if (!divRef.current) return;
        const x = e.clientX - offsetRef.current.x;
        const y = e.clientY - offsetRef.current.y;
        positionRef.current = { x, y };
        divRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const handleMaximize = useCallback(() => {
        setMaximized(prev => !prev);
    }, []);

    // CreatePortal is so the modal is not set inside the parent as in modalRoot
    if (!modalRoot) return null;
    return createPortal(
        <div 
            className={`modal-window pixel-corners ${isActive ? "modal-window-active":''} ${type==="image" && "modal-photo"} ${maximized && "modal-maximized"}`}
            ref={divRef}
            onClick={() => setActive(true)}
            style={{display: `${isOpen ? 'block': 'none'}`}}
        >
            <div className="mw-navbar"
                draggable
                onMouseDown={() => setActive(true)}
                onDragStart={handleDragStart}
                onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} 
                onDrag={(e) => handleDrag(e)}
            >
                <button className='mw-nb-maximize pixel-buttons' onClick={() => handleMaximize()}/>
                <button className='mw-nb-close pixel-buttons' onClick={() => handleClose()}/>
            </div>
            <div className="mw-content pixel-corners" onClick={() => setActive(true)} key={id}>
            {
                type === "folder" && content &&(
                content.length > 0 ? 
                    (   content.map((file) => ( <File key={file.id} data={file} isGrid isInFolder maximized={maximized} /> ))) 
                    : 
                    (
                        <div className="folder-not-available">
                            <img src="images/octopus_sad.png" alt=":(" onContextMenu={(e) => e.preventDefault()} />
                            <p className="empty-folder"> There is no available content right now :( </p>
                        </div> 
                    )
            )}
            { type === "image" && photo && <img className='pixel-corners' src={photo} alt='photo' draggable={false} onContextMenu={e => {e.preventDefault()}}/> }
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
