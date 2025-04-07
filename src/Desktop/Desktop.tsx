import React, { useState } from 'react';
import File from './Components/File/File';
import './Desktop.scss';


const fileData = [
  {
    id: 1,
    title: "Pscółka",
    image: "images/bzz.png"
  },
  {
    id: 2,
    title: "Pscółkaa",
    image: "images/bzz.png"
  },
];

function Desktop() {
  const[isGrid, setIsGrid] = useState<boolean>(true);
  
  return (
    <>
    <div className="main" >
      {fileData.map((file) => (
        <File isGrid={isGrid} id={file.id} image={file.image} title={file.title} key={file.id}/>
      ))}
      
    </div>
    </>
  );
}

export default Desktop;
