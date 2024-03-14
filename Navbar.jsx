import React from 'react'
import { Link } from 'react-router-dom'
import { FaMicrophone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoMdApps } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    return (
        <div>

            <header class="header">
                <div class="logo left">
                    <i id="menu" class="material-icons"></i>
                    <img src="https://www.freecodecamp.org/news/content/images/2022/01/yt-logo.png" />
                </div>

                <div class="search center">
                    <form action="">
                        <input type="text" placeholder="Search" />
                        <button><i class="material-icons">search</i></button>
                    </form>
                    <i class="material-icons mic"><FaMicrophone /></i>
                </div>

                <div class="icons right">
                    <i class="material-icons icon"><FaVideo /></i>
                    
                    <i class="material-icons icon"><IoIosNotifications /></i>
                    <i class="material-icons icon"><CgProfile /></i>
                </div>
            </header >
        
    
            

            {/* <nav className="navbar navbar-inverse navbar ">
                <div className="nav-div">
                    <ul className="nav-ul">

                        <li><Link to="/">All</Link></li>
                        <li><Link to="/">Mixes</Link></li>
                        <li><Link to="/">Music</Link></li>
                        <li><Link to="/">T-Series</Link></li>
                        <li><Link to="/">Dramedy</Link></li>
                        <li><Link to="/">Live</Link></li>
                        </ul>
                </div>
            </nav>
             */}
    </div >
    )
}

export default Navbar
