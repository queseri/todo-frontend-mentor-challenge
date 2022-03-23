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
    const handleFocus = (evt) => { 
        const target =  evt.target  
        target.parentNode.classList.add('active')      
    }

    const handleBlur = (evt) => {
        const target =  evt.target
       // targetLabel.classList.remove('active')
       // console.log(evt)
       // console.log(`blur on ${evt.target.id}`)
        if (!target.value) {
            target.parentNode.classList.remove('active');
        }
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
            <form onSubmit={handleSubmit} className='form'>
                <div className="search-container">
                    <label htmlFor='new-todo' className='lbl-new-todo'>Create a new todo</label>
                    <input type="text" name="text" id='new-todo' className='new-todo' autoComplete='off'
                    onFocus={handleFocus} onBlur={handleBlur} />
                    <button type="submit" className='btn btn-submit '>
                        <span className='sr-only'>add</span>
                    </button>
                </div>
            </form>
        </header>
    )
}

export default Header