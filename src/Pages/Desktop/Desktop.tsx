import { useEffect, useState } from 'react';
import File from './Components/File/File';
import './Desktop.scss';
import Background from '../../Assets/Images/image.png';
import data from '../../assets/Data/data.json';

const folderData = data.files;

function Desktop() {
  const [isGrid] = useState<boolean>(true);
  const [,setCurrentTheme] = useState<string>(localStorage.getItem("theme") || "dark");
   
  const changeTheme = () => {
    setCurrentTheme("dark")
    localStorage.setItem("theme", "dark");
    document.body.className = `dark-theme`;
  }
  useEffect(() => {
    changeTheme();
  }, [])
  
  return (
    <>
    <img className='background' src={Background} draggable={false} alt='background' onContextMenu={e => {e.preventDefault()}}/>
    <div id="main" >
      {folderData.map((folder) => (
        <File isGrid={isGrid} isInFolder={false} data={folder} key={folder.id}/>
      ))}
    </div>
    </>
  );
}

export default Desktop;
