import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css'

export default function Navigation() {
    return (
    <nav>
        <ul className= "nav-bar">
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'purple':''}}}
                to="/" className="about-me">About Me</NavLink> 
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'purple':''}}}
                to="/portfolio" className="portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'purple':''}}}
                to="/resume" className="resume">Resume</NavLink>
            </li>
        </ul>
    </nav>
    );
}