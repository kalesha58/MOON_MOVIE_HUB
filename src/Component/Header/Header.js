import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div  onClick={()=>window.scroll(0,0)}>
        <span className='header'>
        MOON MOVIE HUB
      </span>
    </div>
  )
}

export default Header
