import React from 'react'
import './Togggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { type } from '@testing-library/user-event/dist/type';


const Toggle = () => {
    const theme =useContext(themeContext);
    const darkmode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({type:'toggle'})
    }

  return (
    <>
        <div className="toggle" onClick={handleClick}>
            <Moon/>
            <Sun/>
            <div className="t-button"
            style={darkmode? {left:'2px'}: {right:'2px'}}>

            </div>
        </div>

    </>
  )
}

export default Toggle