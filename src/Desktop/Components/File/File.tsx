import React, { useState } from 'react';
import "./File.scss";

export default function File() {
    const[offset, setOffset] = useState<Array<number>>([0,0])
    const[xy, setxy] = useState<Array<number>>([0,0])
    const[styleMove,setStyleMove] = useState({ transform: `translate(${(xy[0]-offset[0])}px, ${(xy[1]-offset[1])}px)`, cursor: 'grab' })
    
    const getOffset = (e:React.DragEvent) => {
        let offsetX = e.nativeEvent.offsetX;
        let offsetY = e.nativeEvent.offsetY;
        setOffset(() => [offsetX,offsetY]);
    }
    const handleDrag = (e:React.DragEvent) => {
        let x = e.clientX;
        let y = e.clientY;
        setxy(() =>[x,y]);
        setStyleMove({ transform: `translate(${(x-offset[0])}px, ${(y-offset[1])}px)`, cursor: 'grab' })
    }

    return(
        <>
         <div style={styleMove} className="file" draggable="true" onDragEnter={(e) => e.preventDefault()} onDragOver={(e) => {e.dataTransfer.dropEffect = "move";e.preventDefault()}} onDragStart={(e) => getOffset(e)} onDrag={(event) => handleDrag(event)} onDragEnd={(event) => handleDrag(event)}>
         </div>
        </>
    );
}
