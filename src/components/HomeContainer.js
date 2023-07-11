import { FaSearch, FaBell, FaHiking, FaPlay, FaPlus } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import './homeContainer.css'
import logo from '../assets/navlogo.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import next from '../assets/next.svg'
import prev from '../assets/prev.svg'
import vid1 from '../assets/video1.mp4'
import vid2 from '../assets/video2.mp4'
import vid3 from '../assets/video3.mp4'
import vid4 from '../assets/video4.mp4'
import vid5 from '../assets/video5.mp4'
import vid6 from '../assets/video6.mp4'
import vid7 from '../assets/video7.mp4'
import vid8 from '../assets/video8.mp4'
import vid9 from '../assets/video9.mp4'
// const importAll = (r) => {
//     let images = {};
//     r.keys().forEach((key) => (images[key.replace('./','')] = r(key).default));
//     return Object.keys(images);
// };
//
// const images = importAll(
//     require.context( '../assets/', false, /\.jpg$/)
// );
// console.log(logo)

export const HomeContainer=()=>{
    return(
    <>
        <div className="homeContainer">
    <nav className='homeNav'>
        <div className="navLogo">
            <img src={logo} alt='logo'/>
        </div>
        <div className="menu">
            <ul>
               <li><NavLink className='navLink' to='/home'>TV Shows</NavLink></li>
                <li><NavLink className='navLink' to='/home'>Movies</NavLink></li>
                <li><NavLink className='navLink' to='/home'>Recently Added</NavLink></li>
                <li><NavLink className='navLink' to='/home'>My List</NavLink></li>
            </ul>
        </div>
        <div className="profileSection">
            <FaSearch className='navIcon'/>
            <FaBell className='navIcon'/>
            <FaHiking className='navIcon'/>
        </div>
    </nav>

            <div className="playContent">
                <div className="showText">
                    <h1>ROCKSTAR</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo metus sit amet fringilla commodo. Nunc cursus risus ac urna tincidunt, vitae varius neque tincidunt. Sed facilisis dolor eu nunc euismod eleifend.
                    </p>
                    <div className="playBtns">
                        <button className="showBtn"><FaPlay/> Play</button>
                        <button className="showBtn listBtn"><FaPlus/> My List</button>
                    </div>
                </div>
            </div>

            <div className="cards">
                <h1>Images</h1>
                <div className="images">
            <div className="cardsGroup" id='imgGrp-1'>
                <div className="cardsElement">
                    <img src={img1} alt="img1"/>
                </div>
                <div className="cardsElement">
                    <img src={img2} alt="img1"/>
                </div>
                <div className="cardsElement">
                    <img src={img3} alt="img1"/>
                </div>
                <a className="next" href="#imgGrp-2">
                    <img src={next} alt="next"/>
                </a>
            </div>
                <div className="cardsGroup" id='imgGrp-2'>
                    <a className="prev" href="#imgGrp-1">
                        <img src={prev} alt="next"/>
                    </a>
                <div className="cardsElement">
                    <img src={img4} alt="img1"/>
                </div>
                <div className="cardsElement">
                    <img src={img5} alt="img1"/>
                </div>
                <div className="cardsElement">
                    <img src={img6} alt="img1"/>
                </div>
                    <a className="next" href="#imgGrp-3">
                        <img src={next} alt="next"/>
                    </a>
                </div>
                <div className="cardsGroup" id='imgGrp-3'>
                    <a className="prev" href="#imgGrp-2">
                        <img src={prev} alt="next"/>
                    </a>
                <div className="cardsElement">
                    <img src={img7} alt="img1"/>
                </div>
                <div className="cardsElement">
                    <img src={img8} alt="img1"/>
                </div>
                <div className="cardsElement">
                    <img src={img9} alt="img1"/>
                </div>
            </div>
                </div>
            </div>

            <div className="cards">
                <h1>videos</h1>
                <div className="videos">
                    <div className="cardsGroup" id='vidGrp-1'>
                        <div className="cardsElement">
                            <video controls src={vid1}></video>
                        </div>
                        <div className="cardsElement">
                            <video controls src={vid2}></video>
                        </div>
                        <div className="cardsElement">
                            <video controls src={vid3}></video>
                        </div>
                        <a className="next" href="#vidGrp-2">
                            <img src={next} alt="next"/>
                        </a>
                    </div>
                    <div className="cardsGroup" id='vidGrp-2'>
                        <a className="prev" href="#vidGrp-1">
                            <img src={prev} alt="next"/>
                        </a>
                        <div className="cardsElement">
                            <video controls src={vid4}></video>
                        </div>
                        <div className="cardsElement">
                            <video controls src={vid5}></video>
                        </div>
                        <div className="cardsElement">
                            <video controls src={vid6}></video>
                        </div>
                        <a className="next" href="#vidGrp-3">
                            <img src={next} alt="next"/>
                        </a>
                    </div>
                    <div className="cardsGroup" id='vidGrp-3'>
                        <a className="prev" href="#vidGrp-2">
                            <img src={prev} alt="next"/>
                        </a>
                        <div className="cardsElement">
                            <video controls src={vid7}></video>
                        </div>
                        <div className="cardsElement">
                            <video controls src={vid8}></video>
                        </div>
                        <div className="cardsElement">
                            <video controls src={vid9}></video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="contact">
                    <h3>Questions? Call 1-844-505-2993</h3>
                </div>
                <div className="support">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Netflix Originals</li>
                    </ul>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Terms of Uses</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Redeem Gift Cards</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Media Center</li>


                        <li>Buy Gift Cards</li>
                        <li>Cookie Preferences</li>
                        <li>Legel Notices</li>
                    </ul>
                </div>

                <div className="language">

                    <select name="language" id="language">
                        <option selected value="English">English</option>
                        <option value="French">French</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
        </div>
        </div>
    </>
)}