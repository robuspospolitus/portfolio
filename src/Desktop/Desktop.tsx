import React, { useState } from 'react';
import File from './Components/File/File';
import './Desktop.scss';

function Desktop() {
  const[isGrid, setIsGrid] = useState<boolean>(true);
  
  return (
    <>
    <div className="main" >
      <File  isGrid={isGrid} />
    </div>
    </>
  );
}

export default Desktop;
