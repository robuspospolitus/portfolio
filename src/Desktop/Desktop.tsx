import React, { useState } from 'react';
import File from './Components/File/File';
import './Desktop.scss';
import Background from '../Assets/Images/background2.jpg';
import data from '../Assets/Data/data.json';


const folderData = data.files;

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
