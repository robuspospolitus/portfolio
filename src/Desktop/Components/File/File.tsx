import React, { useState } from 'react';
import "./File.scss";

export default function File({isGrid}:{isGrid: boolean}) {
    const[offset, setOffset] = useState<Array<number>>([0,0])
    const[xy, setxy] = useState<Array<number>>([0,0])
    const[styleOfMovingFile,setStyleOfMovingFile] = useState({ transform: `translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)` })
    
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
         setStyleOfMovingFile({ transform: `translate(${(x-offset[0])}px, ${(y-offset[1])}px)` })
    }
    // also onDrag={(e) => handleGrad(e)} is mandatory for visibility

    // grid-like placement
    const finalPlace = (e:React.DragEvent) => {
        let x = Math.round((e.clientX-offset[0])/100)*100;
        let y = Math.round((e.clientY-offset[1])/100)*100;
        setxy(() =>[x,y]);
        setStyleOfMovingFile({ transform: `translate(${x}px, ${y}px)` })
    }

    return(
        <>
         <div 
            style={styleOfMovingFile} 
            className="file" 
            draggable="true" 
            onDragEnter={(e) => e.preventDefault()} 
            onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} 
            onDragStart={(e) => getOffset(e)} 
            onDragEnd={(e) => {isGrid ? finalPlace(e) : handleDrag(e)}}>
         </div>
        </>
    );
}
