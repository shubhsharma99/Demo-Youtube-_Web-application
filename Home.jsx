import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { IoHome } from "react-icons/io5";
import { AiFillFastForward } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { LiaVideoSolid } from "react-icons/lia";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";


const Home = () => {
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <main>
                    <div class="side-bar">

                        <div class="nav">
                            <a class="nav-link active">
                                <i class="material-icons"><IoHome /></i>
                                <span>Home</span>
                            </a>
                            <a class="nav-link">
                                <i class="material-icons"><AiFillFastForward /></i>
                                <span>Trending</span>
                            </a>
                            <a class="nav-link">
                                <i class="material-icons"><MdSubscriptions /></i>
                                <span>Subscriptions</span>
                            </a>
                        </div>
                        <hr />
                        <div class="nav">

                            <a class="nav-link">
                                <i class="material-icons"><MdLibraryBooks /></i>
                                <span>Library</span>
                            </a>
                            <a class="nav-link">
                                <i class="material-icons"><FaHistory /></i>
                                <span>History</span>
                            </a>
                            <a class="nav-link">
                                <i class="material-icons"><LiaVideoSolid /></i>
                                <span>Your Videos</span>
                            </a>
                            <a class="nav-link">
                                <i class="material-icons"><MdWatchLater /></i>
                                <span>Watch Later</span>
                            </a>
                            <a class="nav-link">
                                <i class="material-icons"><FaThumbsUp /></i>
                                <span>Liked Videos</span>
                            </a>
                        </div>
                    </div>
                    <div class="content">
                        <nav className="navbar navbar-inverse navbar ">
                            <div className="nav-div">
                                <ul className="nav-ul">

                                    <li id='all'><Link to="/">All</Link></li>
                                    <li><Link to="/">Mixes</Link></li>
                                    <li><Link to="/">Music</Link></li>
                                    <li><Link to="/">T-Series</Link></li>
                                    <li><Link to="/">Dramedy</Link></li>
                                    <li><Link to="/">Live</Link></li>
                                    <li><Link to="/">wickets</Link></li>
                                    <li><Link to="/">lo-fi</Link></li>
                                    <li><Link to="/">Live</Link></li>
                                    <li><Link to="/">Live</Link></li>
                                    <li><Link to="/">wickets</Link></li>
                                    <li><Link to="/">lo-fi</Link></li>
                                    <li><Link to="/">Live</Link></li>
                                </ul>
                            </div>
                        </nav>
                        {/* --------------------------------------------------------- */}
                        <div class="videos">

                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj1.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="./images/obj2.jpg" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>

                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj3.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="./images/obj4.jpg" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>

                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj1.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="./images/obj2.jpg" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>


                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj2.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="./images/obj3.jpg" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>

                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj3.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="./images/obj4.jpg" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>

                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj4.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>

                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj3.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>

                            <div class="video">
                                <div class="thumbnail">
                                    <img src="./images/obj2.jpg" alt="" />
                                </div>

                                <div class="details">
                                    <div class="author">
                                        <img src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                    </div>
                                    <div class="title">
                                        <h3>
                                            Introverts & Content Creation | Sumudu Siriwardana
                                        </h3>
                                        <a href="">
                                            Francesco Ciulla
                                        </a>
                                        <span> 2M Views • 3 Months Ago </span>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </main >
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Home