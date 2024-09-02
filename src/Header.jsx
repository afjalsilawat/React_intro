import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

function Header(){
    return(
        <>
     <ul>
     <Link to={'/'}><li>Home</li></Link>
        <Link to={'/about'}><li>About <CiShoppingCart/></li></Link>
        <li>menu</li>
        <Link to={'/count'}><li>count</li></Link>
        <li>gallery</li>
     </ul>



        </>
    )
}

export default Header;