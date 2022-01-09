import Logo from './logo';
import { Link } from 'react-router-dom';
function Nav({open}) {
    return (
        <header>
            <div>
                <Link to="/" style={{textDecoration:"none"}}>
                    <Logo open={open}/>
                </Link>
                <ul>
                {/* <Link to="/services" style={{textDecoration:"none"}}><li>Services</li></Link>                */}
                <Link to="/about" style={{textDecoration:"none"}}><li>About</li></Link>
                <Link to="/contact" style={{textDecoration:"none"}}><li>Contact Us</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Nav;