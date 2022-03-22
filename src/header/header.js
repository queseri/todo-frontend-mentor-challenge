import React, { useState } from 'react'
import ThemeImgMoon from '../images/icon-moon.svg'
import ThemeImgSun from '../images/icon-sun.svg'

function Header() {
    const [theme, setTheme] = useState(false)

    const themeControl = () => {
        setTheme(!theme)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("event checked")
    }

    return (
        <header className='header'>
            <nav className="flex">
                <h1 className='main-title'>Todo</h1>
                <button className='btn btn-theme-control' aria-pressed={theme} onClick={themeControl}>
                    <span className='sr-only'>{theme ? "light theme" : "dark theme"}</span>
                    <img className={`light-theme-img ${theme ? "hide-theme-img" : ""}`} src={ThemeImgMoon} alt="" />
                    <img className={`dark-theme-img ${theme ? "" : "hide-theme-img"}`} src={ThemeImgSun} alt="" />
                </button>
            </nav>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='new-todo' className='new-todo'>Create a new todo</label>
                <input type="text" name="text" id='new-todo' className='new-todo' autoComplete='off' />
                <button type="submit" className='btn btn-submit '>
                    <span className='sr-only'>add</span>
                </button>
            </form>
        </header>
    )
}

export default Header