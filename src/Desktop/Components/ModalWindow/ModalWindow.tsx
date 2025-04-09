import { useState } from 'react';
import './ModalWindow.scss';

interface modalData {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function ModalWindow({isOpen, setIsOpen}: modalData) {
    const[offset, setOffset] = useState<Array<number>>([0,0])
    const[xy, setxy] = useState<Array<number>>([0,0])
    const[styleOfMovingFile,setStyleOfMovingFile] = useState(`translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)`)

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
        setStyleOfMovingFile(`translate(${(x-offset[0])}px, ${(y-offset[1])}px)`)
    }
    
    const handleClose = () => {
        setIsOpen(() => false);
    }

    return(
        <div 
            className="modal-window" 
            style={{display: `${isOpen ? 'block': 'none'}`, transform: `${styleOfMovingFile}`}} 
            draggable="true"
            onDragEnter={(e) => e.preventDefault()} 
            onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} 
            onDragStart={(e) => {getOffset(e)}} 
            onDrag={(e) => handleDrag(e)}
            onDragEnd={(e) => {handleDrag(e)}}
        >
            <div className="mw-nav-bar">
                <button className='mw-nb-close' onClick={() => handleClose()}/>
            </div>
            <div className="mw-content">

            </div>
        </div>
    );
}
