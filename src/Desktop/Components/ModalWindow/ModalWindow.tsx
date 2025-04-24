import { useState } from 'react';
import './ModalWindow.scss';
import File from '../Folder/File/File';
import './../../../variables.scss';

type Content = {
    id: number,
    type: string,
    source: string,
    title: string,
    content?: Content[]
}
interface modalData {
    isOpen: boolean,
    content: Array<Content>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function ModalWindow({isOpen, setIsOpen, content}: modalData) {
    const[offset, setOffset] = useState<Array<number>>([0,0])
    const[xy, setxy] = useState<Array<number>>([0,0])
    const[styleOfMovingFile,setStyleOfMovingFile] = useState(`translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)`)

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

    return(
        <div 
            className="modal-window pixel-corners" 
            style={{display: `${isOpen ? 'block': 'none'}`, transform: `${styleOfMovingFile}`}} 
            
        >
            <div className="mw-navbar"
            draggable="true"
            onDragEnter={(e) => e.preventDefault()} 
            onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} 
            onDragStart={(e) => {getOffset(e);e.dataTransfer.setDragImage(drag, 0, 0);}} 
            onDrag={(e) => handleDrag(e)}
            onDragEnd={(e) => {handleDrag(e)}}
            >
                <button className='mw-nb-close pixel-buttons' onClick={() => handleClose()}/>
            </div>
            <div className="mw-content pixel-corners">
                {content.map((file) => (
                    <>
                        <File id={file.id} type={file.type} source={file.source} title={file.title} content={file.content}/>
                    </>
                ))}
            </div>
        </div>
    );
}
