import React, { useState } from 'react';
import File from './Components/File/File';
import './Desktop.scss';
import Background from '../Assets/Images/background2.jpg';


const folderData = [
  {
    id: 1,
    type: 'folder',
    source: "images/bzz.png",
    title: "Pscólka",
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
    type: 'folder',
    title: "Pscólkaa",
    source: "images/bzz.png",
    content: []
  },
];

const fileData = [
  {
    id: 1,
    type: "folder",
    source: "images/bzz.png",
    title: "folder",
    content: []
  }
]

function Desktop() {
  const[isGrid, setIsGrid] = useState<boolean>(true);
  
  return (
    <>
    <img className='background' src={Background} alt=''/>
    <div id="main" >
      {folderData.map((folder) => (
        <File isGrid={isGrid} isInFolder={false} data={folder} key={folder.id}/>
      ))}
      
      
    </div>
    </>
  );
}

export default Desktop;
