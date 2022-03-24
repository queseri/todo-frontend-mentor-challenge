import React, { useState } from 'react'
import ThemeImgMoon from '../images/icon-moon.svg'
import ThemeImgSun from '../images/icon-sun.svg'

function Header(props) {
    const [theme, setTheme] = useState(false)
   
    const themeControl = () => {
        setTheme(!theme)
    }

    

    return (
        <header className='header'>
            <nav className="flex">
                <h1 className='main-title'>Todo</h1>
                <button className='btn btn-theme-control' aria-pressed={theme} onClick={themeControl}>
                    <span className='sr-only'>{"light theme"}</span>
                    <img className={`light-theme-img ${theme ? "hide-theme-img" : ""}`} src={ThemeImgMoon} alt="" />
                    <img className={`dark-theme-img ${theme ? "" : "hide-theme-img"}`} src={ThemeImgSun} alt="" />
                </button>
            </nav>
            
        </header>
    )
}

export default Header