import {useState} from "react";
import {FaGlobe} from "react-icons/fa";
import logo from '../../assets/navlogo.png'
import {useNavigate} from "react-router-dom";

export const FormLogin=()=>{
    const [text, setText] = useState('none')
    const [email, setEmail ] = useState('')
    const [passowrd, setPassword ] = useState('')
    const [error, setError ] = useState('')

    const navigate = useNavigate()
    const togglePage=()=>{
        if(email && passowrd){
            if(email.includes('@') && email.includes(`.`) && !email.includes(` `)) {
                navigate('/home')
            }else{
                setError(`*Invalid Email!`)
            }
        }
        else{
            setError('*Enter Email and Password!')
        }
    }
    const toggleText=()=>{
        setText('inherit')
    }
    return (
        <div className="logContainer formContainer">
            <div className="navLogo formLogo">
                <img src={logo} alt='logo'/>
            </div>
            <div className="parent">
            <div className="form">
                <h1><span>Sign In</span></h1>
                <div className="mailArea signupMail">
                    <input type="text" name="mail"  value={email} onChange={e=> setEmail(e.target.value)} id="mail" placeholder="Email or Phone Number"/>
                    <input type="password" name="mail"  value={passowrd} onChange={e=> setPassword(e.target.value)} id="mail" placeholder="Password"/>
                </div>
                <p style={{color: "red"}}>{error}</p>
                <div className="btnSection">
                <button className="btn startedBtn signInBtn" onClick={togglePage}>Sign In</button>
                <div className="help">
                    <div className="checkbox">
                        <input type="checkbox" id="check" name="check" value="remember"/>
                        <label htmlFor="check">Remember Me</label>
                        </div>
                    <p>Need Help?</p>
                </div>
                </div>
            </div>
                <div className="info">
                <h3>New to Netflix? <a href="/">Sign up now.</a></h3>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. </small>
                    <u onClick={toggleText}>Learn more.</u>
                    <div>
                    <small style={{display:text}}>The information collected by Google reCAPTCHA is subject to the Google <mark>Privacy Policy</mark> and <mark>Terms of Service</mark>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</small>
                    </div>
                </div>
            </div>
            <div className='signupFooter'>
                <h3>Questions? Call 000-800-919-1694</h3>
                <div className="support">
                    <ul>
                        <li>FAQ</li>
                        <li>Cookie Preferences</li>
                    </ul>
                    <ul className="bottomList">
                        <li>Help Center</li>
                        <li>Corporate Information</li>
                    </ul>
                    <ul>
                        <li>Terms & use</li>
                    </ul>
                    <ul>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='language languageFooter'><FaGlobe/>
                    <select name="lang" id="lang">
                        <option value="English">English</option>
                    </select>
                </div>
            </div>
        </div>
    )
}