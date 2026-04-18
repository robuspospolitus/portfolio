import { useState } from 'react';
import SunIcon from '../../../../assets/Logos/Sun';
import MoonIcon from '../../../../assets/Logos/Moon';
import './ThemeButton.scss';

export default function ThemeButton() {
    const [currentTheme, setCurrentTheme] = useState<string>(localStorage.getItem("theme") || "dark");
   
    const changeTheme = () => {
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
        localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
        document.body.className = `${currentTheme === "light" ? "dark" : "light"}-theme`;
    }

    return(
        <div className="theme-button pixel-buttons" onClick={changeTheme} >
            <SunIcon style={{opacity: currentTheme === "dark" ? 0 : 1, color: "white"}}/>
            <MoonIcon style={{opacity: currentTheme === "dark" ? 1 : 0, color: "white"}}/>
        </div>
    )

}