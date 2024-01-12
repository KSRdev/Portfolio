import Logo from './logo'
import "../css/navBar.css";
import React from "react";


export default function NavBar() {
    
    return (
        <nav className='navBar' id='header'>
            <a className="linksnav" href="#About">About</a>
            <a className="linksnav" href="#Portfolio">Projects</a>
            <a href="#header"><Logo /></a>
            <a className="linksnav" href="http://">Skills</a>
            <a className="linksnav" href="http://">Contact</a>
        </nav>
    );
  }