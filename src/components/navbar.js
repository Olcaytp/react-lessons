import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <a href='#home'>Home</a>
            <a href='#news'>News</a>
            <a href='#contact'>Contact</a>
            <a href='#about'>About</a>
        </div>
    )
}

export const AltNavbar = () => {
    return (
        <div className='alt_navbar'></div>
    )
}

export default Navbar;