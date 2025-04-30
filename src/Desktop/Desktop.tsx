import React, { useState } from 'react';
import Folder from './Components/Folder/Folder';
import './Desktop.scss';
import Background from '../Assets/Images/background2.jpg';


const folderData = [
  {
    id: 1,
    title: "Pscólka",
    image: "images/bzz.png",
    content: [
      {
        id: 1,
        type: "folder",
        source: "images/bzz.png",
        title: "folder",
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
        title: "zdjecie 2 :>",
        content: []
      },
      {
        id: 4,
        type: "image",
        source: "images/bzz.png",
        title: "zdjecie 3 >:)",
        content: []
      },
      {
        id: 5,
        type: "image",
        source: "images/bzz.png",
        title: "przyklad row",
        content: []
      },
    ]
  },
  {
    id: 2,
    title: "Pscólkaa",
    image: "images/bzz.png",
    content: []
  },
];

function Desktop() {
  const[isGrid, setIsGrid] = useState<boolean>(true);
  
  return (
    <>
    <img className='background' src={Background} alt=''/>
    <div className="main" >
      {folderData.map((folder) => (
        <Folder isGrid={isGrid} data={folder} key={folder.id}/>
      ))}
      
      
    </div>
    </>
  );
}

export default Desktop;
