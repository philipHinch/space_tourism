//router
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//images
import logo from '../assets/shared/logo.svg';

const Navbar = () => {

    const navigate = useNavigate()
    // used this location path to toogle between navbar link active class
    const location = useLocation()

    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <div className="logoContainer" onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="navbarLine"></div>
            </div>
            <ul className="navbarRight">
                <Link to='/'><li className={`navbarItem ${ location.pathname === '/' ? 'activeLink' : '' }`}><span className="navbarLinkNumber">00</span>home</li>
                </Link>
                <Link to='/destination'><li className={`navbarItem ${ location.pathname === '/destination' ? 'activeLink' : '' }`}><span className="navbarLinkNumber">01</span>destination</li></Link>
                <Link to='/crew'><li className={`navbarItem ${ location.pathname === '/crew' ? 'activeLink' : '' }`}><span className="navbarLinkNumber">02</span>crew</li></Link>
                <Link to='/technology'><li className={`navbarItem ${ location.pathname === '/technology' ? 'activeLink' : '' }`}><span className="navbarLinkNumber">03</span>technology</li></Link>
            </ul>
        </div>

    );
}

export default Navbar;