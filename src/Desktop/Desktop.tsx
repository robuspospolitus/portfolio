import React, { useState } from 'react';
import Folder from './Components/Folder/Folder';
import './Desktop.scss';


const folderData = [
  {
    id: 1,
    title: "Pscółka",
    image: "images/bzz.png",
    content: [
      {
        id: 1,
        type: "folder",
        source: "images/bzz.png",
        title: "eo",
        content: []
      },
      {
        id: 2,
        type: "image",
        source: "images/bzz.png",
        title: "zdjecie :>",
        content: []
      },
      {
        id: 3,
        type: "image",
        source: "images/bzz.png",
        title: "zdjecie 2aaa :>",
        content: []
      },
      {
        id: 4,
        type: "image",
        source: "images/bzz.png",
        title: "zdjecie 3 >:)",
        content: []
      },
    ]
  },
  {
    id: 2,
    title: "Pscółkaa",
    image: "images/bzz.png",
    content: []
  },
];

function Desktop() {
  const[isGrid, setIsGrid] = useState<boolean>(true);
  
  return (
    <>
    <div className="main" >
      {folderData.map((folder) => (
        <Folder isGrid={isGrid} data={folder} key={folder.id}/>
      ))}
      
      
    </div>
    </>
  );
}

export default Desktop;
