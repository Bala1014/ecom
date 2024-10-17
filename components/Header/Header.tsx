import React from 'react'
import './header.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo-img'>
            <img src="/images/03.png" alt=""/>
        </div>

        <div className="nav-buttons">
            <Link className='nav-single-button' href={"/"}>HOME</Link>
            <Link className='nav-single-button' href={"/about"}>ABOUT US</Link>
            <Link className='nav-single-button' href={"/Products"}>PRODUCTS</Link>
            <Link className='nav-single-button' href={"/Downloads"}>DOWNLOADS</Link>

            <Link className='nav-single-button' href={"/blog"}>BLOG</Link>
            <Link className='nav-single-button' href={"/contact"}>CONTACT US</Link>

        </div>

    </div>
  )
}

export default Header