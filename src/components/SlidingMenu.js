//router
import { Link } from "react-router-dom";
//images
import closeIcon from '../assets/shared/icon-close.svg';


const SlidingMenu = ({ showMenu, setShowMenu }) => {

    const handleClick = () => {
        setShowMenu(false)
    }

    return (
        <div className={`slidingMenuContainer ${ showMenu && 'activeSlidingMenu' }`}>
            <div className="closeIconContainer" onClick={handleClick}>
                <img src={closeIcon} alt="close icon" />
            </div>
            <ul className="slidingMenu" onClick={() => setShowMenu(false)}>
                <Link to='/'><li className="slidingMenuItem"><span className="slidingMenuNumber">00</span>Home</li></Link>
                <Link to='/destination'><li className="slidingMenuItem"><span className="slidingMenuNumber">01</span>destination</li></Link>
                <Link to='/crew'><li className="slidingMenuItem"><span className="slidingMenuNumber">02</span>crew</li></Link>
                <Link to='/technology'><li className="slidingMenuItem"><span className="slidingMenuNumber">03</span>technology</li></Link>
            </ul>
        </div>
    );
}

export default SlidingMenu;