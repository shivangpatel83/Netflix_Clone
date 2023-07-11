    import logo from '../../assets/navlogo.png'

import {FaGlobe} from "react-icons/fa";
import {useRef} from "react";
import { useNavigate } from 'react-router-dom';
export const LoginContainer=()=>{

    const navigate = useNavigate()
    const inputRef = useRef()


    return (
        <>
            <div className="logContainer">
                <nav className='loginNav'>
                    <div className="navLogo">
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className="rightNav">
                        <div className='language'><FaGlobe/>
                            <select name="lang" id="lang">
                                <option value="English">English</option>
                            </select>
                        </div>
                        <button className='btn' onClick={()=>navigate("/login")}>Sign In</button>
                    </div>
                </nav>
                <div className="loginInfo">
                    <h1>Unlimited Movies, TV Shows and more</h1>
                    <h2>Watch anywhere. cancel anytime.</h2>
                    <h3>Ready to watch? Enter your Email to create or restart your Membership</h3>
                    <div className="mailArea">
                        <input type="text" name="mail" ref={inputRef} id="mail" placeholder="Enter your mail"/>
                        <button className="btn startedBtn" onClick={()=>inputRef.current.focus()}>Get Started ></button>
                    </div>
                </div>
            </div>
        </>

    )
}