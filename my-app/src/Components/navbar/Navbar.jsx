import React from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";
import sport from "./sport_image.png"

const Navbar = () => {

    return (
        <>
        <div>Sport Baster</div>
        <ul className="nav">
            <li> Для мужчин </li>
            <li> Для женщин </li>
            <li> Для детей </li>
            <li> Зима </li>
            <li> Весна </li>
        </ul>
        <div>
            <h1 className='sport_text'>2 гантели по цене 1</h1>
            <img src={sport} alt="" />
        </div>
        
        </>
    )
}

export default Navbar;  